'use client';

import React from 'react';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const gradientThemes = {
  saffron: 'linear-gradient(90deg, #FF6F00, #F57C00)',
  lotus: 'linear-gradient(90deg, #AD1457, #D81B60)',
  peacock: 'linear-gradient(90deg, #004D40, #00796B)',
  dusk: 'linear-gradient(90deg, #4A148C, #7B1FA2)',
  royal: 'linear-gradient(90deg, #283593, #5C6BC0)',
  white: 'linear-gradient(90deg, #FFFFFF, #F0F0F0)',
};

const GenericButton = ({
  text = 'Click Me',
  colorTheme = 'saffron',
  to = '/',
  fullWidth = false,
  size = 'medium',
  variant = 'contained',
  borderRadius = '12px',
  buttonBackground, // custom background gradient
  buttonColor, // custom text color
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const isGradient = Object.keys(gradientThemes).includes(colorTheme);

  const background = buttonBackground || (isGradient ? gradientThemes[colorTheme] : colorTheme);
  const textColor = buttonColor || (isGradient ? '#fff' : '#fff');

  const handleClick = () => {
     window.scrollTo(0, 0);
    navigate(to);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Button
        onClick={handleClick}
        fullWidth={fullWidth}
        size={isMobile ? 'small' : size}
        variant={variant}
        sx={{
          fontWeight: 600,
          padding: '10px 24px',
          borderRadius,
          color: textColor,
          background,
          backgroundSize: '200%',
          backgroundPosition: 'left center',
          transition: 'background-position 0.4s ease-in-out',
          '&:hover': {
            backgroundPosition: 'right center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          },
        }}
      >
        {text}
      </Button>
    </motion.div>
  );
};

export default GenericButton;
