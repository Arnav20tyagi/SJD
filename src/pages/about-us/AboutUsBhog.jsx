import React, { use } from "react";
import { Grid, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";

const AboutUsBhog = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      image: "/assets/about-us/bhog.webp",
      details: t("bhog"),
    },
  ];

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 2, md: 6 },
        borderRadius: 5,
        background: `linear-gradient(135deg, #F8BBD0 0%, #EC407A 40%, #AD1457 100%);`,
      }}
    >
        <Heading title={t("bhogHeading")} colorTheme="white" />
        <SubHeading title={t("bhogSubheading")} gradientTheme="white" />
      {sections.map((section, index) => {
        const isImageLeft = index % 2 === 0;
        return (
          <Grid
            container
            spacing={4}
            key={section.id}
            alignItems="center"
            direction={isMobile ? "column" : "row"}
            // component={motion.div}
            // initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6, delay: index * 0.1 }}
            // viewport={{ once: true }}
          >
            {/* Image Section */}
            <Grid
              item
              size={{ xs: 12, md: 6 }}
              order={{ xs: 1, md: isImageLeft ? 1 : 2 }}
            >
              <Box
                component="img"
                src={section.image}
                sx={{
                  width: "100%",
                  maxHeight: "320px",
                  objectFit: "cover",
                  borderRadius: 4,
                  boxShadow: 3,
                }}
              />
            </Grid>

            {/* Text Section */}
            <Grid
              item
              size={{ xs: 12, md: 6 }}
              order={{ xs: 2, md: isImageLeft ? 2 : 1 }}
            >
              <Typography variant="body1" color="white">
                {section.details}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default AboutUsBhog;
