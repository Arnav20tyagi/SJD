import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import { useTranslation } from "react-i18next";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import GenericButton from "../../components/GenericButton";

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

const HomeEvents = () => {
    const theme = useTheme();
   const today = new Date();
    const {t, i18n} = useTranslation();
  const lang = i18n.language || 'en';

    const eventData = {
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
  
    const events = sortedYearlyEvents;

  return (
    <Box sx={{ py: 10 }}>
      {/* Heading and Subtitle */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        textAlign="center"
        mb={6}
      >
        <Heading title={t('homeEventsH')} colorTheme="lotus" />
        <SubHeading title={t('homeEventsSh')} gradientTheme="saffron" />
      </Box>
      
      <Grid container spacing={4}>
        {events.slice(0, 3).map((event, index) => (
          <Grid
            item
            key={event.id}
            size={{ xs: 12, sm: 6, md: 4 }}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
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
                <Typography variant="body2" color="text.secondary">
                  {event.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Box textAlign={"center"} width="100%" mt={2}>
          <GenericButton text={t('buttons.viewAllEvents')} to="/events" buttonColor="#fff" />
        </Box>
      </Grid>
    </Box>
  );
};

export default HomeEvents;
