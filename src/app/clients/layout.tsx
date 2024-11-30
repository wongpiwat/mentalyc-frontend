"use client";

import React from "react";
import { Box, Container } from "@mui/material";
import Navigation from "@/components/navigation/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      sx={{
        background: "#F5F5F5",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minHeight: "100%",
      }}
    >
      <Navigation />
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}
