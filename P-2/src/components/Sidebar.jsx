import styled from '@emotion/styled'
import { Box, Button, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Switch } from '@mui/material'
import React, { useState } from 'react'
import {HomeOutlined, AutoStories,LightMode, Brightness2, Cottage, Group, Storefront, People, Settings, AccountCircle} from '@mui/icons-material';
import theme from './Theme'
export default function Sidebar({mode, setMode}) {
    const StyledButton = styled(Button)((({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: "red"
    })))
    const [dark, setDark] = useState(false)
    const handleChange = ()=>{
        setDark(!dark)
        setMode(mode==="light" ?"dark" : "light")
    }
    return (
        <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' }, background: 'linear-gradient( #430089, #82ffa1)' }}>
            <Box position="fixed" sx={{bgcolor:""}}>
                <List
                    sx={{ width: '100%', maxWidth: 360, }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <Cottage />
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <AutoStories />
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Group />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Storefront />
                        </ListItemIcon>
                        <ListItemText primary="Marketplaces" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <People />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Settings/>
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                           {dark? <Brightness2 />: <LightMode />}
                        </ListItemIcon>
                        <ListItemText primary={<Switch onChange={handleChange} />} />
                    </ListItemButton>
                </List>
            </Box>
        </Box>
    )
}
