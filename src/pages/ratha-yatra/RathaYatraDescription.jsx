import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";

const RathaYatraDescription = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const descriptions = [
    {
      section: t("rathaYatraProcess"),
      sectionImage: "/assets/ratha-yatra/process.jpg",
    },
    {
      section: t("rYDSection1"),
      sectionImage: "/assets/ratha-yatra/section1.jpg",
    },
    {
      section: t("rYDSection2"),
      sectionImage: "/assets/ratha-yatra/section2.jpg",
    },
    {
      section: t("rYDSection3"),
      sectionImage: "/assets/ratha-yatra/section3.png",
    },
    {
      section: t("rYDSection4"),
      sectionImage: "/assets/ratha-yatra/section4.jpg",
    },
    {
      section: t("rYDSection5"),
      sectionImage: "/assets/ratha-yatra/section5.jpg",
    },
  ];

  return (
    <Box
      sx={{
        my: 6,
        py: 10,
        borderRadius: 5,
        px: { xs: 2, md: 10 },
        background:
          "linear-gradient(135deg, #F8BBD0 0%, #EC407A 40%, #AD1457 100%);",
      }}
    >
      <Heading title={t("rYDHeading")} colorTheme="white" />
      <Box
        justifyContent="center"
        sx={{ display:"flex", flexDirection:{xs:"column", md:"row"}, marginY:{ xs: 2, md: 4 } }}
      >
        <Box sx={{ml:{xs:0, md:2}}}>
           <Typography
                variant={isMobile ? 'subtitle1' : 'h6'}
                sx={{
                  color: 'white',
                  fontWeight: 500,
                  textAlign: 'center',
                }}
              >
                {t("rYDPlace")}
      </Typography>
        </Box>
        <Box sx={{ml:{xs:0, md:2}}}>
           <Typography
                variant={isMobile ? 'subtitle1' : 'h6'}
                sx={{
                  color: 'white',
                  fontWeight: 500,
                  textAlign: 'center',
                }}
              >
                {t("rYDTime")}
      </Typography>
        </Box>
        <Box sx={{ml:{xs:0, md:2}}}>
           <Typography
                variant={isMobile ? 'subtitle1' : 'h6'}
                sx={{
                  color: 'white',
                  fontWeight: 500,
                  textAlign: 'center',
                }}
              >
                {t("rYDDate")}
      </Typography>
        </Box>
        </Box>
      {descriptions.map((description, index) => {
        const isEven = index % 2 === 0;
        return (
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="center"
            key={index}
            mb={6}
            direction={{ xs: "column", md: "row" }}
          >
            {/* Image */}
            <Grid
              item
              size={{ xs: 12, md: 6 }}
              order={{ xs: 1, md: isEven ? 1 : 2 }}
            >
              <Box
                component="img"
                src={description.sectionImage}
                alt={`Ratha Yatra ${index}`}
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 3,
                  boxShadow: 3,
                  objectFit: "cover",
                }}
              />
            </Grid>

            {/* Text */}
            <Grid
              item
              size={{ xs: 12, md: 6 }}
              order={{ xs: 2, md: isEven ? 2 : 1 }}
            >
              <Typography variant="body1" lineHeight={1.8} color="white">
                {description.section}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default RathaYatraDescription;
