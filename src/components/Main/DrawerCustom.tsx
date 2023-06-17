import React from 'react';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { IconButton, List } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { isMobile } from 'react-device-detect';
import { mainMenu } from './MenuArrayList';
import MenuItem from './MenuItem';
import { styled, useTheme } from '@mui/system';

export const DrawerCustom = (props: { classes: any, open: boolean, handleToggleOpen: () => void }) => {

    const theme = useTheme();
    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            ...(open && {
                '& .MuiDrawer-paper': props.classes.drawerPaper,
            }),
            ...(!open && {
                '& .MuiDrawer-paper': props.classes.drawerPaperClose,
            }),
        }),
    );

    const DrawerHeader = styled('div')(({ theme }) => (props.classes.drawerHead));

    return (
        <Drawer
            anchor="left"
            variant={isMobile ? null : "permanent"}
            open={props.open}
        >
            <DrawerHeader>
                <div className={props.classes.toolbarIcon}>
                    <IconButton onClick={props.handleToggleOpen}>
                        {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                    </IconButton>
                </div>
            </DrawerHeader>
            <List>{mainMenu.map(item => { return <MenuItem key={item.key} menu={item} /> })}</List>
        </Drawer>
    )
}