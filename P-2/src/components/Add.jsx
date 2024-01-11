import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, BrokenImage, DateRange, EmojiEmotions, PersonAdd, VideoCall, VideoCameraBack } from '@mui/icons-material'
import styled from '@emotion/styled'
export default function Add() {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(!open)
    }
    const StyledModal = styled(Modal)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    })
    const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px"
    })
    return (
        <>
            <Tooltip onClick={() => setOpen(!open)} title="Delete" sx={{ position: "fixed", bottom: 20, left: { xs: 'calc(50% - 20px)', md: 10 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box height={300} width={450} bgcolor="background.default" color ='text.primary' borderRadius={5} p={3}>
                    <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
                    <UserBox>
                        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        <Typography variant="span" fontWeight={700} > Arsalan</Typography>
                    </UserBox>
                    <TextField
                        id="filled-multiline-static"
                        multiline
                        rows={4}
                        sx={{ width: "100%" }}
                        placeholder="What's on your mind"
                        variant="standard"
                    />
                    <Stack display="flex" flexDirection="row" gap={1} mt={2} mb={2}>
                        <EmojiEmotions color="primary" />
                        <VideoCameraBack color="warning" />
                        <BrokenImage color="secondary" />
                        <PersonAdd color="error" />
                    </Stack >
                    <ButtonGroup variant="contained" fullWidth aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}><DateRange/></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}
