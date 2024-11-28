import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import {
  clientSchema,
  defaultValues,
  Values,
} from "@/schemas/client.schema";

type CreateItemModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: Values) => void;
};

export default function CreateClientModal({
  open,
  onClose,
  onSubmit,
}: CreateItemModalProps) {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Values>({ defaultValues, resolver: zodResolver(clientSchema) });

  const handleCreateItem = (values: Values) => {
    console.log("Create item", values);
    onSubmit(values);
    onClose();
  };

  const handleClose = (_event: object, reason: string) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") {
      return;
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Create a new item</DialogTitle>
      <form onSubmit={handleSubmit(handleCreateItem)}>
        <DialogContent>
          <Stack spacing={2}>
            <Controller
              control={control}
              name="clientName"
              render={({ field }) => (
                <FormControl error={Boolean(errors.clientName)}>
                  <InputLabel>Client Name</InputLabel>
                  <OutlinedInput {...field} label="clientName" />
                  {errors.clientName ? (
                    <FormHelperText>{errors.clientName.message}</FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="clinicianName"
              render={({ field }) => (
                <FormControl error={Boolean(errors.clinicianName)}>
                  <InputLabel>Clinician Name</InputLabel>
                  <OutlinedInput
                    {...field}
                    label="clinicianName"
                    type="number"
                  />
                  {errors.clinicianName ? (
                    <FormHelperText>
                      {errors.clinicianName.message}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="clientName"
              render={({ field }) => (
                <FormControl error={Boolean(errors.clientName)}>
                  <InputLabel>Client Name</InputLabel>
                  <OutlinedInput
                    {...field}
                    label="clientName"
                    type="number"
                  />
                  {errors.clientName ? (
                    <FormHelperText>
                      {errors.clientName.message}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="clientType"
              render={({ field }) => (
                <FormControl error={Boolean(errors.clientType)}>
                  <InputLabel>Status</InputLabel>
                  <Select {...field} label="status" disabled>
                    <MenuItem value={0}>AB</MenuItem>
                    <MenuItem value={1}>CD</MenuItem>
                  </Select>
                  {errors.clientType ? (
                    <FormHelperText>{errors.clientType.message}</FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="clientType"
              render={({ field }) => (
                <FormControl error={Boolean(errors.clientType)}>
                  <InputLabel>Client Type</InputLabel>
                  <Select {...field} label="categoryCode">
                    <MenuItem value="AB">AB</MenuItem>
                    <MenuItem value="CD">CD</MenuItem>
                  </Select>
                  {errors.clientType ? (
                    <FormHelperText>
                      {errors.clientType.message}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button type="submit" autoFocus>
            Create Item
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
