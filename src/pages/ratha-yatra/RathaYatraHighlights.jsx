import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { useTranslation } from 'react-i18next';
import Heading from '../../components/Heading';
import SubHeading from '../../components/SubHeading';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


const RathaYatraHighlights = () => {
    const {t} = useTranslation();

  const events = [
    {
      id: 1,
      name: t('rathaYatraHighlight.0.title'),
      time: t('rathaYatraHighlight.0.time'),
      location: t('rathaYatraHighlight.0.location'),
      image: "/assets/ratha-yatra/phase1.webp",
      details: t('rathaYatraHighlight.0.details')
    },
    {
      id: 2,
      name: t('rathaYatraHighlight.1.title'),
      time: t('rathaYatraHighlight.1.time'),
      location: t('rathaYatraHighlight.1.location'),
      image: "/assets/ratha-yatra/phase2.webp",
      details: t('rathaYatraHighlight.1.details')
    },
    {
      id: 3,
      name: t('rathaYatraHighlight.2.title'),
      time: t('rathaYatraHighlight.2.time'),
      location: t('rathaYatraHighlight.2.location'),
      image: "/assets/ratha-yatra/phase3.webp",
      details: t('rathaYatraHighlight.2.details')
    }
  ];
  return (
        <Box>
          <Heading title={t('rYHHeading')} colorTheme='saffron' />
          <SubHeading title={t('rYHSubheading')} gradientTheme='saffron' />
          <Grid container spacing={4} justifyContent="center">
            {events.map((event) => (
              <Grid key={event.id} item size={{ xs: 12, sm: 4, md: 4 }}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card
                    elevation={4}
                    sx={{
                      borderRadius: 4,
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={event.image}
                      alt={event.name}
                    />
                    <CardContent>
                      <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
                        {event.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        🕒 {event.time}
                        <br />
                        📍 {event.location}
                      </Typography>
                      <Typography variant="body1">{event.details}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
  );
};

export default RathaYatraHighlights;
