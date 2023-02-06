import React from 'react';
import { Box, Typography } from '@mui/material';

import { tableWidth } from '@/pages/sugang';

export default function SugangTimetable() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100%',
        bgcolor: '#868e96',
        width: tableWidth,
      }}
    >
      <Typography color="rgba(255,255,255,0.8)">테이블</Typography>
    </Box>
  );
}
