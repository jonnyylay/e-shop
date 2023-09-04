import React from "react";
import { useParams } from "react-router";
import { fetcher } from "../utils/utils";
import useSWR from "swr";
import { Container, Grid, Box, Typography } from "@mui/material";
import Product from "../components/Product";
import Description from "../components/Description";
import { useDispatch, useSelector } from "react-redux";

const Information = () => {
  const targetId = useParams().id;
  const { data, error, isLoading } = useSWR(
    `https://fakestoreapi.com/products/`,
    fetcher
  );
  const [targetData, settargetData] = React.useState(data[targetId - 1]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Container>
      <Description
        title={targetData.title}
        price={targetData.price}
        rating={targetData.rating}
        description={targetData.description}
        image={targetData.image}
      />
      <Grid>
        <Typography variant="h2" sx={{ mt: 10, ml: 4 }}>
          Related Items
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          {data
            .filter(
              (product) =>
                product.category === targetData.category && product.id !== targetData.id
            )
            .slice(0, 4)
            .map((product) => (
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
      </Grid>
    </Container>
  );
};

export default Information;

{
}
