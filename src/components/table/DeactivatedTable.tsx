import React from "react";

import {
  Box,
  Card,
  Chip,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { Client } from "@/types/client";
import { CLIENT_TYPE } from "@/constants/client";
import { formatDate } from "@/utils/format";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
    fontWeight: "bold",
    height: 38,
  },
  [`&.${tableCellClasses.body}`]: {
    color: theme.palette.common.black,
    height: 28,
  },
}));

interface DeactivatedTableProps {
  count?: number;
  page?: number;
  rows?: Client[];
  rowsPerPage?: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type DeactivatedTableType = DeactivatedTableProps &
  React.ComponentProps<typeof Table>;

const DeactivatedTable = ({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
  onPageChange,
  onRowsPerPageChange,
  ...rest
}: DeactivatedTableType) => {
  return (
    <Card>
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: "800px" }} size="small" {...rest}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Client Name</StyledTableCell>
              <StyledTableCell>Clinician Name</StyledTableCell>
              <StyledTableCell>Client Type</StyledTableCell>
              <StyledTableCell>Last Session</StyledTableCell>
              <StyledTableCell>Unsaved Notes</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const { label: clientTypeLabel, color: clientTypeColor } =
                CLIENT_TYPE[row.clientType] ?? {
                  label: "Unknown",
                  color: "primary",
                };

              return (
                <TableRow hover key={row.id}>
                  <StyledTableCell>
                    <Stack
                      sx={{ alignItems: "center" }}
                      direction="row"
                      spacing={2}
                    >
                      <Typography variant="label">{row.clientName}</Typography>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="label">{row.clinicianName}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Chip
                      label={clientTypeLabel}
                      size="small"
                      className={`bg-chip-${clientTypeColor} text-black`}
                    />
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="label">
                      {formatDate(row.lastSession)}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="label">{row.unsavedNotes}</Typography>
                  </StyledTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

export default DeactivatedTable;
