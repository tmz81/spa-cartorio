import { Container, Box, Typography, Grid, Card } from "@mui/material";
import { imgBio } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { formatId } from "../functions/FormatID";
import "swiper/css";

export default function AboutSection() {
  return (
    <Container
      id={formatId("Sobre o Cartório")}
      maxWidth="lg"
      sx={{ mt: "200px", pb: "150px", cursor: "default", backgroundColor: "#FDF8EC" }}
    >
      <Grid container spacing={2} alignItems="center" sx={{ color: "#000" }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 600,
              fontSize: "38px",
              fontFamily: "inter",
              userSelect: "none",
              caretColor: "transparent",
              mb: 2,
            }}
          >
            <span>
              Sobre o Cartório{" "}
              <span style={{ color: "#FFCC00" }}>13º Distrito Judiciário</span>.
            </span>
          </Typography>
          <Box>
            <Typography
              variant="body1"
              gutterBottom
              mb={2}
              sx={{
                fontFamily: "inter",
              }}
            >
              O Cartório de Casa Amarela, localizado no bairro de Casa Amarela,
              no Recife-PE, é uma instituição com mais de 80 anos de tradição no
              serviço de registros públicos. Fundado em julho de 1942, o
              cartório foi estabelecido sob a gestão do Dr. Marulo da Costa
              Lima, nomeado pelo então governador de Pernambuco, Dr. Agamenon
              Magalhães.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              mb={2}
              sx={{
                fontFamily: "inter",
              }}
            >
              Desde sua criação, o Cartório de Casa Amarela tem desempenhado um
              papel crucial no registro de atos e contratos civis, atendendo a
              população da zona norte do Recife e contribuindo para a
              organização e segurança jurídica dos cidadãos. O primeiro livro de
              registros, iniciado logo após a sua fundação, marca o início de
              uma longa trajetória de serviços prestados com excelência.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontFamily: "inter",
              }}
            >
              Os registros anteriores a julho de 1942 foram transferidos para o
              Cartório do 12º Distrito, no Poço da Panela, sob a
              responsabilidade do Dr. Jacinto Ferreira Lima, preservando a
              integridade e continuidade dos dados históricos daquela região.
            </Typography>
            {/* <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontFamily: "inter",
              }}
            >
              Atualmente, o Cartório de Casa Amarela continua a modernizar seus
              serviços, mantendo a confiança da comunidade e oferecendo um
              atendimento ágil e eficiente. A instituição preza pela inovação,
              sempre respeitando as tradições que marcaram sua história.
            </Typography> */}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              height: "200%",
              display: "block",
              maxWidth: "99%",
              width: "auto",
              mx: "auto",
              borderRadius: 4,
              pt: 12,
            }}
          />
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
