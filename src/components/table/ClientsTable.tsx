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
        <Table sx={{ minWidth: "800px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Client Name</TableCell>
              <TableCell>Clinician Name</TableCell>
              <TableCell>Client Type</TableCell>
              <TableCell>Treatment Plan</TableCell>
              <TableCell>Last Session</TableCell>
              <TableCell>Unsaved Notes</TableCell>
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
                  <TableCell>
                    <Stack
                      sx={{ alignItems: "center" }}
                      direction="row"
                      spacing={2}
                    >
                      <Typography variant="subtitle2">
                        {row.clientName}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{row.clinicianName}</TableCell>
                  <TableCell>
                    <Chip
                      label={clientTypeLabel}
                      color={clientTypeColor as any}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{row.treatmentPlan}</TableCell>
                  <TableCell>{formatDate(row.lastSession)}</TableCell>
                  <TableCell>{row.unsavedNotes}</TableCell>
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
