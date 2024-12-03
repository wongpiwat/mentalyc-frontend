import React from "react";

import { InputAdornment, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import TextField from "@/components/text-field/TextField";

interface SearchFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  onCancel?: () => void;
  fullWidth?: boolean;
}

type SearchFieldTypes = SearchFieldProps &
  React.ComponentProps<typeof TextField>;

const SearchField = ({
  label,
  value,
  placeholder = "",
  onChange,
  onCancel,
  fullWidth = false,
}: SearchFieldTypes) => {
  return (
    <Stack sx={{ flex: fullWidth ? 1 : "none", gap: 1 }}>
      <TextField
        label={label}
        value={value}
        fullWidth={fullWidth}
        placeholder={placeholder}
        onChange={onChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          value && (
            <InputAdornment position="end">
              <CancelIcon onClick={onCancel} style={{ cursor: "pointer" }} />
            </InputAdornment>
          )
        }
      />
    </Stack>
  );
};

export default SearchField;
