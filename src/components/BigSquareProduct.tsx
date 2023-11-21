import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import ImageProduct from '../assets/home/desktop/image-speaker-zx9.png';
const BigSquareProduct = () => {
  return (
    <Box sx={{mt:'10%', mr:'10%', ml: '10%', backgroundColor: '#D87C49', display: 'flex', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.12), 0 6px 20px rgba(0, 0, 0, 0.12), 0 -6px 20px rgba(0, 0, 0, 0.12)'}}>
        <Box sx={{mt:'10%', ml: '10%'}}>
            <img src={ImageProduct} style={{width: '70%'}}></img>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column', mr: '10%'}}>
            <Typography 
                variant="h1"
                sx={{ 

                    width: '450px',               
                    color: 'white',
                    fontSize: '3.2rem', 
                    '@media (max-width: 600px)': {
                    fontSize: '3rem', },
                }}>
               ZX9 SPEAKER
            </Typography>    
            <Typography 
                variant="h6"
                sx={{
                    mt: '7%',
                    width: '450px',  
                    color: '#FFD5B5',
                    fontSize: '1.3rem', 
                    '@media (max-width: 600px)': {
                    fontSize: '1rem', },
                }}>
               Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound
            </Typography>    
            <Button sx={{
                    padding: '3%',
                    width: '150px', 
                    mr: '65%',
                    mt:'7%',
                    bgcolor: '#000',
                    color: 'white',
                    fontSize: '0.8rem', 
                    '@media (max-width: 600px)': {
                    fontSize: '1.5rem', },
                }}> SEE PRODUCT </Button>
        </Box>
    </Box>
  )
}

export default BigSquareProduct;