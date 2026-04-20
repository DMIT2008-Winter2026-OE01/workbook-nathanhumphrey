import TodoList from '@/components/TodoList';
import { Container, Typography } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  
  return (
    <Container>
      <Typography component="h1" variant="h3">
        State and Events Fundamentals Example
      </Typography>
      <Typography>
        This is the home page for the State and Events Fundamentals example.
      </Typography>
      <TodoList />
    </Container>
  );
}
