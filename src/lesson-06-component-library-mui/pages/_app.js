// import "@/styles/globals.css";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/util/theme/config.js';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>;
}
