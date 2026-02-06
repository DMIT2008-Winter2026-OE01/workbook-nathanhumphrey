import { createTheme } from '@mui/material';

const themeOptions = {
  palette: {
    primary: {
      light: '#e87575',
      main: '#b23131',
      dark: '#840000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#618eff',
      main: '#364ff4',
      dark: '#0013ba',
      contrastText: '#000',
    },
  },
};

export const theme = createTheme(themeOptions);