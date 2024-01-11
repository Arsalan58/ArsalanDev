import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import Navbar from './components/Navbar';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import Sidebar from './components/Sidebar';
import Feeds from './components/Feeds';
import Rightbar from './components/Rightbar';
import './App.css'
import Theme from './components/Theme';
import Add from './components/Add';
export default function App() {
  const [mode, setMode] = React.useState("light")
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme = {darkTheme}>
      <Box sx={{ margin: 0, padding: 0 }} bgcolor="background.default" color ='text.primary'>
        <Navbar />
        <Stack direction="row" display="flex" justifyContent="space-between">
          <Sidebar setMode={setMode} mode ={mode}/>
          <Feeds />
          <Rightbar />
        </Stack>
        <Add/>
      </Box>
      </ThemeProvider >
      );
}