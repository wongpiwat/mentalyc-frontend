import React from "react";
import { Button as MUIButton } from "@mui/material";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  sx?: object;
}

type ButtonPropsType = ButtonProps & React.ComponentProps<typeof MUIButton>;

const Button = ({ children, onClick, sx, ...rest }: ButtonPropsType) => {
  return (
    <MUIButton
      variant="outlined"
      onClick={onClick}
      sx={{ height: 42, ...sx }}
      {...rest}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
