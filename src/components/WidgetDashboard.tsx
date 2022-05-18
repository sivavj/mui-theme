import React, { useState } from "react";
import { Container, CssBaseline, Box, Typography } from "@mui/material";
import WidgetDrawer from "./WidgetDrawer";

export default function Dashboard() {
  const [selectedWidget, setSelectedWidget] = useState("");
  return (
    <Container>
      <CssBaseline />
      <Box sx={{mt:4}}>
        <Typography>{selectedWidget}</Typography>
      </Box>
      <WidgetDrawer onWidgetSelected={setSelectedWidget}/>
    </Container>
  );
}
