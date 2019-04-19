import { createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#007EA7',
      contrastText: '#ffffff',
    },
  },
  overrides: {
    MuiButton: { 
      text: { 
        fontSize: '15px',
        textTransform: 'none',
        fontWeight: 'normal'
      },
    },
  }
});

export default theme;