import React, { lazy, Suspense } from 'react';
import { Container, Typography } from '@mui/material';

const Home = lazy(() => import('../src/pages/home'));

export default function App() {
  return (
 
      <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        🌤️ Real-Time Weather App
      </Typography>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </Container>
      
  
  );
}
