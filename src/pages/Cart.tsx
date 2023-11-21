import React from 'react'
import Header from '../components/Header'
import GoBack from '../components/GoBack'
import Footer from '../components/footer'
import { Box, ThemeProvider } from '@mui/material'
import Inputs from '../components/Inputs'
import Summary from '../components/Summary'
import theme from '../themes/themes'

const Cart = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <GoBack />
        <Box sx={{ mr:'10%', ml: '10%', mt: '4%', display:'flex' }}>
          <Inputs />
          <Summary />
        </Box>
        <Footer />
      </ThemeProvider>
    </>
    )
}

export default Cart