// Home.jsx
import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Container,
  Typography,
  CircularProgress,
} from "@mui/material";
import useWeather from "../hooks/useWeather";
import WeatherCard from "../component/weatherCard";

export default function Home() {
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric");
  const { weather, fetchWeather, loading } = useWeather();

  const handleSearch = () => {
    if (!city.trim()) return;
    fetchWeather(city, unit);
  };

  useEffect(() => {
    if (city.trim() && weather) {
      fetchWeather(city, unit);
    }
  }, [unit]);

  return (
    <Box
      minHeight="100vh"
      sx={{
        background: "linear-gradient(to top right, #57aff7ff, #ffe96bff)",
        color: "white",
        py: 0,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h1" align="center" fontWeight="bold" color="black">
          WEATHER APP
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
          justifyContent="center"
          mb={3}
        >
          <TextField
            label="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            inputProps={{ autoFocus: true }}
            fullWidth
          />

          <Button
            variant="contained"
            onClick={handleSearch}
            disabled={!city.trim() || loading}
            sx={{ whiteSpace: "nowrap" }}
          >
            {loading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Search"
            )}
          </Button>

          <ToggleButtonGroup
            value={unit}
            exclusive
            onChange={(e, newUnit) => newUnit && setUnit(newUnit)}
            size="small"
            color="primary"
          >
            <ToggleButton value="metric">°C</ToggleButton>
            <ToggleButton value="imperial">°F</ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <WeatherCard data={weather} unit={unit} />
      </Container>
    </Box>
  );
}
