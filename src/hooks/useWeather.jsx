import { useState, useRef, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const API_KEY =import.meta.env.VITE_OPENWEATHER_API_KEY;

export default function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const controllerRef = useRef(null);

  const fetchWeather = async (city, unit = "metric") => {
    const normalizedCity = city.trim().toLowerCase();
    if (!normalizedCity) {
      toast.error("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
      controllerRef.current = new AbortController();

      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${normalizedCity}&appid=${API_KEY}&units=${unit}`,
        { signal: controllerRef.current.signal }
      );

      setWeather(data);
      toast.success("Weather loaded!");
    } catch (err) {
      if (axios.isCancel(err)) return;
      toast.error(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      controllerRef.current?.abort();
    };
  }, []);

  return { weather, fetchWeather, loading };
}
