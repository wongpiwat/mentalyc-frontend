"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Button, Divider, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import useFetchItems from "@/hooks/useFetchItems";
import { Client } from "@/types/client";

import Tabs from "@/components/tabs/Tabs";
import TableFilter from "@/components/table/TableFilter";
import InTreatmentTable from "@/components/table/InTreatmentTable";
import DeactivatedTable from "@/components/table/DeactivatedTable";
import CreateClientModal from "@/components/modal/CreateClientModal";

const applyPagination = (
  rows: Client[],
  page: number,
  rowsPerPage: number,
): Client[] => {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
};

export default function Page() {
  const [tab, setTab] = useState(0);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchClientName, setSearchClientName] = useState<string>("");
  const [searchClinicianName, setSearchClinicianName] = useState<string>("");

  const [openCreateModal, setOpenCreateModal] = useState(false);

  const [filterItems, setFilterItems] = useState<Client[]>([]);

  const { items, loading, refresh } = useFetchItems();

  // Split items into active and deactivated clients
  const [activeClient, deactivatedClient] = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        if (item.status) {
          acc[0].push(item);
        } else {
          acc[1].push(item);
        }
        return acc;
      },
      [[], []] as [Client[], Client[]],
    );
  }, [items]);

  const showActiveClients = tab === 0;
  const clients = showActiveClients ? activeClient : deactivatedClient;
  const isSearchActive = searchClientName || searchClinicianName;
  const itemsToDisplay = isSearchActive ? filterItems : clients;
  const paginatedItems = applyPagination(itemsToDisplay, page, rowsPerPage);

  // console.log("clients", clients);

  // Filter items by client name and clinician name
  useEffect(() => {
    // console.log("searchClientName", searchClientName);
    // console.log("searchClinicianName", searchClinicianName);
    if (!searchClientName && !searchClinicianName) {
      return;
    }

    const filteredItems = clients.filter((item) => {
      const clientName = item.clientName.toLowerCase();
      const clinicianName = item.clinicianName.toLowerCase();
      const searchClientNameLower = searchClientName.toLowerCase();
      const searchClinicianNameLower = searchClinicianName.toLowerCase();

      return (
        clientName.includes(searchClientNameLower) &&
        clinicianName.includes(searchClinicianNameLower)
      );
    });

    // console.log("filteredItems", filteredItems);

    setFilterItems(filteredItems);
  }, [clients, searchClientName, searchClinicianName]);

  const handleChangeTab = (
    _event: any,
    newValue: React.SetStateAction<number>,
  ) => {
    setTab(newValue);
    setPage(0);
  };

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
              value={tab}
              items={[
                { label: "In treatment", size: activeClient.length },
                { label: "Deactivated", size: deactivatedClient.length },
              ]}
              onChange={handleChangeTab}
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

          {tab === 0 && (
            <>
              {itemsToDisplay.length > 0 ? (
                <InTreatmentTable
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
            </>
          )}

          {tab === 1 && (
            <>
              {itemsToDisplay.length > 0 ? (
                <DeactivatedTable
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
            </>
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
