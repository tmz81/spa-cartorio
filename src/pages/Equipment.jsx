import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { cardsData, swiperBreakpoints } from "../components/Content";
import { ModalEquipamentosDetalhe } from "../components/ModalDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function EquipmentSection() {
  const [open, setOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState({});

  const handleOpen = (img) => {
    setCurrentImage(img);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Container
      id="equipamentos"
      sx={{ pt: "156px", caretColor: "transparent", userSelect: "none" }}
    >
      
    </Container>
  );
}
