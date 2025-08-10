import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import TempleIcon from "@mui/icons-material/TempleHindu";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupsIcon from "@mui/icons-material/Groups";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import { useTranslation } from "react-i18next";

const gradientIcon = (IconComponent, gradient) => (
  <Box
    sx={{
      width: 60,
      height: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: gradient,
      borderRadius: "50%",
      color: "white",
      boxShadow: 3,
    }}
  >
    <IconComponent sx={{ fontSize: 32 }} />
  </Box>
);

const TempleHighlights = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const highlights = [
  {
    title: t('homeHighlights.0.title'),
    description: t('homeHighlights.0.description'),
    icon: gradientIcon(TempleIcon, "linear-gradient(135deg, #FF6F00, #FFD600)"),
  },
  {
    title: t('homeHighlights.1.title'),
    description: t('homeHighlights.1.description'),
    icon: gradientIcon(AccessTimeIcon, "linear-gradient(135deg, #D32F2F, #FF6F00)"),
  },
  {
    title: t('homeHighlights.2.title'),
    description: t('homeHighlights.2.description'),
    icon: gradientIcon(GroupsIcon, "linear-gradient(135deg, #FF6F00, #BF360C)"),
  },
  {
    title: t('homeHighlights.3.title'),
    description: t('homeHighlights.3.description'),
    icon: gradientIcon(VolunteerActivismIcon, "linear-gradient(135deg, #FFD600, #FF6F00)"),
  },
];

  return (
    <Box sx={{ py: 10}}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        textAlign="center"
        mb={6}
      >
        <Heading title={t('homeHighlightsH')} />
        <SubHeading title={t('homeHighlightsSh')} />
      </Box>

      <Grid container spacing={4}>
        {highlights.map((item, index) => (
          <Grid
            item
            size={{ xs: 12, sm: 6, md: 3 }}
            key={item.title}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: "center",
                height: "100%",
                borderRadius: 5,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 6,
                },
              }}
            >
              <Box sx={{display:"flex", justifyContent:"center"}} mb={2}>{item.icon}</Box>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TempleHighlights;
