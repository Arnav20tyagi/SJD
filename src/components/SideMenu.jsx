import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate(); // Assuming you have react-router-dom set up
  const [open, setOpen] = useState(false);

  //  menu list
  const menuList = [
    "home",
    "rathaYatra",
    "about",
    "contact",
    "events",
    "donate",
  ];

  // social icons list
  const socials = [
    { icon: <FacebookIcon />, label: "Facebook", url: "https://facebook.com" },
    { icon: <TwitterIcon />, label: "Twitter", url: "https://twitter.com" },
    { icon: <LinkedInIcon />, label: "LinkedIn", url: "https://linkedin.com" },
  ];

  // Internal handler for page change
    const handlePageChange = (page) => {
      window.scrollTo(0, 0);
    switch (page) {
      case "home":
        navigate("/");
        break;
      case "about":
        navigate("/about-us");
        break;
      case "contact":
        navigate("/contact-us");
        break;
      case "donate":
        navigate("/donate");
        break;
      case "events":
        navigate("/events");
        break;
      case "rathaYatra":
        navigate("/ratha-yatra");
        break;
      default:
        navigate("/");
    }
        setOpen(false); // Close menu after selection
  }
  // Toggle drawer open/close
  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {/* Button to open drawer */}
      <IconButton sx={{color:{xs:"black", lg:"white"}}} onClick={toggleDrawer} aria-label="open menu">
        <MenuIcon />
          <Typography sx={{fontWeight:700, ml:1, display:{xs:"none", lg:"flex"}}}>Menu</Typography>
      </IconButton>

      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <Box
          sx={{
            width: { xs: "75vw", lg: "40vw" },
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Close button */}
          <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/logo.png"
                alt="Logo"
                style={{ height: "50px", width: "180px" }}
              />
            </Box>
            <IconButton onClick={toggleDrawer} aria-label="close menu">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Menu List */}
          <List>
            {menuList.map((page) => (
              <ListItem
                button
                key={page}
                onClick={() => handlePageChange(page)}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: "goodly semibold",
                        color: "#4B5563",
                        "&:hover": { color: "#F30A49" },
                        textTransform: "capitalize",
                      }}
                    >
                      {page}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          {/* Social Icons
          <List>
            {socials.map(({ icon, label, url }, index) => (
              <ListItem
                button
                key={index}
                component="a"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <IconButton
                  size="small"
                  sx={{
                    color: "#4B5563",
                    "&:hover": { color: "#F30A49" },
                    mr: 1,
                  }}
                >
                  {icon}
                </IconButton>
                <Typography sx={{ fontFamily: "goodly semibold" }}>
                  {label}
                </Typography>
              </ListItem>
            ))}
          </List> */}
        </Box>
      </Drawer>
    </>
  );
};

export default SideMenu;
