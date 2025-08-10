import React from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { Breadcrumbs, Typography, Link, Box } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const capitalize = (str) => {
  if (!str) return '';
  const truncated = str.length > 24 ? str.slice(0, 24) : str;
  return truncated.charAt(0).toUpperCase() + truncated.slice(1);
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Box mt={2}>
      <Breadcrumbs className="banner-breadcrumbs" separator={<NavigateNextIcon sx={{color:"#fff"}} fontSize="small" />} aria-label="breadcrumb">
        <Link
          component={RouterLink}
          underline="hover"
          to="/"
          sx={{ color: "white", fontWeight: 500 }}
        >
          Home
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <Typography key={to} color="white" fontWeight={500}>
              {capitalize(decodeURIComponent(value))}
            </Typography>
          ) : (
            <Link
              key={to}
              component={RouterLink}
              underline="hover"
              to={to}
              sx={{ color: "white", fontWeight: 500 }}
            >
              {capitalize(decodeURIComponent(value))}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
