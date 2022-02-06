import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { ToDoColumn } from './components/columns/ToDo';
import { InProgressColumn } from './components/columns/InProgress';
import { DoneColumn } from './components/columns/Done';

const App: React.FC = () => {
  return (
    <Container>
      <Typography textAlign='center' variant='h3' mt={3} mb={5}>
        This is a ToDo APP with Redux
      </Typography>
      <Grid container spacing={3} justifyContent='center'>
        <Grid item md={4}>
          <ToDoColumn />
        </Grid>
        <Grid item md={4}>
          <InProgressColumn />
        </Grid>
        <Grid item md={4}>
          <DoneColumn />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
