import { Box, Typography } from '@mui/material'
import React from 'react'

const features = () => {
  return (
    <Box sx={{width:'50%'}}>
       <Typography
       variant='h1'
       sx={{
        fontSize: '2rem',
        fontWeight: '500', 
        ml: '1%', 
        '@media (max-width: 600px)': {
        fontSize: '1rem', },
        }}>
        FEATURES
       </Typography>
       <Typography
       variant='h4'
       sx={{
        mt:'2.5%',
        fontFamily: 'Manrope',
        fontSize: '1rem', 
        '@media (max-width: 600px)': {
        fontSize: '1rem', },
        }}>
            Featuring a genuine leather head strap and premium earcups, these headphones deliver
            superior comfort for those who Ike to enjoy endless listening. It Includes Intuítive controls
            designed for any situation. Whether you're taking a business call or Just In your own
            personal space, the auto on/off and pause features ensure that you'll never miss a beat.
            
            </Typography>
            <Typography
                variant='h4'
                sx={{
                    mt:'2.5%',
                    fontSize: '1rem', 
                    '@media (max-width: 600px)': {
                    fontSize: '1rem', },
                    }}>The advanced Active Noise Cancellation with built-In equalizer allow you to experience
                    Your audio world on your terms. It lets you enjoy your audio in peace, but quickly Interact
                    connectivity and 17 hour battery life, the XX99 Mark | headphones gives you superior
                    sound, cutting-edge technology, and a modern design aestnetic.
                    With your surroundings when you need to. Combined with Bluetooth 5. O compliant
            </Typography>
    </Box>
  )
}

export default features