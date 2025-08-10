"use client";
import React from "react";
import {
  Box,
  Typography,
  Avatar,
  useTheme,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import { useTranslation } from "react-i18next";

const RathaYatraSchedule = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const timelineEvents = [
    { icon: "🛕", name: t("rYSStop.jagannathDham") },
    { icon: "🌿", name: t("rYSStop.jadawNursery") },
    { icon: "🚖", name: t("rYSStop.nanduTravels") },
    { icon: "🛣️", name: t("rYSStop.savinaChauraha") },
    { icon: "🥦", name: t("rYSStop.fruitMarket") },
    { icon: "🌾", name: t("rYSStop.grainMarket2") },
    { icon: "🌾", name: t("rYSStop.grainMarket1") },
    { icon: "🏢", name: t("rYSStop.kisanBhavan") },
    { icon: "🛻", name: t("rYSStop.retiStand") },
    { icon: "🪔", name: t("rYSStop.shringarAarti") },
    { icon: "🛕", name: t("rYSStop.bhilRanaChauraha") },
    { icon: "⛩️", name: t("rYSStop.aavariMataTemple") },
    { icon: "🚓", name: t("rYSStop.policeLine") },
    { icon: "🛣️", name: t("rYSStop.tekriChauraha") },
    { icon: "🛕", name: t("rYSStop.radajiBavji") },
    { icon: "🏡", name: t("rYSStop.nagdaBhavanRoad") },
    { icon: "🌺", name: t("rYSStop.vakalMataChauraha") },
    { icon: "🧘‍♂️", name: t("rYSStop.guruVashishthChauraha") },
    { icon: "🛋️", name: t("rYSStop.shubhamFurniture") },
    { icon: "🛕", name: t("rYSStop.hindRajTiraha") },
    { icon: "🏨", name: t("rYSStop.menariaGuestHouse") },
    { icon: "🏙️", name: t("rYSStop.hiranMagriMainRoad") },
    { icon: "💡", name: t("rYSStop.dishaElectricals") },
    { icon: "🛞", name: t("rYSStop.yogeshTyres") },
    { icon: "🏫", name: t("rYSStop.guruNanakCollegeGate") },
    { icon: "📡", name: t("rYSStop.oldSatelliteRoad") },
    { icon: "👗", name: t("rYSStop.priyaishiBoutique") },
    { icon: "🕉️", name: t("rYSStop.mangleshwarTemple") },
    { icon: "🪔", name: t("rYSStop.mahaAarti") },
    { icon: "🏛️", name: t("rYSStop.jhulelalBhavan") },
    { icon: "🏥", name: t("rYSStop.narayanSeva") },
    { icon: "🛕", name: t("rYSStop.aryaSamajTemple") },
    { icon: "🛣️", name: t("rYSStop.prabhatNagarRoad") },
    { icon: "🏫", name: t("rYSStop.ssCoaching") },
    { icon: "🏪", name: t("rYSStop.vishalStore") },
    { icon: "🏥", name: t("rYSStop.satelliteHospital") },
    { icon: "🏥", name: t("rYSStop.siddhiVinayakHospital") },
    { icon: "🥬", name: t("rYSStop.sabziMandi") },
    { icon: "🚓", name: t("rYSStop.policeStation") },
    { icon: "🌿", name: t("rYSStop.viaJadawNursery") },
    { icon: "🛕", name: t("rYSStop.backToJagannath") },
    { icon: "🪔", name: t("rYSStop.finalMahaAarti") },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 10 }}>
      <Heading title={t("rYSHeading")} colorTheme="lotus" />
      <SubHeading title={t("rYSSubheading")} gradientTheme="saffron" />
      <SubHeading title={t("rYSStartEnd")} gradientTheme="grey" />

      <Box position="relative">
        {/* Timeline Line */}
        <Box
          sx={{
            position: "absolute",
            left: isMobile ? 30 : "50%",
            top: 0,
            bottom: 0,
            width: "4px",
            background: "linear-gradient(to bottom, #E91E63, #FF9800)",
            transform: isMobile ? "none" : "translateX(-50%)",
            zIndex: 0,
            borderRadius: 5,
          }}
        />

        {/* Timeline Events */}
        <Box>
          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <Box
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: { xs: 100, sm: 160 },
                  position: "relative",
                  flexDirection: isMobile ? "row" : "row",
                }}
              >
                {/* Mobile View */}
                {isMobile ? (
                  <>
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: "white",
                          color: "#E91E63",
                          width: 50,
                          height: 50,
                          fontSize: 24,
                          border: "2px solid #E91E63",
                          boxShadow: "0 0 12px rgba(233, 30, 99, 0.3)",
                          ml: 1,
                        }}
                      >
                        {event.icon}
                      </Avatar>
                    </motion.div>
                    <Box ml={2} flex={1} mb={2}>
                      <EventCard name={event.name} />
                    </Box>
                  </>
                ) : (
                  <>
                    {/* Desktop Left Side */}
                    {isLeft ? (
                      <Box
                        width="50%"
                        display="flex"
                        justifyContent="flex-end"
                        pr={3}
                      >
                        <EventCard name={event.name} align="right" />
                      </Box>
                    ) : (
                      <Box width="50%" />
                    )}

                    {/* Avatar */}
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: "white",
                          color: "#E91E63",
                          width: 60,
                          height: 60,
                          fontSize: 28,
                          border: "2px solid #E91E63",
                          boxShadow: "0 0 20px rgba(233, 30, 99, 0.4)",
                          mx: 2,
                        }}
                      >
                        {event.icon}
                      </Avatar>
                    </motion.div>

                    {/* Desktop Right Side */}
                    {!isLeft ? (
                      <Box
                        width="50%"
                        display="flex"
                        justifyContent="flex-start"
                        pl={3}
                      >
                        <EventCard name={event.name} align="left" />
                      </Box>
                    ) : (
                      <Box width="50%" />
                    )}
                  </>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

const EventCard = ({ name, align = "left" }) => (
  <Paper
    elevation={0}
    sx={{
      px: 4,
      py: 3,
      borderRadius: 4,
      background: "rgba(255,255,255,0.75)",
      backdropFilter: "blur(12px)",
      maxWidth: "90%",
      border: "1px solid rgba(0,0,0,0.1)",
      textAlign: align,
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-4px) scale(1.02)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      },
    }}
  >
    <Typography variant="subtitle1" fontWeight={600}>
      {name}
    </Typography>
  </Paper>
);

export default RathaYatraSchedule;
