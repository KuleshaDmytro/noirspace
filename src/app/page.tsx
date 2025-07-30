'use client';

import { Box } from '@mui/material';
import HomePage from '../app/pages/Home';

export default function Home() {
  return (
      <Box component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' }, minHeight: '100vh', py: 2, justifyItems: 'center' }}>

        <HomePage />

      </Box>
  );
}