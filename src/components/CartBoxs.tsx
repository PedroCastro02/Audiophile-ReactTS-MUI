import { Box, Typography } from '@mui/material'
import React from 'react'

const CartBoxs = ({produtoAtual}: any) => {



  return (
    <Box sx={{ border: '2px solid Blue', display:'flex', flexDirection: 'row'}}>
        <Box sx={{}}>
            <img
            width={'33%'}
            src={produtoAtual.img}
            alt=""
            />
        </Box>
        <Box sx={{}}>
            <Typography 
                variant="h2"
                sx={{
                    fontSize: '1rem',
                    '@media (max-width: 600px)': {
                    fontSize: '3rem', },
                }}>
            {produtoAtual.nome}
            </Typography>
            <Typography 
                variant="h2"
                sx={{
                    fontSize: '1rem',
                    '@media (max-width: 600px)': {
                    fontSize: '1rem', },
                }}>
            {produtoAtual.preco}
            </Typography> 
            <Typography 
                variant="h2"
                sx={{
                    fontSize: '1rem',
                    '@media (max-width: 600px)': {
                    fontSize: '1rem', },
                }}>
            {/* QTDproduto */}
            </Typography> 

        </Box>
    </Box>
  )
}

export default CartBoxs