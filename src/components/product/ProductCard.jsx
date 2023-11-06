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
import { CardActionArea, Rating, Stack } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Details from '../Details';

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{  width: {md: "30vw", lg: "19vw"} , height: 450, boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, margin: "2%"}}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
        sx={{ height: 240,  borderRadius: 4, }}
        image={item.image}
        title="green iguana"
      />
      </CardActionArea>
      
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
       <Details
       image={item.image}
       title={item.title}
        description={item.description} 
        handleClose={handleClose} 
        open={open}/>
      </Card>
  );
}
