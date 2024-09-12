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
            <Typography variant="body1" gutterBottom mb={2}>
              O Cartório de Casa Amarela, localizado no bairro de Casa Amarela,
              no Recife-PE, é uma instituição com mais de 80 anos de tradição no
              serviço de registros públicos. Fundado em julho de 1942, o
              cartório foi estabelecido sob a gestão do Dr. Marulo da Costa
              Lima, nomeado pelo então governador de Pernambuco, Dr. Agamenon
              Magalhães.
            </Typography>
            <Typography variant="body1" gutterBottom mb={2}>
              Desde sua criação, o Cartório de Casa Amarela tem desempenhado um
              papel crucial no registro de atos e contratos civis, atendendo a
              população da zona norte do Recife e contribuindo para a
              organização e segurança jurídica dos cidadãos. O primeiro livro de
              registros, iniciado logo após a sua fundação, marca o início de
              uma longa trajetória de serviços prestados com excelência.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Os registros anteriores a julho de 1942 foram transferidos para o
              Cartório do 12º Distrito, no Poço da Panela, sob a
              responsabilidade do Dr. Jacinto Ferreira Lima, preservando a
              integridade e continuidade dos dados históricos daquela região.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Atualmente, o Cartório de Casa Amarela continua a modernizar seus
              serviços, mantendo a confiança da comunidade e oferecendo um
              atendimento ágil e eficiente. A instituição preza pela inovação,
              sempre respeitando as tradições que marcaram sua história.
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
