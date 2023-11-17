import { Box, FormControl, FormLabel, Input, Typography } from '@mui/material'
import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const Inputs = () => {
  return (
    <>
        <Box sx={{border: '1px solid blue', width:'60%', ml: '5%'}}>
            <Typography
            variant='h1'
            sx={{
                fontSize: '2rem',
                fontWeight: '600', 
                ml: '1%', 
                '@media (max-width: 600px)': {
                fontSize: '1rem', },
                }}>
                CHECKOUT
            </Typography>
            <Box sx={{border: '2px solid green'}}>
                <Typography 
                    variant="h4"
                    sx={{
                        color: '#D87C49',
                        fontSize: '1rem', 
                        '@media (max-width: 600px)': {
                        fontSize: '1.5rem', },
                    }}>
                    BILLING DETAILS
                </Typography> 
                <InputGroup className="mb-3" >
                    <Form.Control
                        placeholder="Username"  
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                </InputGroup>
            </Box>
        </Box>
    </>
  )
}

export default Inputs