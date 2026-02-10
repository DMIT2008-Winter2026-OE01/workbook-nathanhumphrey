import { Container, Typography } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('Hello world.');
  return (
    <Container>
      <Typography component="h1" variant="h3">
        State and Events Fundamentals Example
      </Typography>
      <Typography>
        This is the home page for the State and Events Fundamentals example.
      </Typography>
      <Typography>{text}</Typography>
      <button onClick={(event) => {
        console.log('button clicked.', event);
        setText('Goodbye now.');
        }}>Click Me!</button>
    </Container>
  );
}
