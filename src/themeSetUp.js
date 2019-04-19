import { createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#007EA7',
      contrastText: '#ffffff',
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Calibri',
      'sans-serif',
    ].join(','),
  },
});

export default theme;