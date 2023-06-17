import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, useTheme } from '@mui/material';
import { AppBarCustom } from './AppBarCustom';
import { DrawerCustom } from './DrawerCustom';
import useStyles from './layout/Styles';

export default function Main(props: { children: React.ReactChild; }) {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [open, setOpen] = React.useState(false);
    const handleToggleOpen = () => setOpen(!open);

    return (
        <>
            <Box >
                <AppBarCustom classes={classes} open={open} handleToggleOpen={handleToggleOpen} />
                <DrawerCustom classes={classes} open={open} handleToggleOpen={handleToggleOpen} />
                <main className={'grow h-screen overflow-auto'}>
                    <div className={classes?.appBarSpacer} />
                    <Container maxWidth="lg" className={classes?.container}>
                        {props.children}
                    </Container>
                </main>
            </Box>
        </>
    )
}

Main.propTypes = {
    children: PropTypes.node,
};