import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
    },
    text: {
      primary: '#000000',
    },
  },
});

export default theme;
