import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Dialog } from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Beach",
  },
  {
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    title: "Forest",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Ocean",
  },
  {
    img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    title: "Desert",
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Snow",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Beach",
  },
  {
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    title: "Forest",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Ocean",
  },
  {
    img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    title: "Desert",
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Snow",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Beach",
  },
  {
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    title: "Forest",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Ocean",
  },
  {
    img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    title: "Desert",
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Snow",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Beach",
  },
  {
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    title: "Forest",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Ocean",
  },
  {
    img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    title: "Desert",
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Snow",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Beach",
  },
  {
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    title: "Forest",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Ocean",
  },
  {
    img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    title: "Desert",
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Snow",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Beach",
  },
  {
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    title: "Forest",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Ocean",
  },
  {
    img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    title: "Desert",
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Snow",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Beach",
  },
  {
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    title: "Forest",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Ocean",
  },
  {
    img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    title: "Desert",
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Snow",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Beach",
  },
  {
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    title: "Forest",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Ocean",
  },
  {
    img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    title: "Desert",
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Snow",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Beach",
  },
  {
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    title: "Forest",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Ocean",
  },
  {
    img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    title: "Desert",
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Snow",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Beach",
  },
  {
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    title: "Forest",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Ocean",
  },
  {
    img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    title: "Desert",
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Snow",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Beach",
  },
  {
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    title: "Forest",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Ocean",
  },
];

const Images = () => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleClick = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };

  return (
    <>
      <Box sx={{ padding: 2, backgroundColor: "#f6f6f6", borderRadius: 2 }}>
        <ImageList sx={{ width: "100%", margin: "0 auto" }} cols={4}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderRadius: 8,
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  marginBottom: 8,
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onClick={() => handleClick(item.img)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      {/* Fullscreen Image Viewer */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        PaperProps={{
          sx: { backgroundColor: "transparent", boxShadow: "none" },
        }}
      >
        {selectedImg && (
          <img
            src={selectedImg}
            alt="Enlarged"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 8,
            }}
          />
        )}
      </Dialog>
    </>
  );
};

export default Images;
