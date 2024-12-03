import React from "react";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { Palette, PaletteColor } from "@mui/material";

export type PaletteKey = keyof {
  [Key in keyof Palette as Palette[Key] extends PaletteColor
    ? Key
    : never]: true;
};

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body: true;
    label: true;
    small: true;
  }
}

export interface ExtendedTypographyOptions extends TypographyOptions {
  body: React.CSSProperties;
  label: React.CSSProperties;
  small: React.CSSProperties;
}

declare module "@mui/material/styles" {
  interface Palette {
    valhalla: Palette["primary"];
    kenyanCopper: Palette["primary"];
    gray: Palette["primary"];
  }

  interface PaletteOptions {
    valhalla?: PaletteOptions["primary"];
    kenyanCopper?: PaletteOptions["primary"];
    gray?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    valhalla: true;
    kenyanCopper: true;
    gray: true;
  }
}
