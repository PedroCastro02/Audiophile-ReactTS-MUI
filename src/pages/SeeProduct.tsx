import React, { useState } from 'react'
import Header from '../components/Header'
import GoBack from '../components/GoBack'
import ProductChosed from '../components/ProductChosed'
import Footer from '../components/footer'
import { Box } from '@mui/material'
import Features from '../components/Features'
import InTheBox from '../components/InTheBox'
import BestGear from '../components/BestGear'
import ProductShopImage from '../components/ProductShopImage'
import { json } from '../db'
import Galeria from '../components/galeria'

const SeeProduct = (props: any) => {
  return (
    <>
    <Header />
    <GoBack />
    <ProductChosed produtoAtual={props.produtoAtual}/>
    <Box sx={{ display: 'flex', mt: '8%', mr: '10%', ml: '10%'}}>
      <Features />
      <InTheBox />
    </Box>
      <Galeria />
    
    <Box sx={{mr:'10%', ml: '10%', mt: '10%', display:'flex',justifyContent: 'space-around'}}>
                {/* {json.map((produto) => (
                  <Box onClick={() => ProdutoAtual(produto)}>
                    <ProductShopImage imageUrl={produto.img} title={produto.nome} />
                  </Box>
                ))} */}
              </Box>
    <BestGear />
    <Footer />

    </>
  )
}

export default SeeProduct