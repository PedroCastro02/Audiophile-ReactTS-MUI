import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react'
import { pages } from './Header';
import IconFacebook from '../svg-components/IconFacebook';
import IconTwitter from '../svg-components/IconTwitter';
import IconInstagram from '../svg-components/IconInstagram';

const footer = () => {
    

  return (
    <Box sx={{mt:'10%', width:'100%', bgcolor: '#191919', height:'300px'}}>
        <Box sx={{ mr:'10%', ml: '10%' , width:'80%', height:'100%'}}>
            <Box sx={{display: 'flex', mt:'4.5%' , justifyContent:'space-between'}}>
                <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize:'1.4rem',
                    mt:'3%',
                    borderTop: '3px solid #D97D48', // Adiciona a borda superior        
                }}
                >
                    audiophile
                </Typography>
                <Box sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center', mt:'3%',}}>
                    {pages.map((page) => (
                    <Button
                        id={page}
                        key={page}
                        sx={{ color: 'white', fontSize:'1.1rem'}}
                    >
                        {page}
                    </Button>
                    ))}
                </Box>
          </Box>
            <Box sx={{display: 'flex', justifyContent:'space-between', width: '100%'}}>
                <Typography
                    variant="body2"
                    sx={{
                        mt: '3%',
                        fontSize: '1rem',
                        color: '#585858',
                        width: '45%',
                        '@media (max-width: 600px)': {
                        fontSize: '1rem',
                        },
                    }}
                    >
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team
                    of music lovers and sound specialists who are devoted to helping you get the
                    most out of personal audio. Come and visit our demo facility - we're open 7
                    days a week.
                </Typography>
                <Box sx={{ display: 'flex', width: '50%', justifyContent: 'flex-end', alignItems:'flex-end'}}>
                    <IconFacebook/>
                    <IconTwitter />
                    <IconInstagram />
                </Box>
            </Box>
            <Typography
                    variant="body2"
                    sx={{
                        mt: '3%',
                        fontSize: '1rem',
                        color: '#585858',
                        width: '45%',
                        textDecoration: 'bold',
                        '@media (max-width: 600px)': {
                        fontSize: '1rem',
                        },
                    }}
                    >
                    Copyright 2021. All Rights Reserved
                </Typography>

        </Box>
        
    </Box>
  )
}

export default footer;