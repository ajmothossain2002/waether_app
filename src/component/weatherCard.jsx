import React from 'react';
import { Card, CardContent, Typography,} from '@mui/material';

const WeatherCard = ({ data, unit }) => {
  if (!data) return null;

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h5">{data.name}</Typography>
        <Typography variant="h6">
          {data.main.temp}° {unit === 'metric' ? 'C' : 'F'}
        </Typography>
        <Typography>{data.weather[0].description}</Typography>
        <Typography>Humidity: {data.main.humidity}%</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
