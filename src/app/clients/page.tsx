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
import Dropdown, { FilterType } from "@/components/dropdown/Dropdown";
import Tabs from "@/components/tabs/Tabs";

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

  const [openCreateModal, setOpenCreateModal] = useState(false);

  const [filterItems, setFilterItems] = useState<Client[]>([]);

  const [filterStatus, setFilterStatus] = useState(FilterType.None);
  const [filterCategoryCode, setFilterCategoryCode] = useState(FilterType.None);

  const { items, loading, refresh } = useFetchItems();

  const isEmpty = items.length === 0;
  const isFilteredStatus = filterStatus !== FilterType.None;
  const isFilteredCategoryCode = filterCategoryCode !== FilterType.None;

  const itemsToDisplay =
    isFilteredStatus || isFilteredCategoryCode ? filterItems : items;
  const paginatedItems = applyPagination(itemsToDisplay, page, rowsPerPage);

  // Filter items based on search text or status or category code
  useEffect(() => {
    if (
      filterStatus === FilterType.None &&
      filterCategoryCode === FilterType.None
    ) {
      return;
    }

    const filteredRows = items.filter((row) => {
      const results = [];

      // status filter
      if (filterStatus !== FilterType.None) {
        const _row = row.clientName === filterStatus;
        results.push(_row);
      }

      // category code filter
      if (filterCategoryCode !== FilterType.None) {
        const _row = row.clinicianName === filterCategoryCode;
        results.push(_row);
      }

      return results.every((result) => result);
    });

    // console.log("Filtered Rows Filter: ", filteredRows);

    setFilterItems(filteredRows);
    setPage(0);
  }, [items, filterStatus, filterCategoryCode]);

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

  const handleCreateItem = async (client: Client) => {
    console.log("Create client", client);
    try {
      const response = await createClient(client);
      console.log("Client created", response);
      refresh();
      // toast("Item created");
    } catch (error) {
      console.error("Error creating new client", error);
      // if (error) toast(error.toString());
    }
  };

  if (loading && isEmpty) {
    return <div>Loading...</div>;
  }

  return (
    <Stack>
      <Stack>
        <Stack direction="row" pt={2}>
          <Stack spacing={1} sx={{ flex: "1 1 auto" }}></Stack>
          <Button
            onClick={handleOpenCreateModal}
            startIcon={<HelpOutlineIcon />}
          >
            Help
          </Button>
        </Stack>

        <Stack spacing={2} p={2}>
          <Stack direction="row">
            <Stack spacing={1} sx={{ flex: "1 1 auto" }}>
              <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
                Clients
              </Typography>
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
              <Dropdown
                label="Client name"
                placeholder="Select client"
                filterType={filterStatus}
                onChangeFilter={(filterType: FilterType) =>
                  setFilterStatus(filterType)
                }
              />

              <Dropdown
                label="Clinician name"
                placeholder="Select clinician"
                filterType={filterCategoryCode}
                onChangeFilter={(filterType: FilterType) =>
                  setFilterCategoryCode(filterType)
                }
              />
            </Stack>

            <Stack flex={1} direction="row" alignItems="flex-end">
              <Stack flex={1} direction="row" alignItems="center" spacing={2}>
                <Divider sx={{ flex: 1 }} />

                <Button
                  variant="outlined"
                  onClick={handleOpenCreateModal}
                  startIcon={<AddIcon />}
                >
                  Add new client
                </Button>
              </Stack>
            </Stack>
          </Stack>

          <ClientsTable
            count={itemsToDisplay.length}
            page={page}
            rows={paginatedItems}
            rowsPerPage={rowsPerPage}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
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
