import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary1: {
      main: "#127CDF",
      contrastText: "#ffffff",
    },
    primary2: {
      main: "#499DE6",
      contrastText: "#ababab",
    },

    primary3: {
      main: "#76B9EF",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FFD152",
      contrastText: "#000000",
    },
    bg: {
      main: "#f5f7fa",
      contrastText: "#282829",
    },
  },
});

export default theme;
