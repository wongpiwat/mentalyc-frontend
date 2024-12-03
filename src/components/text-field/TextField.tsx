import React from "react";
import { Stack, Typography, OutlinedInput } from "@mui/material";

interface TextFieldProps {
  label?: string;
}

type TextFieldType = TextFieldProps &
  React.ComponentProps<typeof OutlinedInput>;

const TextField = ({ label, required, fullWidth, ...props }: TextFieldType) => {
  return (
    <Stack sx={{ flex: fullWidth ? 1 : "none", gap: 1 }}>
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

      <OutlinedInput
        sx={{
          background: "#FFF",
          borderRadius: 2,
          height: 40,
        }}
        required={required}
        fullWidth={fullWidth}
        {...props}
      />
    </Stack>
  );
};

export default TextField;
