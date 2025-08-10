import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { t } from "i18next";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import { useTranslation } from "react-i18next";

const ContactUsDescription = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 2, md: 6 },
        mt: 4,
        borderRadius: 5,
        background:
          "linear-gradient(135deg, #FF6F00 0%, #FF8F00 40%, #D84315 100%)",
      }}
    >
      <Heading title={t("vistHeading")} colorTheme="white" />
      <SubHeading title={t("visitSubheading")} gradientTheme="white" />
      <Grid
        container
        spacing={6}
        alignItems="center"
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Left Side: Image */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="/assets/contact-us/contact-us.jpg" // Change to your actual image path
            alt="Temple Location"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 4,
              boxShadow: 4,
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* Right Side: Description */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Typography
            variant="body1"
            color="white"
            sx={{ mt: 2, lineHeight: 1.8 }}
            dangerouslySetInnerHTML={{ __html: t("visitDescription") }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUsDescription;
