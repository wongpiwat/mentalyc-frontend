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
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}

type RadioType = RadioProps & React.ComponentProps<typeof MUIRadio>;

const Radio = ({ label, name, value, onChange, row, ...rest }: RadioType) => {
  return (
    <Stack sx={{ gap: 1 }}>
      {label && <Typography>{label}</Typography>}
      <RadioGroup row={row} value={value} onChange={onChange}>
        <FormControlLabel
          value="female"
          control={<MUIRadio />}
          label="Female"
        />
        <FormControlLabel value="male" control={<MUIRadio />} label="Male" />
        <FormControlLabel value="other" control={<MUIRadio />} label="Other" />
      </RadioGroup>
    </Stack>
  );
};

export default Radio;
