import React from "react";
import {
  FormControlLabel,
  RadioGroup,
  Radio as MUIRadio,
  Typography,
  Stack,
} from "@mui/material";

interface RadioProps {
  label: string;
  row?: boolean;
  options?: { label: string; value: string }[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}

type RadioType = RadioProps & React.ComponentProps<typeof MUIRadio>;

const Radio = ({ label, value, onChange, options = [], row }: RadioType) => {
  return (
    <Stack sx={{ gap: 1 }}>
      {label && <Typography variant="small">{label}</Typography>}
      <RadioGroup row={row} value={value} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<MUIRadio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </Stack>
  );
};

export default Radio;
