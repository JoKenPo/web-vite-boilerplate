import React from 'react';
import clsx from 'clsx';
import { Toolbar, Typography, IconButton, Badge } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/system';

import { Menu as MenuIcon } from '@mui/icons-material';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import { useAuthorization } from '../../contexts/AuthorizationContext';
import { usePallet } from '../../contexts/PalletContext';
// import { useNotifications } from '../../contexts/NotificationsContext';
import Alerta from '../../components/Alerta';


export const AppBarCustom = (props: { classes: any, open: boolean, handleToggleOpen: () => void }) => {
  const { user } = useAuthorization();
  // const { newNotifications } = useNotifications();
  const { pallet } = usePallet();

  const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      ...(open && props.classes.appBarShift),
      ...(!open && props.classes.appBar),
    }),
  );

  return (
    <AppBar position="fixed"
      open={props.open}
      style={{
        backgroundColor: `${pallet.general.color1}`
      }}>
      <Alerta />
      <Toolbar className={props.classes.toolbar}>
        <IconButton
          edge="start"
          aria-label="open drawer"
          onClick={props.handleToggleOpen}
          className={clsx(props.classes.menuButton, props.open && props.classes.menuButtonHidden)}
          style={{
            color: `${pallet.textColorPrimary}`,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={props.classes.title} style={{
          color: `${pallet.textColorPrimary}`,
          fontFamily: `${pallet.general.fontFamily}`
        }}> Agendamento |
          <span style={{
            color: `${pallet.textColorPrimary}`,
            fontWeight: pallet.general.weight_100,
            fontSize: `${pallet.general.size12}`,
            fontFamily: `${pallet.general.fontFamily}`
          }}> x </span>
        </Typography>
        <IconButton color="inherit">
          <Typography style={{
            color: `${pallet.textColorPrimary}`,
            fontWeight: pallet.general.weight_100,
            fontSize: `${pallet.general.size14}`,
            fontFamily: `${pallet.general.fontFamily}`,
            marginRight: "10px"
          }}
          >{user?.nome}
          </Typography>
          {/* <Badge badgeContent={newNotifications} color="secondary">
                        <NotificationsIcon />
                    </Badge> */}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}