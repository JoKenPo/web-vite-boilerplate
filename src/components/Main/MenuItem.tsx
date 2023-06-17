import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Grid, ListItem, ListItemButton, ListItemIcon, Tooltip } from '@mui/material';

// const SubItem = () => {
//     return (
//         <>
//             <p>
//                 Ola sera?
//             </p>
//         </>
//     )
// }


export default function MenuItem({ menu }) {
    // const navigate = useNavigate();
    return (
        <Tooltip title={menu.title} placement={'right'}>
            {/* <Grid> */}
            <ListItem key={menu.key} disablePadding sx={{ display: 'block' }}>
                <ListItemButton key={menu.key} onClick={() => true}
                    sx={{
                        minHeight: 48,
                        justifyContent: 'center',
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        {menu.icon()}
                    </ListItemIcon>
                    {/* <ListItemText primary={menu.title} /> */}
                </ListItemButton>
            </ListItem>
            {/* <Grid justifyContent="center" style={{ marginTop: "-5px", display: "flex" }} >
                    <SubItem />
                </Grid> */}
            {/* </Grid> */}

        </Tooltip>
    )
}