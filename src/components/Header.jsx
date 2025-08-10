import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Box,
  Slide,
  useScrollTrigger,
  CssBaseline,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideMenu from "./SideMenu";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./LanguageDropdown";

//  menu list
const menuList = [
  "home",
  "rathaYatra",
  "about",
  "contact",
  "events",
  "donate",
  "media",
];

function HideOnScroll({ children }) {
  // const { t } = useTranslation();
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      case "media":
        navigate("/media");
        break;
      default:
        navigate("/");
    }
  };
  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
          <Container className="app-bar" maxWidth="100vw">
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              {/* Hamburger Menu (Mobile only) */}
              <Box sx={{ display: { xs: "flex", lg: "none" } }}>
                <SideMenu />
              </Box>
              {/* Logo */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: { xs: 0, lg: 2 },
                  color: "#4B5563",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  fontFamily: "windhavi",
                  mt: 0.5,
                }}
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  style={{ height: "50px", width: "240px" }}
                />
              </Box>
              {/* Center Nav (Desktop only) */}
              <Box
                sx={{
                  display: { xs: "none", lg: "flex" },
                  justifyContent: "center",
                  color: "#4B5563",
                }}
              ></Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {menuList.map((menu) => (
                  <Button
                    key={menu}
                    onClick={() => handlePageChange(menu)}
                    sx={{ color: "black", mx: 1 }}
                  >
                    {t(`menu.${menu}`)}
                  </Button>
                ))}
              </Box>
              <Box
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LanguageDropdown />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
