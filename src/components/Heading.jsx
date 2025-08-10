'use client';

import React from 'react';
import { Typography, useMediaQuery, useTheme, Box } from '@mui/material';
import { motion } from 'framer-motion';

const gradientThemes = {
  saffron: 'linear-gradient(90deg, #FF6F00, #F57C00)',         // Saffron Orange
  lotus: 'linear-gradient(90deg, #AD1457, #D81B60)',           // Lotus Pink
  peacock: 'linear-gradient(90deg, #004D40, #00796B)',         // Peacock Green-Blue
  dusk: 'linear-gradient(90deg, #4A148C, #7B1FA2)',            // Mystic Purple
  royal: 'linear-gradient(90deg, #283593, #5C6BC0)',           // Royal Blue
  white: 'linear-gradient(90deg, #FFFFFF, #F0F0F0)',           // White
};

const Heading = ({ title, colorTheme = 'saffron' }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const isGradient = Object.keys(gradientThemes).includes(colorTheme);

  return (
    <Box textAlign="center" pt={1}>
      <motion.div
      style={{ transformOrigin: 'top' }}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Typography
          variant={isMobile ? 'h5' : 'h3'}
          sx={{
            fontWeight: 700,
            letterSpacing: '2px',
            lineHeight: 1.4,
            color:
              colorTheme === 'white'
                ? '#fff'
                : isGradient
                ? 'transparent'
                : colorTheme,
            background: isGradient ? gradientThemes[colorTheme] : 'none',
            WebkitBackgroundClip: isGradient ? 'text' : 'unset',
            WebkitTextFillColor: isGradient ? 'transparent' : 'unset',
          }}
        >
          {title}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Heading;
