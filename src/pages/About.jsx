import { Container, Box, Typography, Grid, Card } from "@mui/material";
import { imgBio } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { formatId } from "../functions/FormatID";

export default function AboutSection() {
  return (
    <Container
      id={formatId("Sobre o Cartório")}
      maxWidth="lg"
      sx={{ mt: "150px", pb: "150px", cursor: "default" }}
    >
      <Grid container spacing={2} alignItems="center" sx={{ color: "#000" }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 600,
              fontSize: "38px",
              userSelect: "none",
              caretColor: "transparent",
              mb: 2,
            }}
          >
            <span style={{ color: "#1976d2" }}>
              Sobre o Cartório 13º Distrito
            </span>
          </Typography>
          <Box>
            <Typography variant="body1" gutterBottom>
              O Cartório de Casa Amarela-PE foi fundado em Julho de 1942 e
              nomeado como Dr. Marulo da Costa Lima, nomeação realizada pelo Dr.
              Agamenon Magalhães. Iniciado o arquivo do Livro nº 1 do Cartório
              de Casa Amarela. Todo arquivo anterior a julho de 1942 ficou sobre
              responsabilidade do Cartório 12º Distrito Poço da Panela, no qual
              foi nomeado Dr. Jacinto Ferreira Lima.
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "28px",
                userSelect: "none",
                caretColor: "transparent",
                mt: 4,
                mb: 2,
              }}
            >
              <span style={{ color: "#1976d2" }}>
                Informações do cartório de Casa Amarela
              </span>
            </Typography>
            <Typography variant="body2" gutterBottom>
              Titular: MARIA DA CONCEIÇÃO DA COSTA LIMA
            </Typography>
            <br />

            <Typography variant="body2" gutterBottom>
              1º Oficial Substituto: SANDRA LAURENTINO MACIEL
            </Typography>
            <Typography variant="body2" gutterBottom>
              2º Oficial Substituto: RODRIGO GONÇALVES DOS SANTOS
            </Typography>
            <br />
            <Typography variant="body1">Escreventes autorizados:</Typography>
            <Typography variant="body2">GABRIEL BREDA DE LUCENA</Typography>
            <Typography variant="body2">
              LEILYANE LARISSA SILVA DOS SANTOS DE SOUZA
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                width: "100%",
                display: { xs: "none", sm: "flex" },
                pointerEvents: "none",
              }}
            >
              {imgBio.map((img, index) => (
                <SwiperSlide key={index}>
                  <Box
                    component="img"
                    sx={{
                      height: "100%",
                      display: "block",
                      maxWidth: "100%",
                      width: "auto",
                      mx: "auto",
                      borderRadius: 4,
                    }}
                    src={img.src}
                    alt={img.alt}
                  />
                </SwiperSlide>
              ))}
            </Card>
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
}
