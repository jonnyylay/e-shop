import { Box, Paper, Rating, Tooltip, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, image, category, title, price, rating }) => {
  return (
    <Link to={`/information/${id}`} style={{ textDecoration: "none" }}>
      <Paper
        key={id}
        sx={{
          flexBasis: "calc(25% - 24px)",
          borderRadius: "10px",
          cursor: "pointer",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Box sx={{ m: 3, width: "200px", height: "400px", paddingTop: "60px" }}>
          <img
            src={image}
            alt={title}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "200px",
            }}
          />
          <Typography variant="h4" sx={{ mt: 2 }}>
            {category.toUpperCase()}
          </Typography>
          <Tooltip title={title} sx={{ fontSize: "100px" }}>
            <Typography
              variant="h3"
              sx={{
                mt: 2,
                maxWidth: "100%",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Typography>
          </Tooltip>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              marginTop: "10px",
            }}
          >
            <Rating
              name="half-rating-read"
              size="small"
              value={rating.rate}
              precision={0.5}
              readOnly
            />
            <Typography variant="h5">{`(${rating.count})`}</Typography>
          </Box>
          <Typography variant="h3" sx={{ mt: 2 }}>
            ${price}
          </Typography>
        </Box>
      </Paper>
    </Link>
  );
};

export default Product;
