import React from "react";

import {
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

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
      {label && <Typography>{label}</Typography>}
      <OutlinedInput
        value={value}
        fullWidth={fullWidth}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        sx={{
          maxWidth: "500px",
          background: "#FFF",
          borderRadius: 2,
          height: 40,
        }}
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
