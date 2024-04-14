import React from "react";
import { Card, CardMedia, Chip, CardContent, CardActions, Typography, Button, Rating } from "@mui/material";

import EuroIcon from '@mui/icons-material/Euro';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function ProductCard({ product }) {

  return(
    <Card sx={{ maxWidth: 345 }}>
      
      <CardMedia 
        component="img"
        height="150"
        image={"https://" + product.imageUrl}
        alt={product.name}
        sx={{ objectFit: 'contain' }}
      />

      <CardContent>

        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>

        <Rating name="read-only" value={product.rating} readOnly />

        <br />

        <Chip color="primary" icon={<EuroIcon fontSize="small" />} label={product.price.current.value.toFixed(2)} />
      
      </CardContent>

      <CardActions>
        <Button><AddShoppingCartIcon fontSize="small" sx={{marginRight: 0.5}}/>Add to Cart</Button>
      </CardActions>

    </Card>
  )

}

export default ProductCard;