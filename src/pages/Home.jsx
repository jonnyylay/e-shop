import React, { useState } from "react";

import "./styles.css";
import { Box, Button, Container, Typography } from "@mui/material";
import useSWR from "swr";
import Product from "../components/Product";
import Poster from "../components/Poster";
import { fetcher } from "../utils/utils";

function Home() {
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products/",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Container>
      <Poster />
      <Typography variant="h2" align="center" sx={{ mt: 4 }}>
        Products
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          pt: 4,
        }}
      >
        {data.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            category={product.category}
            title={product.title}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </Box>
    </Container>
  );
}

export default Home;
