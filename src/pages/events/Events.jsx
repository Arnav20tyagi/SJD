import { Box } from "@mui/material";
import React from "react";
import EventCards from "./EventCards";
import Banner from "../../components/Banner";
import DonateAccount from "../donate/DonateAccount";

const Events = () => {
  return (
    <Box>
      <Banner title="Events" background={"/assets/events/banner.jpg"} />
      <Box sx={{ px: { xs: 3, md: 8 } }}>
        <EventCards />
        <DonateAccount />
      </Box>
    </Box>
  );
};

export default Events;
