import { Box } from '@mui/material'
import React from 'react'
import AboutUsDescription from './AboutUsDescription'
import Banner from '../../components/Banner'
import AboutUsHistory from './AboutUsHistory'
import AboutUsManagement from './AboutUsManagement'
import AboutUsBhog from './AboutUsBhog'
import AboutUsDress from './AboutUsDress'

const AboutUs = () => {
  return (
    <Box>
      <Banner title="About Us" background={"/assets/about-us/temple.png"} />
      <Box sx={{px: { xs: 3, md: 8 }}}>
      <AboutUsHistory />
      <AboutUsDescription />
      <AboutUsManagement />
      <AboutUsBhog />
      <AboutUsDress />
      </Box>
    </Box>
  )
}

export default AboutUs
