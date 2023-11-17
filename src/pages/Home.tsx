

import { Box, Link } from '@mui/material';
import Header from '../components/Header';
import NewProduct from '../components/NewProduct';
import ProductShopImage from '../components/ProductShopImage';
import BigSquareProduct from '../components/BigSquareProduct';
import SmallSquareProduct1 from '../components/SmallSquareProduct1';
import SmallSquareProduct2 from '../components/SmallSquareProduct2';
import BestGear from '../components/BestGear';
import Footer from '../components/footer';
import { json } from '../db';
import { useState } from 'react';

function Home(props: any) {
const {setProdutoAtual} = props;

  return (
    <>
       <Header /> 
       
          <NewProduct />
              <Box sx={{mr:'10%', ml: '10%', mt: '10%', display:'flex',justifyContent: 'space-around'}}>
                {json.map((produto) => (
                  // <Link  key={produto.id} to={`/produto/${produto.id}`} style={{ textDecoration: 'none', color: '#A3A3A3' }}>
                    <Box   key={produto.id} onClick={() => setProdutoAtual(produto)}>
                      <ProductShopImage imageUrl={produto.img} title={produto.nome} />
                    </Box>
                  // </Link>
                ))}
              </Box>
            <BigSquareProduct />
            <SmallSquareProduct1 />
            <SmallSquareProduct2 />
          <BestGear />
        <Footer />
        
    </>
  );
}

export default Home;
