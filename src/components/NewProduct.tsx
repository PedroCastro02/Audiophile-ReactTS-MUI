import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import ImagemBackground from '../assets/home/desktop/image-hero.jpg'

const NewProduct = () => {
  return (
    <>   
        <Box
        sx={{
            position: 'relative',
            backgroundImage: `url(${ImagemBackground})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%',
            maxHeight: '900px',
            zIndex: '1',
        }}
        >
            <Typography 
                variant="h4"
                sx={{
                    position: 'absolute',
                    ml: '10%',
                    top: '40%',
                    color: '#585858',
                    zIndex: '2',
                    fontSize: '2rem', 
                    '@media (max-width: 600px)': {
                    fontSize: '1.5rem', },
                }}>
                New Product
            </Typography> 
            <Typography 
                variant="h1"
                sx={{
                    position: 'absolute',
                    ml: '10%',
                    top: '50%',
                    maxWidth: '400px',
                    color: 'white',
                    zIndex: '2',
                    fontSize: '3.2rem', 
                    '@media (max-width: 600px)': {
                    fontSize: '3rem', },
                }}>
               XX99 MARK II HEADPHONES
            </Typography>    
            <Typography 
                variant="h6"
                sx={{
                    position: 'absolute',
                    ml: '10%',
                    top: '70%',
                    maxWidth: '400px',
                    color: 'white',
                    zIndex: '2',
                    fontSize: '1rem', 
                    '@media (max-width: 600px)': {
                    fontSize: '1rem', },
                }}>
               Experience natural, lifelike audio and exceptional build quality made for the passionate music enthuasiast
            </Typography>    
            <Button sx={{bgcolor: '#D87C49',
                    position: 'absolute',
                    ml: '10%',
                    top: '82%',
                    maxWidth: '400px',
                    color: 'white',
                    zIndex: '2',
                    fontSize: '0.8rem', 
                    padding: '1%',
                    '@media (max-width: 600px)': {
                    fontSize: '1.5rem', },
                }}> SEE PRODUCT </Button>
        </Box>               
    </>
  )
}

export default NewProduct;