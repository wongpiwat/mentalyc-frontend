import React from "react";

import { MenuItem, Select, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chip from "@/components/chip/Chip";

interface DropdownProps {
  label?: string;
  options?: { label: string; tag: string; value: any }[];
}

type DropdownType = DropdownProps & React.ComponentProps<typeof Select>;

const Dropdown = ({
  label,
  value,
  options = [],
  onChange,
  fullWidth,
  ...props
}: DropdownType): React.JSX.Element => {
  return (
    <Stack sx={{ flex: fullWidth ? 1 : "none", gap: 1 }}>
      {label && <Typography variant="small">{label}</Typography>}
      <Select
        variant="outlined"
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
        IconComponent={(props) => <ExpandMoreIcon {...props} />}
        sx={{ background: "#FFF", height: 40 }}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Stack flexDirection="row" gap={1}>
              {option.tag && (
                <Chip label={option.tag} size="small" className="rounded-md" />
              )}
              {option.label && option.label}
            </Stack>
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};

export default Dropdown;
