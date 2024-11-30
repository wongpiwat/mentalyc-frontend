import React from "react";

import { Box, Chip, MenuItem, Select, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FiltersProps {
  label?: string;
  options?: { label: string; tag: string; value: any }[];
}

type DropdownProps = FiltersProps & React.ComponentProps<typeof Select>;

const Dropdown = ({
  label,
  value,
  onChange,
  options,
  ...props
}: DropdownProps): React.JSX.Element => {
  return (
    <Box sx={{ flex: 1 }}>
      {label && <Typography>{label}</Typography>}
      <Select
        variant="outlined"
        value={value}
        onChange={onChange}
        fullWidth
        IconComponent={(props) => <ExpandMoreIcon {...props} />}
        sx={{ background: "#FFF", height: 40 }}
        {...props}
      >
        {options &&
          options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Stack flexDirection="row" gap={1}>
                {option.tag && (
                  <Chip
                    label={option.tag}
                    size="small"
                    className="rounded-md"
                  />
                )}
                {option.label && option.label}
              </Stack>
            </MenuItem>
          ))}
      </Select>
    </Box>
  );
};

export default Dropdown;
