import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";

const HomeDonate = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      sx={{
        py: 10,
        px: { xs: 2, md: 10 },
        backgroundImage: `linear-gradient(135deg, #D32F2F, #E53935, #F44336)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        textAlign: "center",
        borderRadius: 5,
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Heading title="Contribute to the Divine Cause" colorTheme="white" />
          <SubHeading
            title="Your donation helps preserve traditions, support spiritual programs, and maintain the temple."
            gradientTheme="white"
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: 2,
              textTransform: "none",
              px: 5,
              py: 1.5,
              fontWeight: 500,
            }}
            onClick={() => (window.location.href = "/donate")} // Customize this
          >
            Donate Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeDonate;
