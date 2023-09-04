import React, { useEffect, useRef, useState } from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useSelector } from "react-redux";

const Navbar = () => {
  let currentPrice = 0;
  const [formatPrice, setFormatPrice] = React.useState(0);

  const dataArray = useSelector((state) => state.data);
  dataArray.map((item) => {
    item.quantity > 0 && (currentPrice += item.price * item.quantity);
  });

  useEffect(() => {
    setFormatPrice(currentPrice.toFixed(2));
  }, [currentPrice]);
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        boxShadow: "none",
        borderBottom: "1px solid #ccc",
        padding: "12px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 40px",
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            fontWeight: "bold",
            fontSize: "24px",
            fontFamily: "Lato",
            textDecoration: "none",
            color: "#111",
          }}
        >
          E-shop
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Link to="/cart" style={{ color: "#111" }}>
            <Button variant="outline" color="secondary">
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <ShoppingCartCheckoutIcon fontSize="large" color="primary" />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h8">Cart</Typography>
                  <Typography
                    variant="h8"
                    sx={{ color: currentPrice > 0 ? "#E25E3E" : "#111" }}
                  >
                    ${formatPrice}
                  </Typography>
                </Box>
              </Box>
            </Button>
          </Link>
          <Box sx={{ height: "inherit", border: "1px solid #ccc" }}></Box>
          <Button
            variant="outline"
            color="secondary"
            sx={{
              display: {
                xs: "none",
                md: "inline",
              },
            }}
          >
            <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <LoginIcon fontSize="large" />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h8">Login</Typography>
              </Box>
            </Box>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
