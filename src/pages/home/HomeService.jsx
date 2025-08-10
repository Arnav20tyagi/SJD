import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const HomeService = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const services = [
    {
      icon: "🍛",
      title: t("service.0.title"),
      description: t("service.0.description"),
      buttonText: t("service.0.buttonText"),
    },
    {
      icon: "🌳",
      title: t("service.1.title"),
      description: t("service.1.description"),
      buttonText: t("service.1.buttonText"),
    },
    {
      icon: "📞",
      title: t("service.2.title"),
      description: t("service.2.description"),
      buttonText: t("service.2.buttonText"),
    },
  ];
  const onButtonClick = () => {
    navigate("/contact-us");
  };
    
  return (
    <Box sx={{ py: 10 }}>
      <Heading title={t("serviceH")} colorTheme="dusk" />
      <SubHeading title={t("serviceSh")} gradientTheme="saffron" />
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={service.title}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              <Card
                sx={{
                  p: 3,
                  height: { xs: "100%", sm: "380px" },
                  borderRadius: 4,
                  boxShadow: 6,
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                }}
              >
                <Typography fontSize="5rem" mb={1}>
                  {service.icon}
                </Typography>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
                <Button
                  onClick={onButtonClick}
                  variant="contained"
                  sx={{
                    mt: 2,
                    borderRadius: "999px",
                    textTransform: "none",
                    backgroundColor: "#ab47bc",
                    "&:hover": {
                      backgroundColor: "#9c27b0",
                    },
                  }}
                >
                  {service.buttonText}
                </Button>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeService;
