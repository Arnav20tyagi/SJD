import React from "react";
import { Box, Grid, Typography, useTheme, Link } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Heading from "../../components/Heading";

const ContactUsGeoLocation = () => {
  const theme = useTheme();
  const {t} = useTranslation();

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 2, md: 6 },
        mt: 6,
        borderRadius: 5,
        background:
          "linear-gradient(135deg, #F8BBD0 0%, #EC407A 40%, #AD1457 100%);",
      }}
    >
      <Heading title={t("findUsHeading")} colorTheme="white" />
      <Grid
        container
        spacing={6}
        alignItems="canter"
        mt={4}
        sx={{ textAlign: { xs: "center", md: "left" } }}
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
          {/* Address - Left Side */}
        <Grid item size={{ xs: 12, md: 8 }}>
          <Typography
            variant="h5"
            color="white"
            sx={{lineHeight: 1.8 }}
          >
            {t("findUsAdrsH")}
          </Typography>
          <Typography
            variant="h6"
            color="white"
            sx={{ mt: 1 }}
          >
            {t("findUsAdrs")}
          </Typography>
          <Typography
            variant="subtitle1"
            color="white"
            sx={{ mt: 1 }}
          >
            {t("findUsDis")}
          </Typography>
        </Grid>
        {/* Map - Right Side */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <Box
            component={Link}
            href="https://www.google.com/maps?q=Jagannath+Dham+Udaipur+Sector+7"
            target="_blank"
            rel="noopener"
            underline="none"
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: 4,
              display: "block",
              height: "150px",
              "&:hover": { opacity: 0.95 },
            }}
          >
            <Box
              component="iframe"
              title="Jagannath Dham Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.008830454009!2d73.71935877435388!3d24.55435695743975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967ef6afa2334c7%3A0x459cda5403768bc8!2sJagannath%20Dham!5e0!3m2!1sen!2sin!4v1750000871197!5m2!1sen!2sin"
              width="100%"
              height="150px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUsGeoLocation;
