import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '../svg-components/arrowRightIcon';

const ProductShopImage = (props: any) => {
    const { imageUrl, title } = props;
  return (
    <Card sx={{ 
        maxWidth: 345, 
        display:'flex', 
        flexDirection: 'column', 
        alignItems:  'center', 
        justifyContent:'center',
        background: 'none'  
        }}>
          <Link to="/SeeProduct" style={{ textDecoration:'none', color: '#A3A3A3' }}>
      <CardActionArea>  
        <img
          height="160"
          width="160"
          src={imageUrl}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textDecoration: 'bold', color:'black'}}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Button style={{ textDecoration:'none', color: '#A3A3A3' }} endIcon={<ArrowRightIcon />} >
            Shop 
          </Button>
      </CardActions>
      </Link>
    </Card>
  );
}

export default ProductShopImage;