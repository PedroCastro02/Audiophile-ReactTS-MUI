import React from 'react'
import Header from '../components/Header'
import GoBack from '../components/GoBack'
import Footer from '../components/footer'
import { Box } from '@mui/material'
import Inputs from '../components/Inputs'
import Summary from '../components/Summary'

const Cart = () => {
  return (
    <>
        <Header />
        <GoBack />
        <Box sx={{mr:'10%', ml: '10%', mt: '10%', display:'flex', border:'1px solid red'}}>
          <Inputs />
          <Summary />
        </Box>
        <Footer />
    </>
    )
}

export default Cart