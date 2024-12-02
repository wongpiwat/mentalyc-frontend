import { createTheme, ThemeOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import React from "react";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body: true;
    label: true;
    small: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  body: React.CSSProperties;
  label: React.CSSProperties;
  small: React.CSSProperties;
}

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
    primary: {
      main: "#731054",
    },
  },
};

const theme = createTheme(config);

export default theme;
