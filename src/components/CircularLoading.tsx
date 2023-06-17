import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { usePallet } from '../contexts/PalletContext';


export default function CircularLoading(props: { size: number, top: string, left: string, zIndex: number }) {
  const { pallet } = usePallet();

  return (
    <>
      {
        <Box sx={{ display: 'flex' }}>
          <CircularProgress size={props.size} style={{
            color: `${pallet.color.primary.background}`,
            position: "absolute",
            top: `${props.top}`, left: `${props.left}`, zIndex: props.zIndex
          }} />
          {/* <CircularProgress size={80} style={{color:`${pallet.color.primary.background}`, position:"absolute", top:"50%", left:"50%", zIndex: 2}} /> */}
        </Box>
      }
    </>
  );
}