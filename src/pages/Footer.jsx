import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";
import { LocationOn, Email, WhatsApp, Phone } from "@mui/icons-material";
import MiniMapLocation from "../components/MiniMapLocation";
import logo from "../../src/assets/logo.png";
import { formatId } from "../functions/FormatID";

export default function FooterSection() {
  return (
    <Box
      id={formatId("Contato")}
      sx={{ bgcolor: "#1976d2", color: "#1E2125", py: 8 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              <Box
                component="a"
                href="#"
                sx={{
                  display: "flex",
                  mr: 2,
                  pb: 1,
                  fontFamily: "Montserrat",
                  caretColor: "transparent",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  cursor: "pointer",
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="logo"
                  sx={{
                    height: 70,
                    userSelect: "default",
                    cursor: "pointer",
                    caretColor: "transparent",
                  }}
                />
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Cartório 13º Distrito Judiciário
                </Typography>
              </Box>
            </Typography>
            <Typography variant="body1" gutterBottom color="#fff">
              Horário de Atendimento:
            </Typography>
            <Typography variant="body1" gutterBottom color="#fff">
              Segunda a sexta-feira de 08:00h às 16:00h
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ userSelect: "none" }}
            >
              <strong>Titular</strong>: Maria da Conceição da Costa Lima
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ userSelect: "none" }}
            >
              <strong>1º Oficial Substituto</strong>: Sandra Laurentino Maciel
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ userSelect: "none" }}
            >
              <strong>2º Oficial Substituto</strong>: Rodrigo Gonçalves dos
              Santos
            </Typography>
            <Typography variant="body1" sx={{ userSelect: "none" }}>
              <strong>Escreventes autorizados</strong>:
            </Typography>
            <Typography variant="body2" sx={{ userSelect: "none" }}>
              Gabriel Breda de Lucena
            </Typography>
            <Typography variant="body2" sx={{ userSelect: "none" }}>
              Leilyane Larissa Silva dos Santos de Souza
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Contato: {""}
            </Typography>
            <Box
              component="a"
              href="mailto:cartorio13_casaamarela@hotmail.com"
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                pt: 4,
                textDecoration: "none",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Email sx={{ mr: 1, color: "#000" }} />
              <Typography color="#fff">
                cartorio13_casaamarela@hotmail.com
              </Typography>
            </Box>
            <Box
              component="a"
              href="https://api.whatsapp.com/send?phone=5581998830065"
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                mt: 2,
                textDecoration: "none",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <WhatsApp sx={{ mr: 1, color: "#000" }} />
              <Typography color="#fff">(81) 9-9883-0065</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1, mt: 2 }}>
              <Phone sx={{ mr: 1 }} />
              <Typography color="#fff">(81) 4101-2030</Typography>
            </Box>
            <Box
              component="a"
              href="https://maps.app.goo.gl/ZVCtjbxQSLmpE8xw9"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                mb: 1,
                mt: 2,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <LocationOn sx={{ mr: 1, color: "#000" }} />
              <Typography color="#fff">
                R. Sen. Soares Meireles, 92 - Casa AmarelaRecife - PE,
                52070-360.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Localização: {""}
            </Typography>
            <Box
              sx={{
                pt: 3,

                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <MiniMapLocation />
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
            pt: 3,
            borderTop: "1px solid black",
          }}
        >
          <Typography color="#fff" variant="body2">
            © 2024. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
