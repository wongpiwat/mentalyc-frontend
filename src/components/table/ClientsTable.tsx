import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import { Client } from "@/types/client";
import Chip from "@mui/material/Chip";
import { CLIENT_TYPE } from "@/constants/client";
import { formatDate } from "@/utils/format";
import { styled, tableCellClasses } from "@mui/material";

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

interface ItemsTableProps {
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

const ClientsTable = ({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
  onPageChange,
  onRowsPerPageChange,
}: ItemsTableProps): React.JSX.Element => {
  const rowIds = React.useMemo(() => {
    return rows.map((item) => item.id);
  }, [rows]);

  return (
    <Card>
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: "800px" }} size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell>Client Name</StyledTableCell>
              <StyledTableCell>Clinician Name</StyledTableCell>
              <StyledTableCell>Client Type</StyledTableCell>
              <StyledTableCell>Treatment Plan</StyledTableCell>
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
                      <Typography variant="subtitle2">
                        {row.clientName}
                      </Typography>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell>{row.clinicianName}</StyledTableCell>
                  <StyledTableCell>
                    <Chip
                      label={clientTypeLabel}
                      color={clientTypeColor as any}
                      size="small"
                    />
                  </StyledTableCell>
                  <StyledTableCell>{row.treatmentPlan}</StyledTableCell>
                  <StyledTableCell>
                    {formatDate(row.lastSession)}
                  </StyledTableCell>
                  <StyledTableCell>{row.unsavedNotes}</StyledTableCell>
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

export default ClientsTable;
