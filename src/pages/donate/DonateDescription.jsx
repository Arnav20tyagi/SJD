import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";

const DonateDescription = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 10,  }}>
      {/* Heading & Subtitle */}
      <Heading title={t('whyDonateH')} colorTheme="saffron" />
      <SubHeading title={t('whyDonateSh')} gradientTheme="saffron" />

      {/* Content Section */}
      <Grid container spacing={4} alignItems="center">
        {/* Image Left */}
        <Grid
          item
         size={{ xs: 12, md: 6 }}
          component={motion.div}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            component="img"
            src="/assets/donate/donate-temple.jpg" // replace with your image path
            alt="Temple Donation"
            sx={{
              width: "100%",
              borderRadius: 3,
              boxShadow: 3,
            }}
          />
        </Grid>

        {/* Text Right */}
        <Grid
          item
         size={{ xs: 12, md: 6 }}
          component={motion.div}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="body1">
            {t('whyDonate')}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DonateDescription;
