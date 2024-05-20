"use client";
import React from "react";
import { Box, Stack, Grid,Paper } from "@mui/material";
const MuiLayout = () => {
  return (
    <Paper sx={{padding:'32px'}} elevation={4}>
      <Stack direction="column" spacing={2} sx={{ border: "1px solid " }}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "200px",
            width: "200px",
            padding: "16px",
          }}
        >
          CodeVolution
        </Box>
        <Box
          display="flex"
          height="200px"
          width="200px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={3}>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>Items1</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>Items2</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>Items3</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>Items4</Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
