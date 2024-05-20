
import React from 'react';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import CopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      aria-label='Navigation speed dial'
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}  // Correcting this line
    >
      <SpeedDialAction icon={<CopyIcon />} tooltipTitle='Copy' />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle='Print' />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle='Share' />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
