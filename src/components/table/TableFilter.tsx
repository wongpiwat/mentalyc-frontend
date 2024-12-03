import React from "react";

import { InputAdornment, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import TextField from "@/components/text-field/TextField";

type TableFilterProps = {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onCancelSearch: () => void;
  fullWidth?: boolean;
};

const TableFilter = ({
  label,
  value,
  placeholder = "",
  onChange,
  onCancelSearch,
  fullWidth = false,
}: TableFilterProps) => {
  return (
    <Stack sx={{ flex: fullWidth ? 1 : "none", gap: 1 }}>
      <TextField
        label={label}
        value={value}
        fullWidth={fullWidth}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          value && (
            <InputAdornment position="end">
              <CancelIcon
                onClick={onCancelSearch}
                style={{ cursor: "pointer" }}
              />
            </InputAdornment>
          )
        }
      />
    </Stack>
  );
};

export default TableFilter;
