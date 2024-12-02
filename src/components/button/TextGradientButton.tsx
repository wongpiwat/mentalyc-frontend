import React from "react";
import { Button } from "@mui/material";

interface TextGradientButtonProps {
  children: React.ReactNode;
}

type TextGradientButtonType = TextGradientButtonProps &
  React.ComponentProps<typeof Button>;

const TextGradientButton = ({ children, ...rest }: TextGradientButtonType) => {
  return (
    <Button
      sx={{
        height: 64,
        fontSize: 16,
        px: 2,
        background: "linear-gradient(296deg, #DE0D6F 16.23%, #731054 83.77%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        "&:hover": {
          opacity: 0.5,
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default TextGradientButton;
