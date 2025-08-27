"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Box, Typography, IconButton, Stack, useTheme, useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTranslation } from "react-i18next";
import { getFontFamily } from "../../utlis/utlis";

const HomepageBanner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const { t, i18n } = useTranslation();
  const bannerData = t('homePageBanner', { returnObjects: true });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fontFamily, setFontFamily] = useState();

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const carouselItems = [
    {
      id: 1,
      title: bannerData[0]?.title,
      subtitle: bannerData[0]?.subheading,
      text: ["ऊँ नारायण जगन्नाथाय नम:", "ऊँ विश्वमूर्तये जगन्नाथाय नम:"],
      image: "/assets/home/slider-4.png",
      bgColor: "#FE4246",
    },
    {
      id: 2,
      title: bannerData[1]?.title,
      subtitle: bannerData[1]?.subheading,
      text: [
        "नीलांचल निवासाय नित्याय परमात्मने।",
        "बलभद्र सुभद्राभ्याम् जगन्नाथाय ते नमः।।",
      ],
      image: "/assets/home/slider-1.png",
      bgColor: "#2F4858",
    },
    {
      id: 3,
      title: bannerData[2]?.title,
      subtitle: bannerData[2]?.subheading,
      text: ["अनन्त इति किलकम् बलभद्र-प्रीति-अर्थे जपे विनियोगः। ॐ।"],
      image: "/assets/home/slider-2.png",
      bgColor: "#FF9F59",
    },
    {
      id: 4,
      title: bannerData[3]?.title,
      subtitle: bannerData[3]?.subheading,
      text: [
        "नीलांचल निवासाय नित्याय परमात्मने।",
        "बलभद्र सुभद्राभ्याम् जगन्नाथाय ते नमः।।",
      ],
      image: "/assets/home/slider-3.png",
      bgColor: "#7FC171",
    },
  ];

  useEffect(() => {
    setFontFamily(getFontFamily(i18n.language));
  },[i18n.language]);
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <Box position="relative" overflow="hidden">
      {/* Inject circular reveal keyframe */}
      <style>{`
        @keyframes circularReveal {
          from {
            clip-path: circle(0% at 70% 50%);
          }
          to {
            clip-path: circle(150% at 70% 50%);
          }
        }
        .circular-reveal {
          animation: circularReveal 1s ease-in-out;
        }
      `}</style>

      <Box ref={emblaRef} sx={{ overflow: "hidden", width: "100%" }}>
        <Box display="flex" className="embla__container" sx={{ width: "100%" }}>
          {carouselItems.map((item, index) => (
            <Box
              key={item.id}
              className={`embla__slide ${
                selectedIndex === index ? "circular-reveal" : ""
              }`}
              sx={{
                flex: "0 0 100%",
                bgcolor: item.bgColor,
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                height: { xs: "60vh", md: "90vh" },
                color: "#fff",
                clipPath:
                  selectedIndex === index ? "circle(150% at 70% 50%)" : "none",
              }}
            >
              {/* Text Content */}
              <Box p={4} textAlign="center" flex={1}>
                <Typography my={2} sx={{fontFamily:fontFamily}} variant={isMobile ? "h4":"h2"}>{item.title}</Typography>
                <Typography sx={{fontFamily:fontFamily}} my={2} variant="subtitle1">{item.subtitle}</Typography>
                {item.text.map((line, idx) => (
                  <Typography sx={{fontFamily:"hindi"}} variant={isMobile ? "h6":"h4"} key={idx}>{line}</Typography>
                ))}
              </Box>

              {/* Image */}
              <Box flex={1} p={2} textAlign="center">
                <Box
                  component="img"
                  src={item.image}
                  alt={item.caption}
                  sx={{
                    maxHeight: { xs: 200, sm:350, md: 600, lg:400 },
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Navigation Arrows */}
      <Stack
        direction="row"
        spacing={2}
        position="absolute"
        top="50%"
        left={0}
        right={0}
        justifyContent="space-between"
        px={2}
        zIndex={10}
      >
        <IconButton
          onClick={scrollPrev}
          sx={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#fff" }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={scrollNext}
          sx={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#fff" }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default HomepageBanner;
