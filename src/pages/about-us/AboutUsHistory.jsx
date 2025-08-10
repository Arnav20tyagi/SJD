import React from 'react';
import { Grid, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Heading from '../../components/Heading';
import SubHeading from '../../components/SubHeading';

const AboutUsHistory = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const {t} = useTranslation();
  const sections = [
  {
    id: 1,
    image: '/assets/about-us/sector7.webp',
    details: t('aboutHistory.section1'),
  },
  {
    id: 2,
    image: '/assets/about-us/old-temple.jpg',
    details: t('aboutHistory.section2'),
  },
  {
    id: 3,
    image: '/assets/about-us/temple.png',
    details: t('aboutHistory.section3'),
  }
];

  return (
    <Box sx={{ py: {xs:2, md:6},}}>
        <Heading title={t('historyHeading')} colorTheme="saffron" />
        <SubHeading title={t('historySubheading')} gradientTheme="saffron" />
      {sections.map((section, index) => {
        const isImageLeft = index % 2 === 0;
        return (
          <Grid
            container
            spacing={4}
            key={section.id}
            alignItems="center"
            direction={isMobile ? 'column' : 'row'}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            sx={{ mb: 8 }}
          >
            {/* Image Section */}
            <Grid item size={{xs:12, md:6}} order={{ xs: 1, md: isImageLeft ? 1 : 2 }}>
              <Box
                component="img"
                src={section.image}
                sx={{
                  width: '100%',
                  maxHeight: '320px',
                  borderRadius: 4,
                  boxShadow: 3,
                }}
              />
            </Grid>

            {/* Text Section */}
            <Grid item size={{xs:12, md:6}} order={{ xs: 2, md: isImageLeft ? 2 : 1 }}>
              <Typography variant="body1" color="text.secondary">
                {section.details}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default AboutUsHistory;
