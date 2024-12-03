import React from "react";
import { Chip as MUIChip } from "@mui/material";

interface ChipProps {
  label: string;
}

type ChipType = ChipProps & React.ComponentProps<typeof MUIChip>;

const Chip = ({ label, size = "small", color, ...rest }: ChipType) => {
  return <MUIChip label={label} size={size} color={color} {...rest} />;
};

export default Chip;
