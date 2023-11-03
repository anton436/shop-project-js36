import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import { useCart } from '../../contexts/CartContextProvider';

export default function ProductCard({item}) {
    const {deleteProduct} = useProducts()
    const {addProductToCart, checkProductInCart} = useCart()
    const navigate = useNavigate()
  return (
    <Card sx={{ width: {md: "30vw", lg: "19vw"},  height: 400, margin: '2%', borderRadius: "10%"}}>
      <CardMedia
        sx={{ height: 240 }}
        image={item.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price} $
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </Button>
        <IconButton onClick={() => addProductToCart(item)}>
          <AddShoppingCartIcon
            color={checkProductInCart(item.id) ? 'primary' : ''}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}
