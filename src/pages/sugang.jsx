import React, { useState } from 'react';
import { Box, styled, Paper, Grid } from '@mui/material';

import SugangNav from '@/components/SugangNav';
import SugangTimetable from '@/components/SugangTimetable';
import CounterContainer from '@/components/Counter';
import { TodosContainer } from '@/components/Todos';

export const drawerWidth = 256;
export const tableWidth = 480;

export default function Sugang() {
  // routes
  const [selected, setSelected] = useState(0);
  const onSelect = (id) => setSelected(id);
  return (
    <>
      {/* display: fixed */}
      <SugangNav selected={selected} onSelect={onSelect} />

      <SugangSearch />

      {/* display: fixed */}
      <SugangTimetable />
    </>
  );
}

const Container = styled(Box)`
  margin-left: ${drawerWidth}px;
  margin-right: ${tableWidth}px;
  width: calc(100% - ${drawerWidth}px -${tableWidth}px);

  padding: 20px 16px;
`;

function SugangSearch() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={3}>
          <Paper sx={{ px: 2 }} elevation={1}>
            1. 학년도 선택
            <CounterContainer />
            <TodosContainer />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
