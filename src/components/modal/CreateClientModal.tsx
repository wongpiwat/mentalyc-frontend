import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Stack from "@mui/material/Stack";

import { clientSchema, defaultValues, Values } from "@/schemas/client.schema";
import { Typography } from "@mui/material";
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
    setError,
    formState: { errors },
  } = useForm<Values>({ defaultValues, resolver: zodResolver(clientSchema) });

  const watchAllFields = watch();
  console.log("watch", watchAllFields);

  const diagnosisOptions = [
    { label: "Adjustment disorder with anxiety", tag: "F43.22", value: 1 },
    { label: "Anxiety", tag: "F42.54", value: 2 },
    { label: "Disorder", tag: "F21.276", value: 3 },
  ];

  const clientTypeOptions = [
    { label: "Individual", value: "INDIVIDUAL" },
    { label: "Couple", value: "COUPLE" },
  ];

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
      <form onSubmit={handleSubmit(handleCreateItem)}>
        <DialogContent>
          <Stack spacing={2}>
            <Typography>Add new client</Typography>
            <Typography>
              This client information is essential for generating detailed
              clients documents
            </Typography>

            <Controller
              control={control}
              name="clientType"
              render={({ field }) => (
                <FormControl error={Boolean(errors.clientType)}>
                  <Radio
                    {...field}
                    label="Client type"
                    row
                    options={clientTypeOptions}
                  />
                  {errors.clientType ? (
                    <FormHelperText>{errors.clientType.message}</FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="clientName"
              render={({ field }) => (
                <FormControl error={Boolean(errors.clientName)}>
                  <TextField
                    {...field}
                    label="Name"
                    placeholder="Client name..."
                  />
                  {errors.clientName ? (
                    <FormHelperText>{errors.clientName.message}</FormHelperText>
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

            <Controller
              control={control}
              name="diagnosis"
              render={({ field }) => (
                <FormControl error={Boolean(errors.diagnosis)}>
                  <Dropdown
                    {...field}
                    label="Diagnosis"
                    options={diagnosisOptions}
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
                    <Typography>High risk client</Typography>
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
                    placeholder="Extra notes..."
                  />
                  {errors.extraNotes ? (
                    <FormHelperText>{errors.extraNotes.message}</FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button variant="contained" type="submit" autoFocus>
            Add client
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
