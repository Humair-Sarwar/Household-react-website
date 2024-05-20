import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }} className='loaderStyle'>
      <CircularProgress />
    </Box>
  );
}
export function PgDashboardLoad() {
  return (
    <Box sx={{ display: 'flex' }} className='PgDashboardLoad'>
      <CircularProgress />
    </Box>
  );
}
