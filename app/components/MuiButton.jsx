"use client"
import SendIcon from "@mui/icons-material/Send";
import { Stack, Button, IconButton, ButtonGroup,ToggleButton,ToggleButtonGroup } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormartItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";
const MuiButton = () => {
   
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">contanied</Button>
        <Button variant="outlined">outline</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secoundry
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>

      <Stack spacing={2} display="block" direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>

        <IconButton aria-label="Send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
         color='secondary'
         aria-label='alignment button group'

        >
          <Button onClick={() => alert('left clicked')}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

        <Stack>
        <ToggleButtonGroup aria-label="text-formatting">
        <ToggleButton value='bold' aria-label="bold"><FormatBoldIcon/></ToggleButton>
        <ToggleButton value='italic' aria-label="italic"><FormartItalicIcon/></ToggleButton>
        <ToggleButton value='underlined' aria-label="underlined"><FormatUnderlinedIcon /></ToggleButton>

        </ToggleButtonGroup>
        </Stack>

    </Stack>
  );
};

export default MuiButton;
