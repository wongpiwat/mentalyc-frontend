import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  FormHelperText,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { clientSchema, defaultValues, Values } from "@/schemas/client.schema";
import {
  CLIENT_TYPE_OPTIONS,
  DIAGNOSIS_OPTIONS,
  PRONOUNS_OPTIONS,
} from "@/constants/client";

import TextField from "@/components/text-field/TextField";
import Dropdown from "@/components/dropdown/Dropdown";
import Radio from "@/components/radio/Radio";
import Switch from "@/components/switch/Switch";

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
    watch,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Values>({ defaultValues, resolver: zodResolver(clientSchema) });

  // const watchAllFields = watch();
  // console.log("watch", watchAllFields);

  const clientType = watch("clientType");

  const handleCreateItem = (values: Values) => {
    console.log("Create item", values);
    onSubmit(values);

    // clear form after submit
    reset();

    // close modal
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
      <form onSubmit={handleSubmit(handleCreateItem)}>
        <DialogContent>
          <Stack spacing={2}>
            <Stack spacing={2} alignItems="center">
              <IconButton
                onClick={onClose}
                className="text-primary"
                sx={(theme) => ({
                  position: "absolute",
                  right: 8,
                  top: 8,
                })}
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h4">Add new client</Typography>
              <Typography variant="label" color="textSecondary">
                This client information is essential for generating detailed
                clients documents
              </Typography>
            </Stack>

            <Controller
              control={control}
              name="clientType"
              render={({ field }) => (
                <FormControl error={Boolean(errors.clientType)}>
                  <Radio
                    {...field}
                    label="Client type"
                    row
                    options={CLIENT_TYPE_OPTIONS}
                    required
                  />
                  {errors.clientType ? (
                    <FormHelperText>{errors.clientType.message}</FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />

            {clientType === "INDIVIDUAL" && (
              <>
                <Controller
                  control={control}
                  name="clientName"
                  render={({ field }) => (
                    <FormControl error={Boolean(errors.clientName)}>
                      <TextField
                        {...field}
                        label="Name"
                        placeholder="Client name..."
                        required
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
                  name="pronouns"
                  render={({ field }) => (
                    <FormControl error={Boolean(errors.pronouns)}>
                      <Radio
                        {...field}
                        label="Pronouns"
                        options={PRONOUNS_OPTIONS}
                        fullWidth
                        required
                        row
                      />
                      {errors.pronouns ? (
                        <FormHelperText>
                          {errors.pronouns.message}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  )}
                />

                <Controller
                  control={control}
                  name="yearOfBirth"
                  render={({ field }) => (
                    <FormControl error={Boolean(errors.yearOfBirth)}>
                      <TextField
                        {...field}
                        label="Year of birth"
                        placeholder="Year of birth..."
                        type="number"
                      />
                      {errors.yearOfBirth ? (
                        <FormHelperText>
                          {errors.yearOfBirth.message}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  )}
                />
              </>
            )}

            {clientType === "COUPLE" && (
              <>
                <Controller
                  control={control}
                  name="clientName"
                  render={({ field }) => (
                    <FormControl error={Boolean(errors.clientName)}>
                      <TextField
                        {...field}
                        label="Name 1"
                        placeholder="Client name..."
                        required
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
                  name="clientName2"
                  render={({ field }) => (
                    <FormControl error={Boolean(errors.clientName2)}>
                      <TextField
                        {...field}
                        label="Name 2"
                        placeholder="Client name..."
                        required
                      />
                      {errors.clientName2 ? (
                        <FormHelperText>
                          {errors.clientName2.message}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  )}
                />
              </>
            )}

            <Controller
              control={control}
              name="diagnosis"
              render={({ field }) => (
                <FormControl error={Boolean(errors.diagnosis)}>
                  <Dropdown
                    {...field}
                    label="Diagnosis"
                    options={DIAGNOSIS_OPTIONS}
                  />
                  {errors.diagnosis ? (
                    <FormHelperText>{errors.diagnosis.message}</FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="highRiskClient"
              render={({ field }) => (
                <FormControl error={Boolean(errors.highRiskClient)}>
                  <Stack flexDirection="row" justifyContent="space-between">
                    <Typography variant="label">High risk client</Typography>
                    <Switch {...field} />
                    {errors.highRiskClient ? (
                      <FormHelperText>
                        {errors.highRiskClient.message}
                      </FormHelperText>
                    ) : null}
                  </Stack>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="extraNotes"
              render={({ field }) => (
                <FormControl error={Boolean(errors.extraNotes)}>
                  <TextField
                    {...field}
                    label="Extra notes"
                    placeholder="Extra information about your client"
                  />
                  {errors.extraNotes ? (
                    <FormHelperText>{errors.extraNotes.message}</FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button
            variant="contained"
            type="submit"
            sx={{ fontSize: 16 }}
            autoFocus
          >
            Add client
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
