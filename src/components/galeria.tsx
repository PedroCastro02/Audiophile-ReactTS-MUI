import { Box } from '@mui/material'
import React from 'react'
import imagemTeste1 from '../assets/product-xx59-headphones/desktop/image-gallery-1.jpg'
import imagemTeste2 from '../assets/product-xx59-headphones/desktop/image-gallery-2.jpg'
import imagemTeste3 from '../assets/product-xx59-headphones/desktop/image-gallery-3.jpg'

const galeria = () => {
  return (
    <>
        <Box sx={{ display: 'flex', mt: '8%', mr: '10%', ml: '10%', justifyContent:'space-around'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between'}}>
            <Box>
              <img
                style={{ borderRadius: '15px' }}
                src={imagemTeste1} 
                alt=""
                />
            </Box>
            <Box>
            <img
              style={{ borderRadius: '15px' }}
              src={imagemTeste2}
              alt=""
              />
            </Box>
          </Box>
          <Box>
            <img
              style={{ borderRadius: '15px' }}
              src={imagemTeste3}
              alt=""
              />
          </Box>
        </Box>
    </>
  )
}

export default galeria