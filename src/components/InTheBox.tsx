import { Box, Typography } from '@mui/material'
import React from 'react'

const InTheBox = () => {
  return (
    <Box sx={{width:'30%', ml:'10%'}}>
        <Typography
        variant='h1'
        sx={{
        fontSize: '2rem',
        fontWeight: '500', 
        ml: '1%', 
        '@media (max-width: 600px)': {
        fontSize: '1rem', },
        }}>
        IN THE BOX
        </Typography>
    </Box>
  )
}

export default InTheBox