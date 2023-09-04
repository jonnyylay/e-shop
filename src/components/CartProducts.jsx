import { Box, Typography } from "@mui/material";
import React from "react";

const CartProducts = ({ id, image, title, price, quantity }) => {
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
    <Box key={id}>
      <Box sx={{ display: "flex", gap: 3, mt: 4 }}>
        <img
          src={image}
          alt="test"
          style={{
            width: "192px",
            aspectRatio: "1 / 1",
            minWidth: "192px",
            objectFit: "contain",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            position: "relative",
          }}
        >
          <Typography variant="h9" sx={{ padding: "8px" }}>
            {title}
          </Typography>

          <Typography variant="h9" sx={{ ml: 1 }}>
            ${price}
          </Typography>

          <Typography
            variant="h10"
            sx={{
              position: "absolute",
              bottom: "0",
              right: "0",
              padding: "8px",
            }}
          >
            Quantity: {quantity}{" "}
          </Typography>
        </Box>
      </Box>

      <Line />
    </Box>
  );
};

export default CartProducts;
