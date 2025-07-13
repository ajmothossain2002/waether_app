import React, { lazy, Suspense } from 'react';
import { Container, Typography } from '@mui/material';

const Home = lazy(() => import('../src/pages/home'));

export default function App() {
  return (
 
<>
      <Suspense fallback={<div><marquee behavior="" direction="right">-+-++--+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+--+-+-++++++++++++++++++++++++---+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+---++--+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</marquee></div>}>
        <Home />
      </Suspense>
      </>
  
  );
}