import React from "react";
import { Button } from "@mui/material";

interface GradientButtonProps {
  children: React.ReactNode;
}

type GradientButtonType = GradientButtonProps &
  React.ComponentProps<typeof Button>;

const GradientButton = ({ children, ...rest }: GradientButtonType) => {
  return (
    <Button
      sx={{
        fontSize: 16,
        color: "white",
        background: "linear-gradient(296deg, #DE0D6F 16.23%, #731054 83.77%)",
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

export default GradientButton;
