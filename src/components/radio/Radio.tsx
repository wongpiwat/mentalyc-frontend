import React from "react";
import {
  FormControlLabel,
  RadioGroup,
  Radio as MUIRadio,
  Typography,
  Stack,
  styled,
  Theme,
} from "@mui/material";

const RadioGroupStyled = styled(RadioGroup)<{ fullWidth?: boolean }>(
  ({ theme, fullWidth }: { theme: Theme; fullWidth?: boolean }) => ({
    width: fullWidth ? "auto" : undefined,
    flexWrap: fullWidth ? "nowrap" : undefined,
  }),
);

const FormControlLabelStyled = styled(FormControlLabel)<{
  fullWidth?: boolean;
}>(({ theme, fullWidth }: { theme: Theme; fullWidth?: boolean }) => ({
  width: fullWidth ? "100%" : undefined,
  "& .MuiFormControlLabel-label": {
    padding: "4px 6px",
    borderRadius: 8,
  },
}));

interface RadioProps {
  label: string;
  row?: boolean;
  fullWidth?: boolean;
  options?: { label: string; value: string; color?: string }[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}

type RadioType = RadioProps & React.ComponentProps<typeof MUIRadio>;

const Radio = ({
  label,
  value,
  required,
  onChange,
  options = [],
  fullWidth,
  row,
}: RadioType) => {
  return (
    <Stack sx={{ gap: 1 }}>
      {label && (
        <Typography variant="small">
          {label}{" "}
          {required && (
            <Typography variant="small" color="error">
              *
            </Typography>
          )}
        </Typography>
      )}
      <RadioGroupStyled
        row={row}
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
      >
        {options.map((option) => (
          <FormControlLabelStyled
            key={option.value}
            value={option.value}
            control={<MUIRadio />}
            label={option.label}
            fullWidth={fullWidth}
            classes={{ label: `bg-chip-${option.color}` }}
          />
        ))}
      </RadioGroupStyled>
    </Stack>
  );
};

export default Radio;
