import React from "react";
import { Box, Grid, Typography} from "@mui/material";
import { motion } from "framer-motion";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import { useTranslation } from "react-i18next";
import GenericButton from "../../components/GenericButton";

const textVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const HomeRathaYatra = () => {
  const { t } = useTranslation();
  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      sx={{
        py: 10,
        overflow: "hidden",
        borderRadius: 5,
        background: `linear-gradient(135deg, #FF6F00 0%, #FF8F00 40%, #D84315 100%)`,
        color: "white",
      }}
    >
        {/* Heading */}
        <Heading title={t('homeRYH')} colorTheme="white"/>
        <SubHeading title={t('homeRYSh')} gradientTheme="white" />
      <Grid container spacing={6} mt={4} alignItems="start" sx={{px: { xs: 2, md: 10 }}}>
        {/* Left Side: Text */}
        <Grid item size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
          <motion.div variants={textVariants}>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.8 }}
            >
              {t('homeRYD')}
            </Typography>
          </motion.div>
          <Box mt={2}>
             <GenericButton text={t('buttons.knowMore')} to="/ratha-yatra" variant="contained" buttonBackground="white" buttonColor="#FF6F00" />
          </Box>
        </Grid>

        {/* Right Side: Image */}
        <Grid item size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
          <motion.div variants={imageVariants}>
            <Box
              component="img"
              src="/assets/ratha-yatra/main.webp" // Replace with your actual image path
              alt="Ratha Yatra"
              sx={{
                width: "100%",
                borderRadius: 3,
                boxShadow: 8,
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeRathaYatra;
