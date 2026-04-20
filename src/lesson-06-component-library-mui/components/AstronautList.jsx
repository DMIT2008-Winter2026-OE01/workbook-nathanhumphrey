import AstronautCard from './AstronautCard';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

export default function AstronautList({ astronauts }) {
  return (
    <>
      <Typography
        component="h2"
        variant="h5"
        sx={{ color: 'secondary.main', fontWeight: 600, mb: 2 }}
      >
        Canadian Astronauts
      </Typography>

      <List
        disablePadding
        sx={{ listStyle: 'none' }}
      >
        {astronauts.map((astronaut) => (
          <AstronautCard
            key={astronaut.id}
            astronaut={astronaut}
          />
        ))}
      </List>
    </>
  );
}
