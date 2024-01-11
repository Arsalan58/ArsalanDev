import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { ExpandMore, Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import React from 'react'
import Post from './Post'

const Feeds = () => {
  return (
    <Box flex={4} p={2} sx={{ bgcolor: "",}}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  )
}

export default Feeds
