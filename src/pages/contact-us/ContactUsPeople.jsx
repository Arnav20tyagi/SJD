"use client";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement"
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";

// Icon Mapper based on position
const getIcon = (position) => {
  switch (position) {
    case "Coordinator":
      return (
        <SupervisorAccountIcon sx={{ fontSize: "5rem", color: "#f50057" }} />
      );
    case "General Secretary":
      return <GroupIcon sx={{ fontSize: "5rem", color: "#00bcd4" }} />;
    case "Treasurer":
      return (
        <AccountBalanceWalletIcon sx={{ fontSize: "5rem", color: "#ff9800" }} />
      );
    case "President":
      return <EmojiEventsIcon sx={{ fontSize: "5rem", color: "#4caf50" }} />;
      case "Pandit Ji":
        return <SelfImprovementIcon sx={{ fontSize: "5rem", color: "#4caf50" }} />;
    default:
      return null;
  }
};

const ContactUsPeople = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const people = [
    {
      name: t("team.0.name"),
      position: t("team.0.position"),
      contact: t("team.0.mobile"),
      organization: t("team.0.org"),
    },
    {
      name: t("team.1.name"),
      position: t("team.1.position"),
      contact: t("team.1.mobile"),
      organization: t("team.1.org"),
    },
    {
      name: t("team.2.name"),
      position: t("team.2.position"),
      contact: t("team.2.mobile"),
      organization: t("team.2.org"),
    },
    {
      name: t("team.3.name"),
      position: t("team.3.position"),
      contact: t("team.3.mobile"),
      organization: t("team.3.org"),
    },
    {
      name: t("team.4.name"),
      position: t("team.4.position"),
      contact: t("team.4.mobile"),
      organization: t("team.4.org"),
    },
  ];

  return (
    <Box sx={{ py: { xs: 2, md: 6 } }}>
      <Heading title={t("teamHeading")} colorTheme="saffron" />
      <SubHeading title={t("teamSubheading")} gradientTheme="saffron" />

      <Grid container spacing={4} justifyContent="center" >
        {people.map((person, index) => (
          <Grid item size={{ xs: 12, md: 6 }} key={person.name}>
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": { boxShadow: 6 },
                  backgroundColor: "#f0f4f8"
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Box sx={{ mb: 2 }}>{getIcon(person.position)}</Box>
                  <Typography variant="h6" fontWeight={600}>
                    {person.name}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {person.position}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={0.5}>
                    {person.organization}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    {person.contact}
                  </Typography>
                </CardContent>
              </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactUsPeople;
