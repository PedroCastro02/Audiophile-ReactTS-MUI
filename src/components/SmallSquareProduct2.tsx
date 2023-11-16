import { Box, Button, Typography } from '@mui/material'
import React from 'react';
import ImagemBackground3 from '../assets/product-yx1-earphones/desktop/image-gallery-2.jpg'

const SmallSquareProduct2 = () => {
  return (
    <Box sx={{display: 'flex', mt:'5%', mr:'10%', ml: '10%', height:'300px', justifyContent: 'space-between'}}>  
        <Box sx={{width: '47%', backgroundImage: `url(${ImagemBackground3})`, backgroundSize: 'cover', borderRadius: '10px'}}>    
        </Box>  
        <Box sx={{width: '47%', display: 'flex',  justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundColor: '#EEE'}}>   
          <Typography 
                  variant="h1"
                  sx={{ 
                      textAlign: 'center',
                      fontWeight: 'bold',
                      width: '450px',               
                      color: 'Black',
                      fontSize: '2rem', 
                      '@media (max-width: 600px)': {
                      fontSize: '3rem', },
                  }}>
                YX1 SPEAKER
              </Typography>  
              <Button sx={{
                    mt: '7%',
                    border: '2px solid black',
                    bgcolor: 'rgb(0, 0, 0, 0)',
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '0.8rem', 
                    padding: '3%',
                    '@media (max-width: 600px)': {
                    fontSize: '1.5rem', },
                }}> SEE PRODUCT </Button>
        </Box>
    </Box>
        
  )
}

export default SmallSquareProduct2