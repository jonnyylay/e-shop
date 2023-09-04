import { Box, Typography } from "@mui/material";
import React from "react";

const Poster = () => {
  return (
    <Box sx={{ position: "relative", marginTop: "10px" }}>
      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="placeholder"
        width={"100%"}
        height={"600px"}
        style={{ objectFit: "cover", borderRadius: "10px" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography variant="h1" color={"primary"}>
          New Arrivals
        </Typography>
      </Box>
    </Box>
  );
};

export default Poster;
