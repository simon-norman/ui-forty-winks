import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#007EA7',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00A7E1',
      contrastText: '#ffffff',
    }
  },
  overrides: {
    MuiButton: { 
      text: { 
        fontSize: '1.5rem',
        textTransform: 'none',
        fontWeight: 'normal'
      },
    },
  }
});

export default theme;