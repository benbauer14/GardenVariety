import { createMuiTheme, rgbToHex } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { SportsRugbySharp } from '@material-ui/icons';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[900],
    },
    secondary: {
      main: green[500],
    },
  },
  overrides:{
    textField:{
      background: "white",
      opacity: "80%"
    }
  }
});

export default theme;