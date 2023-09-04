import React from "react";
import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";

const Description = ({ title, price, rating, description, image }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    const newObj = {
      title: title,
      price: price,
      quantity: 1,
      image: image,
    };

    dispatch({ type: "ADD_ITEM", payload: newObj });
  };

  const Image = ({}) => {
    return (
      <img
        src={image}
        alt="placeholder"
        style={{ objectFit: "contain", width: "100%", height: "100%" }}
      />
    );
  };
  const Line = () => {
    return (
      <Box
        sx={{
          marginTop: "40px",
          width: "100%",
          borderTop: "1px solid #ccc",
        }}
      ></Box>
    );
  };

  return (
    <>
      <Grid
        sx={{
          display: "flex",
          gap: 5,
          mt: 4,
          alignItems: "center",
          flexDirection: { xs: "column", md: "column", lg: "row" },
        }}
      >
        <Box
          sx={{
            width: "50%",
            minWidth: "360px",
            aspectRatio: 1 / 1,
          }}
        >
          <Image />
        </Box>
        <Box
          sx={{
            width: "50%",
            minWidth: "360px",
            aspectRatio: 1 / 1,
          }}
        >
          <Typography variant="h2" sx={{ mt: 4 }}>
            {title}
          </Typography>
          <Typography variant="h2" sx={{ mt: 4 }}>
            ${price}
          </Typography>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              marginTop: "20px",
            }}
          >
            <Rating
              name="half-rating-read"
              value={rating.rate}
              precision={0.5}
              readOnly
            />
            <Typography variant="h5">{`(${rating.count})`}</Typography>
          </Box>
          <Line />
          <Typography variant="h6" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <Button
            onClick={addToCart}
            variant="contained"
            color="primary"
            sx={{
              mt: 4,
              borderRadius: "50px",
              height: "50px",
              display: "flex",
              gap: "5px",
            }}
          >
            <span>Add to Cart</span>
            <span style={{ display: "flex" }}>
              <ShoppingCartIcon />
            </span>
          </Button>
        </Box>
      </Grid>
      <Box
        sx={{
          mt: 4,
          height: "130px",
          width: "130px",
          padding: "10px",
          borderRadius: "10px",
          border: "2px solid #111",
        }}
      >
        <Image />
      </Box>
      <Line />
    </>
  );
};

export default Description;
