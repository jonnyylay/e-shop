import { Button, Container, Grid, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProducts from "../components/CartProducts";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  let currentPrice = 0;
  const [formatPrice, setFormatPrice] = React.useState(0);

  const dataArray = useSelector((state) => state.data);
  dataArray.map((item) => {
    item.quantity > 0 && (currentPrice += item.price * item.quantity);
  });

  useEffect(() => {
    setFormatPrice(currentPrice.toFixed(2));
  }, [currentPrice]);

  const Line = () => {
    return (
      <Box
        sx={{
          marginTop: "25px",
          width: "100%",
          borderTop: "1px solid #ccc",
        }}
      ></Box>
    );
  };

  return (
    <Container>
      <Typography
        variant="h2"
        sx={{ mt: 10, textAlign: { xs: "center", lg: "left" } }}
      >
        Shopping Cart
      </Typography>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "center", md: "center", lg: "flex-start" },
          gap: 5,
          flexDirection: { xs: "column", md: "column", lg: "row" },
        }}
      >
        <Grid
          sx={{
            mt: 6,
            display: "flex",
            flexDirection: "column",
            width: "60%",
            minWidth: "400px",
          }}
        >
          {data.map((item, index) => (
            <CartProducts
              key={index}
              id={item.id}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
              title={item.title}
            />
          ))}
        </Grid>
        <Grid
          sx={{
            mt: 6,
            bgcolor: "#f2f2ee",
            display: "flex",
            flexDirection: "column",
            width: "40%",
            maxHeight: "300px",
            padding: "32px",
            borderRadius: "24px",
            minWidth: "400px",
          }}
        >
          <Typography variant="h7">Order summary</Typography>
          <Line />
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography>Order total</Typography>
            <Typography>${formatPrice}</Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ padding: "14px", mt: 2, borderRadius: "30px" }}
          >
            Checkout
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch({ type: "RESET_ARRAY" })}
            sx={{ padding: "14px", mt: 2, borderRadius: "30px" }}
          >
            Remove all items
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
