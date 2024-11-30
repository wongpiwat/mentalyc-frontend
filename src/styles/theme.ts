import { createTheme, ThemeOptions } from "@mui/material";

const config: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#731054",
    },
  },
};

const theme = createTheme(config);

export default theme;
