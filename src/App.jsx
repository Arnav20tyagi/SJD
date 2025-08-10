import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import RathaYatra from "./pages/ratha-yatra/RathaYatra";
import AboutUs from "./pages/about-us/AboutUs";
import Events from "./pages/events/Events";
import ContactUs from "./pages/contact-us/ContactUs";
import Donate from "./pages/donate/Donate";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import Images from "./pages/media/Images";
const App = () => {
  return (
    <Box 
      sx={{
        background:"linear-gradient(135deg, #fff8f0, #fce4ec)",
      }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/ratha-yatra" element={<RathaYatra />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/events" element={<Events />} />
        <Route path="/media" element={<Images/>} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
