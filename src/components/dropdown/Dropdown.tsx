import React from "react";

import { Box, MenuItem, TextField, Typography } from "@mui/material";
import Select from "@mui/material/Select";

export enum FilterType {
  None = -1,
}

interface FiltersProps {
  label?: string;
  placeholder?: string;
  filterType: FilterType;
  onChangeFilter: (filterType: FilterType) => void;
  options?: { label: string; value: FilterType }[];
}

const Dropdown = ({
  label,
  placeholder,
  filterType,
  onChangeFilter,
  options,
}: FiltersProps): React.JSX.Element => {
  return (
    <Box sx={{ flex: 1 }}>
      {label && <Typography variant="body1">{label}</Typography>}
      <Select
        variant="outlined"
        value={filterType}
        onChange={(e) => onChangeFilter(e.target.value as any)}
        defaultValue={FilterType.None}
        fullWidth
        sx={{ background: "#FFF" }}
        renderValue={(selected) => {
          console.log("selected", selected);
          if (selected === -1) {
            return placeholder;
          }

          return selected;
        }}
      >
        {options &&
          options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </Select>
    </Box>
  );
};

export default Dropdown;
