"use client";

import React, { useEffect, useState } from "react";
import { Button, Divider, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import useFetchItems from "@/hooks/useFetchItems";
import { createClient } from "@/services/client.services";
import { Client } from "@/types/client";

import CreateClientModal from "@/components/modal/CreateClientModal";
import ClientsTable from "@/components/table/ClientsTable";
import Tabs from "@/components/tabs/Tabs";
import TableFilter from "@/components/table/TableFilter";

const applyPagination = (
  rows: Client[],
  page: number,
  rowsPerPage: number,
): Client[] => {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
};

export default function Page() {
  const [value, setValue] = React.useState(0);

  const handleChange = (
    _event: any,
    newValue: React.SetStateAction<number>,
  ) => {
    setValue(newValue);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchClientName, setSearchClientName] = useState<string>("");
  const [searchClinicianName, setSearchClinicianName] = useState<string>("");

  const [openCreateModal, setOpenCreateModal] = useState(false);

  const [filterItems, setFilterItems] = useState<Client[]>([]);

  const { items, loading, refresh } = useFetchItems();

  const isSearchActive = searchClientName || searchClinicianName;
  const itemsToDisplay = isSearchActive ? filterItems : items;

  const paginatedItems = applyPagination(itemsToDisplay, page, rowsPerPage);

  useEffect(() => {
    // Filter items by client name and clinician name
    const filteredItems = items.filter((item) => {
      const clientName = item.clientName.toLowerCase();
      const clinicianName = item.clinicianName.toLowerCase();
      const searchClientNameLower = searchClientName.toLowerCase();
      const searchClinicianNameLower = searchClinicianName.toLowerCase();

      return (
        clientName.includes(searchClientNameLower) &&
        clinicianName.includes(searchClinicianNameLower)
      );
    });

    setFilterItems(filteredItems);
  }, [items, searchClientName, searchClinicianName]);

  const cancelClientNameSearch = () => {
    setSearchClientName("");
  };

  const cancelClinicianNameSearch = () => {
    setSearchClinicianName("");
  };

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };

  const handleCreateItem = async () => {
    try {
      console.log("Create client");
    } catch (error) {
      console.error("Error creating new client", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack>
      <Stack>
        <Stack direction="row" pt={2}>
          <Stack spacing={1} sx={{ flex: "1 1 auto" }}></Stack>
          <Button startIcon={<HelpOutlineIcon />}>Help</Button>
        </Stack>

        <Stack spacing={2} p={2}>
          <Stack direction="row">
            <Stack spacing={1} sx={{ flex: "1 1 auto" }}>
              <Typography variant="h4">Clients</Typography>
            </Stack>
          </Stack>

          <Stack direction="row">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              sx={{ flex: 1 }}
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            <Stack flex={1} direction="row" spacing={2}>
              <TableFilter
                label="Client name"
                placeholder="Search client"
                value={searchClientName}
                onChange={(searchVal) => setSearchClientName(searchVal)}
                onCancelSearch={() => cancelClientNameSearch()}
                fullWidth
              />

              <TableFilter
                label="Clinician name"
                placeholder="Search clinician"
                value={searchClinicianName}
                onChange={(searchVal) => setSearchClinicianName(searchVal)}
                onCancelSearch={() => cancelClinicianNameSearch()}
                fullWidth
              />
            </Stack>

            <Stack flex={1} direction="row" alignItems="flex-end">
              <Stack flex={1} direction="row" alignItems="center" spacing={2}>
                <Divider sx={{ flex: 1 }} />

                <Button
                  variant="outlined"
                  onClick={handleOpenCreateModal}
                  startIcon={<AddIcon />}
                  sx={{ fontSize: 16 }}
                >
                  Add new client
                </Button>
              </Stack>
            </Stack>
          </Stack>

          {itemsToDisplay.length > 0 ? (
            <ClientsTable
              count={itemsToDisplay.length}
              page={page}
              rows={paginatedItems}
              rowsPerPage={rowsPerPage}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          ) : (
            <Stack sx={{ alignItems: "center", padding: 4 }}>
              <Typography variant="label">
                🙁 Oops! No matches found. Please double-check your input.
              </Typography>
            </Stack>
          )}
        </Stack>
      </Stack>

      <CreateClientModal
        open={openCreateModal}
        onClose={handleCloseCreateModal}
        onSubmit={handleCreateItem}
      />
    </Stack>
  );
}
