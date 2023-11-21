import  React, { useState } from 'react'
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import imagemTeste from '../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'

interface Product {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    img: any;
    quantidade: number;
}

interface ProductChosedProps {
    produtoAtual: Product;
  }

  const ProductChosed = ({ produtoAtual }: ProductChosedProps) => {
      
      const [vetor, setVetorCompras] = useState<Product[]>([])
      const [value, setValue] = useState(0);
      


      // adicionar o produto escolhido no vetor de compras do usuario
      function HandleAddProdutoVetor (novoProduto: Product) {
        novoProduto.quantidade = value;
          setVetorCompras((prevVetor) => [...prevVetor, novoProduto]);

          const produtosArray: Product[] = JSON.parse(localStorage.getItem("produtos")!);


            vetor.map((item) => {

                produtosArray.push(item);
            })
          localStorage.setItem("produtos", JSON.stringify(produtosArray))
          console.log(JSON.parse(localStorage.getItem("produtos")!));
        }
    

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
    <Box sx={{ display: 'flex', mt: '3%', mr: '10%', ml: '10%', mb:'5%', justifyContent:'space-between', }}>
        <Box sx={{ width:'50%', display: 'flex', justifyContent:'center'}}>
            <img
            width={'80%'}
           src={produtoAtual.img}
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
            {produtoAtual.nome}
            </Typography>    
            <Typography 
                variant="h6"
                sx={{
                    fontSize: '1rem', 
                    '@media (max-width: 600px)': {
                    fontSize: '1rem', },
                }}>
           {produtoAtual.descricao}
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
            {produtoAtual.preco}
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
                  <Button sx={{bgcolor: '#D87C4B', color: 'white', width: '45%', ml:'3%',}} onClick={() => HandleAddProdutoVetor(produtoAtual)}>ADD TO CART</Button>  
            </Box> 
        </Box>
    </Box>
  )
}

export default ProductChosed

