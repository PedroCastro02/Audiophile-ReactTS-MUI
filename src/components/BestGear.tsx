import { Box, Typography } from '@mui/material';
import React from 'react';
import ImagemBackground4 from '../assets/shared/desktop/image-best-gear.jpg';

const BestGear = () => {
  return (
    <Box sx={{ display: 'flex', mt: '15%', mr: '10%', ml: '10%', mb: '5%' }}>
      <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '10%' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: '2.5rem',
            '@media (max-width: 600px)': {
              fontSize: '1rem',
            },
          }}
        >
          BRINGING YOU THE <span style={{ color: '#D97D48' }}>BEST</span> AUDIO GEAR
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: '5%',
            fontSize: '1.1rem',
            '@media (max-width: 600px)': {
              fontSize: '1rem',
            },
          }}
        >
          Located at the heart of New York City, Audiophile is the premier store for high-end headphones, earphones, speakers, and “audio accessories. We have a large Showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </Typography>
      </Box>
      <Box sx={{ backgroundImage: `url(${ImagemBackground4})`, backgroundSize: 'contain', padding: '5%', height: '500px', width: '50%', borderRadius: '7px', backgroundRepeat: 'no-repeat' }}>
      </Box>
    </Box>
  );
};

export default BestGear;
