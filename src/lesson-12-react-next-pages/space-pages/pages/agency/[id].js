import { useRouter } from 'next/router';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import NavBar from '@components/NavBar';
import SimpleDetailsCard from '@components/SimpleDetailsCard';

export default function Agency() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <NavBar />
      <Container sx={{ paddingTop: 2 }}>
        <Grid container>
          <Grid item xs="2"></Grid>
          <Grid item xs="10">
            <Typography variant="h3" gutterBottom>
              Agency Page for {id}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
