# Lesson 06 - MUI


Check the docs at: https://mui.com/material-ui/getting-started/

## Install MUI and related packages

```sh
npm install @mui/material @emotion/react @emotion/styled
npm install @fontsource/roboto
npm install @mui/icons-material
```

Configure the project to use MUI instead of Tailwindcss

```jsx
// pages/_app.jsx

// The following is no longer needed, comment or remove
// import "@/styles/globals.css";
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App({ Component, pageProps }) {
  return <>
    <CssBaseline />
    <Component {...pageProps} />;
  </>
}
```

At this point, your app will still render, but it will have lost all its styling. Now it's time to rebuild the components using MUI. Let's start with the home page.

### Home Page `pages/index.jsx`

```jsx
import AstronautList from '@/components/AstronautList';
import data from '@/data/astronauts.json';
// MUI Components
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Typography
            component="h1"
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: 700, mb: 2 }}
          >
            Lesson 06 - Intro to Component Libraries: MUI
          </Typography>
          <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 2 }} />
        </Grid>

        <Grid size={12}>
          <AstronautList astronauts={data.astronauts} />
        </Grid>
      </Grid>
    </Container>
  );
}
```

**Relevant Links**
- https://mui.com/material-ui/react-container/
- https://mui.com/material-ui/react-grid/
- https://mui.com/material-ui/react-typography/
- https://mui.com/material-ui/react-divider/

### Astronaut List Component `components/AstronautList.jsx`

```jsx
import AstronautCard from './AstronautCard';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

export default function AstronautList({ astronauts }) {
  return (
    <>
      <Typography
        component="h2"
        variant="h5"
        sx={{ color: 'primary.main', fontWeight: 600, mb: 2 }}
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
```

**Relevant Links**
- https://mui.com/material-ui/react-list/

### Astronaut Card Component `components/AstronautCard.jsx`

```jsx
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

export default function AstronautCard(
  { astronaut },
) {
  // Get the required properties from the astronaut object
  const { agency, bio, date_of_birth: dateOfBirth, image, name, nationality, status } = astronaut;
  const { thumbnail_url: thumbnailUrl } = image;
  const nationalityName = nationality[0].name;
  const { abbrev } = agency;
  const { name: statusName } = status;
  const statusStyles = {
    Active: { bgcolor: 'success.main', color: 'success.contrastText' },
    Retired: { bgcolor: 'info.main', color: 'info.contrastText' },
    Deceased: { bgcolor: 'grey.700', color: 'common.white' },
  };
  const chipStyle = statusStyles[statusName] ?? { bgcolor: 'grey.500', color: 'common.white' };

  return (
    <Card
      component="li"
      variant="outlined"
      sx={{ mb: 2, borderRadius: 2 }}
    >
      <CardContent>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems={{ xs: 'flex-start', sm: 'flex-start' }}
        >
          <Box
            component="img"
            src={thumbnailUrl}
            alt={name}
            sx={{
              width: 80,
              height: 80,
              borderRadius: 1,
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />

          <Box sx={{ flex: 1 }}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={1}
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', md: 'center' }}
            >
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                born {dateOfBirth}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 0.5 }}>
              <Chip
                size="small"
                icon={<FlightTakeoffIcon />}
                label={statusName}
                sx={{
                  ...chipStyle,
                  '& .MuiChip-icon': { color: 'inherit' },
                }}
              />
              <Typography variant="body2" color="text.secondary">
                {nationalityName} ({abbrev})
              </Typography>
            </Stack>

            <Typography variant="body2" sx={{ mt: 1.5 }}>
              {bio}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
```

**Relevant Links**
- https://mui.com/material-ui/react-box/
- https://mui.com/material-ui/react-card/
- https://mui.com/material-ui/api/card-content/
- https://mui.com/material-ui/react-chip/
- https://mui.com/material-ui/react-stack/
- https://mui.com/material-ui/icons/

---

# Next.js Project Skeleton

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
