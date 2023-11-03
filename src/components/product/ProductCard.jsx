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
import { Rating, Stack, colors } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#b71c1c',
    },
  },
});

export default function ProductCard({item}) {
    const {deleteProduct} = useProducts()
    const {addProductToCart, checkProductInCart} = useCart()
    const navigate = useNavigate()
  return (
    <Card sx={{  width: {md: "30vw", lg: "19vw"} , height: 450, boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, margin: "2%"}}>
      <CardMedia
        sx={{ height: 240,  borderRadius: 4, }}
        image={item.image}
        title="green iguana"
      />
      <CardContent sx={{padding: '20px 5px 0px 5px'}}>
        <Typography gutterBottom variant="h5" component="div" fontSize='20' fontWeight={700}>
          {item.title}
        </Typography>
        <Stack spacing={1} margin='8px 0'>
        <Rating name="half-rating" defaultValue={0} precision={1} />
        </Stack>
        <Typography variant="body2" color="black" fontSize='24px' fontWeight="700">
            {item.price}$
        </Typography>
      </CardContent>
      <CardActions>
        <ThemeProvider theme={theme}>
          <Button color='secondary' variant='outlined' size="medium" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
        <Button color='primary' variant="outlined" size="medium" onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </Button>
        <IconButton sx={{backgroundColor: checkProductInCart(item.id) ? "black": "", color: checkProductInCart(item.id) ? "white": ""}} onClick={() => addProductToCart(item)}>
          <AddShoppingCartIcon/>
        </IconButton>
        </ThemeProvider>
      </CardActions>
      </Card>
    // <Card sx={{ width: {md: "30vw", lg: "19vw"},  height: 400, margin: '2%', borderRadius: "10%"}}>
    //   <CardMedia
    //     sx={{ height: 240 }}
    //     image={item.image}
    //     title="green iguana"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {item.title}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       {item.price} $
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small" onClick={() => deleteProduct(item.id)}>
    //       Delete
    //     </Button>
    //     <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
    //       Edit
    //     </Button>
    //     <IconButton onClick={() => addProductToCart(item)}>
    //       <AddShoppingCartIcon
    //         color={checkProductInCart(item.id) ? 'primary' : ''}
    //       />
    //     </IconButton>
    //   </CardActions>
    // </Card>
  );
}
