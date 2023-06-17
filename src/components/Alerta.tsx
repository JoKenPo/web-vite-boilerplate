import * as React from 'react';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import { useAlert } from '../contexts/AlertContext';
import { isMobile } from 'react-device-detect';

export default function Alerta() {
  const { currentAlert } = useAlert();
  return currentAlert && currentAlert.message !== '' ? (
    <Grid sx={{
      width: `${isMobile ? "90%" : "30%"}`,
      position: "absolute",
      alignContent: "center",
      top: `${isMobile ? "7%" : "10%"}`,
      left: `${isMobile ? "5%" : "35%"}`,
      zIndex: 5+'!important',
    }} spacing={2}>
      <Alert severity={currentAlert.severity}>{currentAlert.message}</Alert>
    </Grid>
  ) : <></>

}


