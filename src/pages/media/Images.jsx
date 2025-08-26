import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Dialog,
  IconButton,
  ImageList,
  ImageListItem,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

// 👇 Local images from public/asset/media/
const itemData = [
  { img: "/assets/media/222.jpg", title: "AAA" },
  { img: "/assets/media/333.jpg", title: "BBB" },
  { img: "/assets/media/444.jpg", title: "CCC" },
  { img: "/assets/media/555.jpg", title: "DDD" },
  { img: "/assets/media/666.jpg", title: "AAEEEA" },
  { img: "/assets/media/777.jpg", title: "BEEEeach" },
  { img: "/assets/media/18_18.jpg", title: "Dedwdsert" },
  { img: "/assets/media/888.jpg", title: "Ffrgrgorest" },
  { img: "/assets/media/999.jpg", title: "Ocgrgeggean" },
  { img: "/assets/media/1010.jpg", title: "Desf3wgfert" },
  { img: "/assets/media/11_11.jpg", title: "AAfwgA" },
  { img: "/assets/media/12_12.jpg", title: "Beamomch" },
  { img: "/assets/media/13_13.jpg", title: "Formkmkmest" },
  { img: "/assets/media/14_14.jpg", title: "Ocemknmkan" },
  { img: "/assets/media/15_15.jpg", title: "Demknknksert" },
  { img: "/assets/media/16_16.jpg", title: "Debubusert" },
  { img: "/assets/media/19_19.jpg", title: "dwdw" },
  { img: "/assets/media/17_17.jpg", title: "Debubsert" },
  { img: "/assets/media/20_20.jpg", title: "errw" },
  { img: "/assets/media/25_25.jpg", title: "fjrunfru" },
  { img: "/assets/media/21_21.jpg", title: "qqww" },
  { img: "/assets/media/22_22.jpg", title: "ccvbb" },
  { img: "/assets/media/23_23.jpg", title: "Desuiioert" },
  { img: "/assets/media/24_24.jpg", title: "pooii" },



];

const Images = () => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = (index ) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? itemData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === itemData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <Box
        sx={{
          padding: 3,
          backgroundColor: "#fafafa",
          borderRadius: 3,
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        <ImageList
          variant="masonry"
          cols={isMobile ? 2 : 4}
          gap={16}
        >
          {itemData.map((item, index) => (
            <ImageListItem key={item.img}>
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                loading="lazy"
                onClick={() => handleClick(index)}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  objectFit: "cover",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 3,
                  },
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      {/* Fullscreen Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
            boxShadow: "none",
            position: "relative",
          },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "#fff",
            zIndex: 2,
            backgroundColor: "rgba(0,0,0,0.5)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.7)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Left Arrow */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 16,
            transform: "translateY(-50%)",
            color: "#fff",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 2,
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.7)",
            },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 16,
            transform: "translateY(-50%)",
            color: "#fff",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 2,
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.7)",
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* Main Enlarged Image */}
        {itemData[selectedIndex] && (
          <Box
            component="img"
            src={itemData[selectedIndex].img}
            alt={itemData[selectedIndex].title}
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: "90vh",
              borderRadius: 2,
              objectFit: "contain",
            }}
          />
        )}
      </Dialog>
    </>
  );
};

export default Images;
