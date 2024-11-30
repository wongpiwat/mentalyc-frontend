import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";

interface GlobalCssPriorityProps {
  children: React.ReactNode;
}

export default function GlobalCssPriority({
  children,
}: GlobalCssPriorityProps) {
  return (
    <StyledEngineProvider injectFirst>
      {/* Your component tree. Now you can override Material UI's styles. */}
      {children}
    </StyledEngineProvider>
  );
}
