import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box style={{ marginTop: "100px" }}>
      <Box
        sx={{
          height: "50px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",

          borderTop: "1px solid #ccc",
          padding: "40px",
          marginTop: "auto",
        }}
      >
        <Box sx={{ fontSize: "18px" }}>© 2023 E-Shop</Box>
        <Box sx={{ display: "flex", gap: "10px", cursor: "pointer" }}>
          <FacebookIcon sx={{ color: "blue" }} />
          <InstagramIcon sx={{ color: "purple" }} />
          <TwitterIcon sx={{ color: "blue" }} />
          <YouTubeIcon sx={{ color: "red" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
