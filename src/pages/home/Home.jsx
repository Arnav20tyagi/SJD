import { Box } from "@mui/material";
import React from "react";
import HomepageBanner from "./HomepageBanner";
import TempleHighlights from "./TempleHighlights";
import HomeEvents from "./HomeEvents";
import HomeAboutUs from "./HomeAboutUs";
import HomeRathaYatra from "./HomeRathaYatra";
import HomeService from "./HomeService";
import DonateAccount from "../donate/DonateAccount";

const Home = () => {
  return (
    <Box>
      <HomepageBanner />
      <Box sx={{px: { xs: 2, md: 8 }}}>
        <TempleHighlights />
        <HomeRathaYatra />
        <HomeEvents />
        <HomeAboutUs />
        <HomeService />
        <DonateAccount />
      </Box>
    </Box>
  );
};

export default Home;
