import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProductShopImage from './ProductShopImage'
import { json } from '../db'
import CartBoxs from './CartBoxs'


const Summary = (produtoAtual: any) => {
  
  const [produtos, setProdutos] = useState([]);

  const style = {
    textSummary: {
      fontSize: '1rem', fontWeight: '400', '@media (max-width: 700px)': {fontSize: '1rem',}
    }
  }

  useEffect(() => {
    setProdutos(JSON.parse(localStorage.getItem("produtos")!))
  }, [])

  return (
    <Box sx={{  width:'30%', ml: '3%',  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.12), 0 6px 20px rgba(0, 0, 0, 0.12), 0 -6px 20px rgba(0, 0, 0, 0.12)', borderRadius: '30px', pl:'3%', pt: '3%', pb:'3%'}}>
      <Typography variant='h1' sx={{fontSize: '1.8rem', fontWeight: '700', '@media (max-width: 700px)': {fontSize: '1rem', },}}>SUMMARY</Typography>
          <Box>
            <Box sx={{width: '90%', display:'flex', flexDirection: 'column', justifyContent:'center', mt:'3%'}}>

            {produtos.map((produto) => (
              <CartBoxs produtoAtual={produto}/>
            ))}
                <Box sx={{display:'flex', flexDirection:'column', mt:'4%'}}>
                  <Box sx={{display:'flex', justifyContent: 'space-between', mt: '2%'}}>
                    <Typography variant='h1' sx={style.textSummary}>TOTAL</Typography>
                    <Typography variant='h1' sx={{fontSize: '1rem', fontWeight: '800', '@media (max-width: 700px)': {fontSize: '1rem', },}}>$5,396</Typography>
                  </Box>
                  <Box sx={{display:'flex', justifyContent: 'space-between', mt: '2%'}}>
                    <Typography variant='h1' sx={style.textSummary}>SHIPPING</Typography>
                    <Typography variant='h1' sx={{fontSize: '1rem', fontWeight: '800', '@media (max-width: 700px)': {fontSize: '1rem', },}}>$50</Typography>
                  </Box>
                  <Box sx={{display:'flex', justifyContent: 'space-between', mt: '2%'}}>
                    <Typography variant='h1' sx={style.textSummary}>VAT (INCLUDED)</Typography>
                    <Typography variant='h1' sx={{fontSize: '1rem', fontWeight: '800', '@media (max-width: 700px)': {fontSize: '1rem', },}}>$1,079</Typography>
                  </Box>
                  <Box sx={{display:'flex', justifyContent: 'space-between', mt: '4%'}}>
                    <Typography variant='h1' sx={{fontSize: '1rem', fontWeight: '400', color: '#D87C49', '@media (max-width: 700px)': {fontSize: '1rem', },}}>GRAND TOTAL</Typography>
                    <Typography variant='h1' sx={{fontSize: '1rem', fontWeight: '800', color:'','@media (max-width: 700px)': {fontSize: '1rem', },}}>$5.446</Typography>
                  </Box>
                  <Box sx={{display:'flex', justifyContent: 'space-between', mt: '6%'}}>
                    <Button sx={{bgcolor: '#D87C4B', color: 'white', width: '100%'}}>ADD TO CART</Button>  
                  </Box>
                </Box>
            </Box>

          </Box>
    </Box>
  )
}

export default Summary