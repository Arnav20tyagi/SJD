import { Box } from "@mui/material";
import React from "react";
import ContactUsPeople from "./ContactUsPeople";
import ContactUsDescription from "./ContactUsDescription";
import ContactUsGeoLocation from "./ContactUsGeoLocation";
import Banner from "../../components/Banner";

const ContactUs = () => {
  return (
    <Box>
      <Banner title="Contact Us" background={"/assets/contact-us/banner.jpg"} />
      <Box sx={{ px: { xs: 3, md: 8 } }}>
        <ContactUsPeople />
        <ContactUsDescription />
        <ContactUsGeoLocation />
      </Box>
    </Box>
  );
};

export default ContactUs;
