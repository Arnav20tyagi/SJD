import React from 'react';
import { Typography, useMediaQuery, useTheme, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const gradientThemes = {
  saffron: 'linear-gradient(90deg, #3E2723, #5D4037)',         // Rich Earthy Brown (dark for light saffron)
  lotus: 'linear-gradient(90deg, #FFF176, #FFEE58)',           // Soft Divine Yellow (light for dark lotus)
  peacock: 'linear-gradient(90deg, #80CBC4, #B2DFDB)',         // Minty Green (light for dark peacock)
  dusk: 'linear-gradient(90deg, #FFCCBC, #FFAB91)',            // Warm Orange Tint (light for dark dusk)
  royal: 'linear-gradient(90deg, #FFEB3B, #FFF176)',           // Sacred Yellow (light for dark royal)
  white: 'linear-gradient(90deg, #FFFFFF,rgb(226, 226, 226))', 
  grey: 'linear-gradient(90deg, #00000099, #00000000)'          // Soft White
};

const SubHeading = ({ title, gradientTheme = 'saffron' }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box textAlign="center" pb={2}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Typography
          variant={isMobile ? 'subtitle1' : 'h6'}
          sx={{
            background: gradientThemes[gradientTheme],
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 2px rgba(0,0,0,0.05)',
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default SubHeading;
