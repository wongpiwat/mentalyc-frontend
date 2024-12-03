import { createTheme, ThemeOptions } from "@mui/material";
import { ExtendedTypographyOptions } from "@/types/theme";

const config: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  typography: {
    h4: {
      fontFamily: "Inter",
      fontSize: 20,
      fontWeight: 700,
    } as ExtendedTypographyOptions["h4"],
    body: {
      fontFamily: "Inter",
      fontSize: 16,
      fontWeight: 400,
    } as ExtendedTypographyOptions["body"],
    label: {
      fontFamily: "Inter",
      fontSize: 14,
      fontWeight: 400,
    } as ExtendedTypographyOptions["label"],
    small: {
      fontFamily: "Inter",
      fontSize: 12,
      fontWeight: 400,
    } as ExtendedTypographyOptions["small"],
  } as ThemeOptions["typography"],
  palette: {
    text: {
      primary: "#040404",
      secondary: "#707070",
    },
    primary: {
      main: "#731054",
    },
    info: {
      main: "#E2F3FC",
    },
    success: {
      main: "#D5F6DE",
    },
    warning: {
      main: "#FDF4C8",
    },
    valhalla: {
      main: "#EFEAFD",
      light: "#FFFFFF",
      dark: "#040404",
      contrastText: "#040404",
    },
    kenyanCopper: {
      main: "#FFEAD5",
      light: "#FFFFFF",
      dark: "#040404",
      contrastText: "#040404",
    },
    gray: {
      main: "#EBEBEB",
      light: "#FFFFFF",
      dark: "#040404",
      contrastText: "#040404",
    },
  },
};

const theme = createTheme(config);

export default theme;
