import { Box } from '@mui/material'
import React from 'react'
import DonateAccount from './DonateAccount'
import DonateDescription from './DonateDescription'
import Banner from '../../components/Banner'

const Donate = () => {
  return (
    <Box>
      <Banner title="Donate" background="/assets/donate/banner.png" />
      <Box sx={{px: { xs: 3, md: 8 }}}>
      <DonateAccount />
      <DonateDescription />
      </Box>
    </Box>
  )
}

export default Donate
