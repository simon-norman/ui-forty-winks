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
        fontSize: '1.7rem',
        textTransform: 'none',
        fontWeight: 'normal'
      },
      contained: { 
        fontSize: '1.7rem',
        textTransform: 'none',
        fontWeight: 600
      },
    },
    MuiInput: {
      input: {
        fontSize: '1.7rem',
      },
    }
  }
});

export default theme;
