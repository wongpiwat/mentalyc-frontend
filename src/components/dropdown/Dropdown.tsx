import React from "react";

import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        IconComponent={(props) => (<ExpandMoreIcon {...props}/>)}
        sx={{ background: "#FFF", height: 40 }}
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
