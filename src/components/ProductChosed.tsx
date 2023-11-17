import React from 'react'
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import imagemTeste from '../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'

const ProductChosed = ( produtoAtual: any ) => {

    const [value, setValue] = React.useState(0);

    const HandleInputChange = (e: any) => {
        const inputValue = e.target.value;
        if (inputValue >= 0 || inputValue === ''){
            setValue(inputValue);
        }
    };

    const HandleIncrement = () => {
        setValue((prevValue) => prevValue + 1 );
    };
    const HandleDecrement = () => {
        if (value > 0) {
            setValue((prevValue) => prevValue - 1);
        }
    };


  return (
    <Box sx={{ display: 'flex', mt: '5%', mr: '10%', ml: '10%', mb:'5%', justifyContent:'space-between'}}>
        <Box sx={{ width:'50%', display: 'flex', justifyContent:'center'}}>
            <img
            width={'80%'}
           src={produtoAtual.produtoAtual.img}
            alt=""
            />
        </Box>
        <Box sx={{ width:'40%', display:'flex', flexDirection:'column', justifyContent:'center', ml:'3%'}}>
            <Typography 
                variant="h4"
                sx={{
                    mb:'5%',
                    color: '#D87C49',
                    fontSize: '2rem', 
                    '@media (max-width: 600px)': {
                    fontSize: '1.5rem', },
                }}>
                New Product
            </Typography> 
            <Typography 
                variant="h1"
                sx={{
                    mb:'7%',
                    fontSize: '2.8rem', 
                    '@media (max-width: 600px)': {
                    fontSize: '3rem', },
                }}>
            {produtoAtual.produtoAtual.nome}
            </Typography>    
            <Typography 
                variant="h6"
                sx={{
                    fontSize: '1rem', 
                    '@media (max-width: 600px)': {
                    fontSize: '1rem', },
                }}>
           {produtoAtual.produtoAtual.descricao}
            </Typography> 
            <Typography 
                variant="h6"
                sx={{
                    mt: '5%',
                    fontWeight: 'bold',
                    fontSize: '1rem', 
                    '@media (max-width: 600px)': {
                    fontSize: '1rem', },
                }}>
            {produtoAtual.produtoAtual.preco}
            </Typography> 
            <Box sx={{display: 'flex', width: '100%', mt:'8%'}}>
            <TextField
                sx={{ width: '45%', mr:'3%' }}
                label="Número"
                type="number"
                value={value}
                onChange={HandleInputChange}
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton onClick={HandleDecrement}>
                          -
                        </IconButton>
                      </InputAdornment>
                 ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={HandleIncrement}>
                          +
                        </IconButton>
                      </InputAdornment>
                    ),
                }}
                />
                  <Button sx={{bgcolor: '#D87C4B', color: 'white', width: '45%', ml:'3%'}}>ADD TO CART</Button>  
            </Box> 
        </Box>
    </Box>
  )
}

export default ProductChosed