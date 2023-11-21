import { Box, Button, Typography } from '@mui/material'
import React from 'react';
import ImagemBackground2 from '../assets/product-zx7-speaker/desktop/img.png'

const SmallSquareProduct1 = () => {
  return (
    <Box sx={{ mt:'5%', mr:'10%', ml: '10%',  backgroundImage: `url(${ImagemBackground2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height:'300px', display: 'flex', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.12), 0 6px 20px rgba(0, 0, 0, 0.12), 0 -6px 20px rgba(0, 0, 0, 0.12)'}}>    
        <Box sx={{ display: 'flex',  justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
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
                ZX7 SPEAKER
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

export default SmallSquareProduct1