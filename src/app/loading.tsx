import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' >
        <CircularProgress sx={{ width: 30 }} />
    </Box>
  )
}

export default Loading