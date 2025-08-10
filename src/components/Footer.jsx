import React from "react";
import { Box, Grid, Typography, Link, Divider, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X"; // Twitter/X logo
const Footer = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#111827",
        color: "white",
        px: { xs: 3, md: 8 },
        py: 6,
        mt: 10,
        overflowX: "hidden", // Prevent horizontal scroll
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, sm: 5, md: 6, lg: 8 }} // More gap on large screens
        justifyContent="space-between"
      >
        {/* Left Section: Address & Contact */}
        <Grid
          item
          size={{ xs: 12, md: 3 }}
          component={motion.div}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {t("findUsAdrsH")}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {t("findUsAdrs")}
          </Typography>

          <Box
            mt={2}
            sx={{
              backgroundColor: "#111827",
              borderRadius: 2,
              p: 2, // ✅ Equal padding for all children
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#f9fafb" }}
            >
              📬 Contact Us
            </Typography>

            {/* First Contact */}
            <Stack
              spacing={0.5}
              mb={1.5}
              sx={{
                p: 1, // ✅ Adds internal space for hover block
                borderRadius: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#1f2937",
                  transform: "translateX(5px)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                },
              }}
            >
              <Typography variant="body2" sx={{ color: "#d1d5db" }}>
                📞 {t("team.0.mobile")}
              </Typography>
              <Typography variant="body2" sx={{ color: "#d1d5db" }}>
                👤 {t("team.0.position")}: {t("team.0.name")}
              </Typography>
            </Stack>

            <Divider sx={{ my: 1, borderColor: "#374151" }} />

            {/* Second Contact */}
            <Stack
              spacing={0.5}
              mb={1.5}
              sx={{
                p: 1,
                borderRadius: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#1f2937",
                  transform: "translateX(5px)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                },
              }}
            >
              <Typography variant="body2" sx={{ color: "#d1d5db" }}>
                🙏 {t("team.4.position")}: {t("team.4.name")}
              </Typography>
              <Typography variant="body2" sx={{ color: "#d1d5db" }}>
                📞 {t("team.4.mobile")}
              </Typography>
            </Stack>

            <Divider sx={{ my: 1, borderColor: "#374151" }} />
          </Box>
          {/* Organization */}
          <Typography
            variant="body2"
            sx={{ fontStyle: "italic", color: "#9ca3af" }}
          >
            🏛️ Organization: {t("team.0.org")}
          </Typography>
        </Grid>

        {/* Center Section: Quick Links */}
        <Grid
          item
          size={{ xs: 12, md: 3 }}
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{
            px: 8,
            // backgroundColor: "#c7cedeff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // horizontal centering
            // justifyContent: "center", // vertical centering
            textAlign: "center", // center text
            // py: 3, // padding for breathing room
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Quick Links
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            {[
              { label: "Donate", href: "donate" },
              { label: "Events", href: "events" },
              { label: "About Us", href: "about-us" },
              { label: "Contact Us", href: "contact-us" },
              { label: "Ratha Yatra", href: "ratha-yatra" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                underline="hover"
                color="inherit"
                sx={{
                  fontSize: "0.95rem",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    pl: 1,
                  },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Right Section: Temple Timings & Map */}
        <Grid
          item
          size={{ xs: 12, md: 3 }}
          component={motion.div}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{
            // px: 8,
            // backgroundColor: "#c7cedeff",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center", // horizontal centering
            // justifyContent: "center", // vertical centering
            textAlign: "center", // center text
            // py: 3, // padding for breathing room
          }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
            Temple Timings
          </Typography>
          <Typography variant="body2" sx={{mb:1}}>Morning: 4:00 AM – 01:00 PM</Typography>
          <Typography variant="body2">Evening: 4:00 PM – 10:00 PM</Typography>
          <Box sx={{ width: "100%", overflow: "hidden" }}>
            <Typography variant="h6" fontWeight="bold" mt={2} mb={2}>
              Get Directions
            </Typography>
            <Box
              component="iframe"
              title="Jagannath Dham Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.008830454009!2d73.71935877435388!3d24.55435695743975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967ef6afa2334c7%3A0x459cda5403768bc8!2sJagannath%20Dham!5e0!3m2!1sen!2sin!4v1750000871197!5m2!1sen!2sin"
              sx={{
                width: "100%",
                maxWidth: "100%",
                height: { xs: "300px", md: "150px" },
                border: 0,
                display: "block",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Grid>

        {/* Fourth Section: Join Us */}
        <Grid
           item
          size={{ xs: 12, md: 3 }}
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{
            px: 8,
            // backgroundColor: "#c7cedeff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // horizontal centering
            // justifyContent: "center", // vertical centering
            textAlign: "center", // center text
            // py: 3, // padding for breathing room
          }}

        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Join Us
          </Typography>
          <Box display="flex" flexDirection="row" gap={2} mt={1}>
            <Link
              href="https://www.instagram.com/jagannath_temple_udaipurblog?igsh=bWZpdTd2NHBxeGg4"
              target="_blank"
              rel="noopener"
              sx={{
                color: "inherit",
                transition: "all 0.3s ease",
                "&:hover": { color: "#E1306C", transform: "scale(1.2)" },
              }}
            >
              <InstagramIcon fontSize="large" />
            </Link>
            <Link
              href="https://facebook.com/"
              target="_blank"
              rel="noopener"
              sx={{
                color: "inherit",
                transition: "all 0.3s ease",
                "&:hover": { color: "#1877F2", transform: "scale(1.2)" },
              }}
            >
              <FacebookIcon fontSize="large" />
            </Link>
            <Link
              href="https://youtu.be/vyeK2IFpdPw?si=muXzexsSJH2yB8fF"
              target="_blank"
              rel="noopener"
              sx={{
                color: "inherit",
                transition: "all 0.3s ease",
                "&:hover": { color: "#FF0000", transform: "scale(1.2)" },
              }}
            >
              <YouTubeIcon fontSize="large" />
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener"
              sx={{
                color: "inherit",
                transition: "all 0.3s ease",
                "&:hover": { color: "#1DA1F2", transform: "scale(1.2)" },
              }}
            >
              <XIcon fontSize="large" />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, borderColor: "#4B5563" }} />

      <Typography
        variant="body2"
        color="white"
        align="center"
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        © {new Date().getFullYear()} Shri Jagannath Dham. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
