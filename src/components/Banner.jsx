import React, { useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import Breadcrumb from "./Breadcrumb";
import { truncateByCharacters } from "../utlis/utlis";

const Banner = ({ background, title }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const bannerRef = useRef(null);
  
  return (
    <Box
      ref={bannerRef}
      sx={{
        position: "relative",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: isMobile ? 200 : "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.2))",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Grid
        container
        justifyContent="center"
        textAlign="center"
        sx={{ position: "relative", zIndex: 2, px: 2 }}
      >
        <Grid  size={12} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            component={motion.div}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8 }}
            sx={{ fontWeight: 700, mb: 1, fontFamily: "windhavi", letterSpacing: 1 }}
          >
            {truncateByCharacters(title)}
          </Typography>
          <Breadcrumb />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
