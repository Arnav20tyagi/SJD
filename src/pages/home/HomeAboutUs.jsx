import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import { useTranslation } from "react-i18next";
import GenericButton from "../../components/GenericButton";

const HomeAboutUs = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        py: 10,
        borderRadius: 5,
        px: { xs: 2, md: 10 },
        background:
          "linear-gradient(135deg, #F8BBD0 0%, #EC407A 40%, #AD1457 100%);",
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Heading title={t('homeAboutH')} colorTheme="white" />
      <SubHeading
        title={t('homeAboutSh')}
        gradientTheme="white"
      />
      <Grid container spacing={6} alignItems="center">
        {/* Left Side: Image */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="/assets/home/temple.png" // Replace with actual image path
            alt="About Shri Jagannath Dham"
            sx={{
              width: "100%",
              borderRadius: 3,
              boxShadow: 3,
            }}
          />
        </Grid>

        {/* Right Side: Text */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Typography variant="body1" color="white">
            {t('homeAbout')} 
          </Typography>
           <Box mt={2}>
             <GenericButton text={t('buttons.learnMore')} to="/about-us" variant="contained" buttonBackground="white" buttonColor="#EC407A" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeAboutUs;
