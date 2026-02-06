import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AstronautList from '@/components/AstronautList';
import data from '@/data/astronauts.json';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid size={12}>
          <Typography
            variant="h4"
            component="h1"
            sx={{color: "primary.dark", fontWeight: 700, mb: 2 }}>
            Lesson 06 - Intro to Component Libraries: MUI
          </Typography>
          <Divider sx={{borderColor: "primary.dark", borderBottomWidth: 3}} />
        </Grid>
      </Grid>
      <Grid size={12}>
        <AstronautList astronauts={data.astronauts} />
      </Grid>
    </Container>
  );
}
