import { Box } from '@mui/material'
import React from 'react'
import RathaYatraHighlights from './RathaYatraHighlights'
import RathaYatraSchedule from './RathaYatraSchedule'
import RathaYatraDescription from './RathaYatraDescription'
import Banner from '../../components/Banner'
import DonateAccount from '../donate/DonateAccount'

const RathaYatra = () => {
  return (
    <Box>
    <Banner title="Ratha Yatra" background={"/assets/ratha-yatra/banner.png"} />
    <Box sx={{px: { xs: 3, md: 8 }}}>
        <RathaYatraHighlights />
        <RathaYatraDescription />
        <RathaYatraSchedule />
        <DonateAccount />
    </Box>
    </Box>
  )
}

export default RathaYatra
