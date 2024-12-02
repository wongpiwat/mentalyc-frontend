import React from "react";
import { Stack, Typography, OutlinedInput } from "@mui/material";

interface TextFieldProps {
  label?: string;
}

type TextFieldType = TextFieldProps &
  React.ComponentProps<typeof OutlinedInput>;

const TextField = ({ label, fullWidth, ...props }: TextFieldType) => {
  return (
    <Stack sx={{ flex: fullWidth ? 1 : "none", gap: 1 }}>
      {label && <Typography variant="small">{label}</Typography>}
      <OutlinedInput
        sx={{
          background: "#FFF",
          borderRadius: 2,
          height: 40,
        }}
        {...props}
      />
    </Stack>
  );
};

export default TextField;
