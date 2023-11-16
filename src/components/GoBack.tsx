import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const GoBack = () => {
  return (
    <Box sx={{ display: 'flex', mt: '10%', mr: '10%', ml: '10%'}}>
        <Typography>
            <Link to="/" style={{ textDecoration:'none', color: '#585858'}}>
            Go Back
            </Link>
        </Typography>
    </Box>
  )
}

export default GoBack