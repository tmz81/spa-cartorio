import React from "react";
import logo from "../../src/assets/balancas.png";
import { ModalDetail } from "../components/ModalDetail";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import { formatId } from "../functions/FormatID";

const ButtonLink = ({ text, onClick }) => (
  <Button
    variant="contained"
    onClick={onClick}
    sx={{
      color: "black",
      fontWeight: 700,
      fontSize: 20,
      minHeight: "90px",
      textTransform: "none",
      cursor: "default",
      m: 1,
      "&:hover": {
        backgroundColor: "#FF7F0B",
      },
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
        color: "#fff",
      },
      cursor: "pointer",
    }}
  >
    {text}
  </Button>
);

const serviceButtons = [
  {
    text: "Registro de Nascimento",
    info: {
      documentos: [
        "Pais Casados:",
        "Certidão de casamento dos pais.",
        "Documentos de identidade com foto dos pais (RG, CNH ou Passaporte).",
        "Declaração de Nascido Vivo (DNV) – fornecida pelo hospital após o parto.",
        "Pais Não Casados:",
        "Documentos de identidade com foto (RG, CNH ou Passaporte) do pai e da mãe.",
        "Certidão de casamento (se algum dos pais for casado, separado, divorciado ou viúvo).",
        "Declaração de Nascido Vivo (DNV) – fornecida pelo hospital.",
        "Apenas com Filiação Materna:",
        "Documento de identidade com foto (RG, CNH ou Passaporte) da mãe.",
        "Certidão de casamento (se a mãe não for solteira).",
        "Declaração de Nascido Vivo (DNV) – fornecida pelo hospital.",
        "Pais Menores de 16 Anos:",
        "O pai ou a mãe menor de idade deve comparecer com um dos responsáveis (pai, mãe ou curador).",
      ],
      preco: "O registro de Nascimento é gratuito à todas as pessoas.",
      observacao:
        "Este procedimento garante a formalização do nascimento e a emissão dos documentos necessários para a criança, como a certidão de nascimento, que é essencial para exercer direitos e acessar serviços públicos.",
    },
  },
  {
    text: "Registro de Óbito",
    info: {
      documentos: [
        "Documentos do Falecido:",
        "RG e CPF.",
        "Certidão de nascimento (se solteiro)",
        "certidão de casamento (se casado).",
        "Documentos do Registrante:",
        "RG e CPF.",
      ],
      preco: "O registro de Óbito é gratuito à todas as pessoas.",
      observacao:
        "O procedimento é essencial para que o sepultamento ou cremação possa acontecer de forma legal e para que os familiares possam dar andamento às questões legais relacionadas ao falecimento, como herança e encerramento de contas bancárias.",
    },
  },
  {
    text: "Registro de Emancipação",
    info: "Informações sobre o Registro de Emancipação...",
  },
  {
    text: "Correção de Registro",
    info: "Informações sobre a Correção de Registro...",
  },
  {
    text: "Casamento Civil",
    info: "Informações sobre o Casamento Civil...",
  },
  {
    text: "Certidão de 2ª Via",
    info: "Informações sobre Certidão de 2ª Via...",
  },
  {
    text: "Abertura de Firma",
    info: "Informações sobre Abertura de Firma...",
  },
  {
    text: "Averbação",
    info: "Informações sobre Averbação...",
  },
  {
    text: "Retificação",
    info: "Informações sobre Retificação...",
  },
  {
    text: "Divórcio",
    info: "Informações detalhadas sobre Divórcio...",
  },
  {
    text: "E-Notoriado",
    info: "Informações sobre E-Notoriado...",
  },
  {
    text: "Certidão de Inteiro Teor",
    info: "Informações sobre Certidão de Inteiro Teor...",
  },
  {
    text: "Inclusão de Nome Familiar",
    info: "Informações sobre Inclusão de Nome Familiar...",
  },
];

export default function ServicesSection() {
  const [open, setOpen] = React.useState(false);
  const [currentInfo, setCurrentInfo] = React.useState({});

  const handleOpen = (service) => {
    setCurrentInfo(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentInfo({});
  };

  return (
    <Box
      id={formatId("Nossos Serviços")}
      sx={{
        backgroundColor: "#F4F6F8",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ pt: "156px", display: "flex", justifyContent: "center" }}
      >
        <Grid
          sx={{
            backgroundColor: "#F4F6F8",
            color: "#000",
            paddingBottom: 8,
            borderRadius: 5,
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: 40,
                caretColor: "transparent",
                userSelect: "none",
                color: "#1976d2",
              }}
            >
              Nossos serviços
            </Typography>
            <Grid sx={{ marginTop: "30px" }}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h5" component="h3">
                    <Box
                      sx={{
                        paddingBottom: 2,
                        caretColor: "transparent",
                        userSelect: "none",
                      }}
                    >
                      <Box
                        component="img"
                        src={logo}
                        alt="logo"
                        sx={{
                          height: 74,
                          userSelect: "default",
                          cursor: "default",
                          caretColor: "transparent",
                        }}
                      />
                    </Box>
                  </Typography>
                  <Typography variant="body1" component="p">
                    <Box
                      sx={{
                        caretColor: "transparent",
                        userSelect: "none",
                        fontWeight: 400,
                        fontSize: "14px",
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "repeat(1, 1fr)",
                          sm: "repeat(2, 1fr)",
                          md: "repeat(4, 1fr)",
                        },
                        alignItems: "center",
                      }}
                    >
                      {serviceButtons.map((button, index) => (
                        <ButtonLink
                          key={index}
                          text={button.text}
                          onClick={() => handleOpen(button)}
                        />
                      ))}
                    </Box>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <ModalDetail
            open={open}
            handleClose={handleClose}
            content={currentInfo}
          />
        </Grid>
      </Container>
    </Box>
  );
}
