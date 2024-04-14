import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ShopSphere
        </Typography>

        <Button color="inherit" component={Link} to="/"><HomeIcon fontSize="small" sx={{ marginRight: 0.5 }}/>Home</Button>
        <Button color="inherit" component={Link} to="/products">Products</Button>
        <Button color="inherit">Cart</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;