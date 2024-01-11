import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Menu, MenuItem, Paper, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Search } from '@mui/icons-material'
import SpaIcon from '@mui/icons-material/Spa';
import { Mail, Notifications } from '@mui/icons-material'

const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"
    })
    const [open, setOpen]= useState(false)
    const Icon = styled(Box)({
        display: "flex",
        gap: 10,
        alignItems: "center"
    })
    const UserBox = styled(Box)({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8
    })
    const SearchBar = () => {
        return (
            <Paper  component="form"
                onSubmit={() => { }}
                sx={{
                    borderRadius: 20,
                    boxShadow: "none",
                    bgcolor:"white",
                    pl: 2,
                    border: "1px solid #e3e3e3",
                    mr: { sm: 5 },
                    width: '50%',
                    display: "flex",
                    // flex:1

                }}
            >
                <input
                    style={{ background: "", width: "99%" }}
                    className="search-bar"
                    placeholder='Search...'
                    // value=''
                    name="search"
                    onChange={() => { }}
                />
                <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
                    <Search />
                </IconButton>
            </Paper>
        )
    }
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography sx={{ display: { xs: "none", sm: 'block' } }} variant="h4" commponent="h2">
                    Arsalan <Typography variant="span" sx={{ display: { xs: "none", md: "inline-block" }, background: "linear-gradient(to left, #780206, #061161)", WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text" }}>Dev</Typography>
                </Typography>
                <SpaIcon sx={{ display: { xs: "block", sm: 'none' } }} />
                <SearchBar />
                <Icon  sx={{ display: { xs: "none", md: "flex" } }}>
                    <Badge badgeContent={4} color="error">
                        <Mail color="white" />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications color="white" />
                    </Badge>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" onClick={()=>{setOpen(!open)}} />
                </Icon>
                <UserBox sx={{ display: { xs: "flex", md: "none" } }}>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" onClick={()=>{setOpen(!open)}} />
                    <Typography>
                        Arsalan
                    </Typography>
                </UserBox>

            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e)=>setOpen(!e)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar
