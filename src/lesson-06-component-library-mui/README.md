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

---

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
