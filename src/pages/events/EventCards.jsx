import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const hindiToEnglishMonths = {
  'जनवरी': 'January',
  'फरवरी': 'February',
  'मार्च': 'March',
  'अप्रैल': 'April',
  'मई': 'May',
  'जून': 'June',
  'जुलाई': 'July',
  'अगस्त': 'August',
  'सितम्बर': 'September',
  'अक्टूबर': 'October',
  'नवम्बर': 'November',
  'दिसम्बर': 'December',
};

const EventCards = () => {
  const [tab, setTab] = useState("daily");
  const theme = useTheme();
  const today = new Date();
  const {t, i18n} = useTranslation();
  const lang = i18n.language || 'en';

  const eventData = {
  daily: Array.from({ length: 6 }, (_, i) => ({
    title: t(`dailyEvents.${i}.title`),
    time: t(`dailyEvents.${i}.time`),
    details: t(`dailyEvents.${i}.details`),
    image: [
      "/assets/events/aarti.jpg",
      "/assets/events/shringar.jpg",
      "/assets/events/darshan-daily.webp",
      "/assets/events/bhog.jpg",
      "/assets/events/darshan-evening.jpg",
      "/assets/events/sandhya-aarti.jpg"
    ][i]
  })),
   yearly: Array.from({ length: 17 }, (_, i) => ({
    title: t(`yearlyEvents.${i}.title`),
    date: t(`yearlyEvents.${i}.date`),
    thithi: t(`yearlyEvents.${i}.thithi`),
    details: t(`yearlyEvents.${i}.details`),
    image: [
      "/assets/events/ram-navami.jpg",
      "/assets/events/hanuman-jayanti.jpg",
      "/assets/events/ganga-dashahara.webp",
      "/assets/events/snan.webp",
      "/assets/events/darshan.webp",
      "/assets/events/ratha-yatra.webp",
      "/assets/events/janmashtami.webp",
      "/assets/events/ganesh-chaturthi.jpg",
      "/assets/events/jaljhulani.jpg",
      "/assets/events/anant-chaturdashi.jpg",
      "/assets/events/navratri.jpg",
      "/assets/events/durga-navami.jpg",
      "/assets/events/dussehra.jpg",
      "/assets/events/annakut.jpg",
      "/assets/events/paush-bara.png",
      "/assets/events/mahashivratri.jpg",
      "/assets/events/holika-dahan.jpg"
    ][i]
  }))
};

const sortedYearlyEvents = [...eventData.yearly]
  .map((event) => {
    let [day, month, year] = event.date.split(" ");

    // Convert Hindi month to English only when in Hindi
    if (lang === "hi" && hindiToEnglishMonths[month]) {
      month = hindiToEnglishMonths[month];
    }

    const eventDate = new Date(`${month} ${day}, ${year}`);

    // Adjust for past events to push them to next year
    if (eventDate < today) {
      eventDate.setFullYear(today.getFullYear() + 1);
    }

    return { ...event, parsedDate: eventDate };
  })
  .sort((a, b) => a.parsedDate - b.parsedDate);

  const events = tab === "daily" ? eventData.daily : sortedYearlyEvents;

  return (
    <Box>
      <Box textAlign="center" my={4}>
        <Tabs
          value={tab}
          onChange={(e, newTab) => setTab(newTab)}
          centered
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Daily Events" value="daily" />
          <Tab label="Yearly Events" value="yearly" />
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {events.map((event, index) => (
          <Grid
            item
            key={event.id}
            size={{ xs: 12, sm: 6, md: 4 }}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
                borderRadius: 3,
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={event.image}
                alt={event.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {event.title}
                </Typography>

                {tab === "daily" ? (
                  <Box display="flex" alignItems="center" mb={1}>
                    <AccessTimeIcon
                      fontSize="small"
                      sx={{ mr: 1, color: theme.palette.primary.main }}
                    />
                    <Typography variant="body2">{event.time}</Typography>
                  </Box>
                ) : (
                  <>
                    <Box display="flex" alignItems="center" mb={1}>
                      <EventAvailableIcon
                        fontSize="small"
                        sx={{ mr: 1, color: theme.palette.primary.main }}
                      />
                      <Typography variant="body2">{event.date}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={1}>
                      <Brightness4Icon
                        fontSize="small"
                        sx={{ mr: 1, color: theme.palette.secondary.main }}
                      />
                      <Typography variant="body2">{event.thithi}</Typography>
                    </Box>
                  </>
                )}

                <Typography variant="body2" color="text.secondary">
                  {event.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventCards;
