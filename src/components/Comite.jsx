import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Comite({ cardsComite, swiperBreakpointsComite }) {
  return (
    <Grid container justifyContent="center">
      <Grid container alignItems="center" justifyContent="center">
        <Swiper
          style={{ marginBottom: "20px", width: "900px" }}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={swiperBreakpointsComite}
          onSlideChange={() => {}}
          onSwiper={() => {}}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {cardsComite.map((card, index) => (
            <Grid item key={card.alt} xs={12} sm={4} md={6}>
              <SwiperSlide key={index} style={{ paddingBottom: "20px" }}>
                <Box
                  sx={{
                    backgroundColor: "#F4F6F8",
                    color: "#000",
                    borderRadius: "16px",
                    padding: "8px",
                    textAlign: "center",
                    boxShadow: 3,
                    caretColor: "transparent",
                    userSelect: "none",
                    display: "flex",
                    height: "100%",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      display: "block",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      borderRadius: "16px",
                      width: "200px",
                      mx: "auto",
                      marginBottom: "10px",
                    }}
                    src={card.src}
                    alt={card.alt}
                  />
                  <Box
                    sx={{
                      textAlign: "center",
                      color: "#3B414A",
                      fontWeight: 700,
                      borderTop: "1px solid #e0e0e0",
                      fontFamily: "Montserrat",
                      paddingTop: "14px",
                    }}
                  >
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      {card.name}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      {card.description}
                    </Typography>
                    <Button
                      href={card.links}
                      variant="contained"
                      sx={{
                        mt: 2,
                        mb: 2,
                        width: { sm: "100%", md: "35%"},
                        color: "black",
                        backgroundColor: "#FFB74D",
                        borderRadius: 50,
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#FF7F0B",
                        },
                      }}
                    >
                      {card.linkDescription}
                    </Button>
                  </Box>
                </Box>
              </SwiperSlide>
            </Grid>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
}
