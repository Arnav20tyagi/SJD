import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";

const DonateAccount = () => {
  const theme = useTheme();
  const {t} = useTranslation();

  return (
    <Box>
      {/* Combined Card */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        sx={{
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 6 },
          borderRadius: 5,
          background: `linear-gradient(135deg, #FF6F00 0%, #FF8F00 40%, #D84315 100%)`,
          mt: 6,
        }}
      >
        <Heading title={t('donateHeading')} colorTheme="white" />
        <SubHeading title={t('donateSubheading')} gradientTheme="white" />
            <Grid container spacing={4} alignItems="center" justifyContent="space-between">
              {/* Bank Details */}
              <Grid item size={{ xs: 12, md: 6 }} sx={{ textAlign: {xs: "center", md:"left"}, color: "white" }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {t('bankHeading')}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  <strong>{t('bankNameLabel')}</strong> {t('bankName')}
                </Typography>
                 <Typography variant="h6" gutterBottom>
                  <strong>{t('branchLabel')}</strong> {t('branch')}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  <strong>{t('aNLabel')}</strong> {t('accountNumber')}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  <strong>IFSC Code:</strong> {t('ifscCode')}
                </Typography>
              </Grid>

              {/* QR Code */}
              <Grid item size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  src="/assets/donate/qr-code.jpg" // Replace with your QR path
                  alt="Donate QR Code"
                  sx={{
                    width: { xs: 200, md: 250 },
                    height: "auto",
                    borderRadius: 2,
                  }}
                />
                <Typography variant="body2" color="white" mt={1}>
                  Scan the QR to Donate Instantly
                </Typography>
              </Grid>
            </Grid>
      </Box>
    </Box>
  );
};

export default DonateAccount;
