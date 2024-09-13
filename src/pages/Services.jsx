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
      backgroundColor: "#F6E5BA",
      fontWeight: 700,
      fontSize: 20,
      minHeight: "90px",
      textTransform: "none",
      cursor: "pointer",
      m: 1,
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
        backgroundColor: "#e9d269",
      },
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
        "Certidão de nascimento do recém-nascido (emitida pela maternidade ou hospital).",
        "Documentos de identidade com foto dos pais (RG, CNH ou Passaporte).",
        "Comprovante de residência dos pais.",
        "Certidão de casamento dos pais, se aplicável.",
      ],
      preco: "O registro de nascimento não tem custo.",
      observacao:
        "O registro de nascimento é um ato fundamental para garantir a cidadania e os direitos legais da criança. Deve ser realizado o quanto antes após o nascimento, de preferência dentro do prazo legal estabelecido para evitar complicações futuras.",
    },
  },
  {
    text: "Registro de Óbito",
    info: {
      documentos: [
        "Certidão de óbito fornecida pelo hospital ou instituição de saúde.",
        "Documentos de identidade com foto do falecido (se disponível).",
        "Documentos de identidade com foto dos familiares responsáveis pelo registro.",
        "Comprovante de residência do falecido.",
        "Declaração de óbito, se necessário, fornecida pelo médico ou autoridade competente.",
      ],
      preco: "O registro de óbito não tem custo.",
      observacao:
        "O registro de óbito é essencial para a formalização do falecimento e para permitir a realização de procedimentos posteriores, como a liberação de bens e a realização de inventário. Deve ser feito o mais breve possível após o falecimento.",
    },
  },
  {
    text: "Registro de Emancipação",
    info: {
      documentos: [
        "Certidão de nascimento do jovem que será emancipado.",
        "Documentos de identidade com foto do jovem (RG, CNH ou Passaporte).",
        "Comprovante de residência.",
        "Documentos de identidade com foto dos pais ou responsáveis legais.",
        "Declaração de emancipação assinada pelos pais ou responsáveis, se for o caso, ou decisão judicial que concede a emancipação.",
      ],
      preco:
        "A taxa para o registro de emancipação R$ 171,20. E fica pronto em até 5 dias úteis.",
      observacao:
        "A emancipação é um processo legal que confere ao jovem maiores de 16 anos a capacidade para praticar atos da vida civil antes de atingir a maioridade. É importante que todos os documentos estejam completos e que o processo esteja em conformidade com as leis vigentes.",
    },
  },
  {
    text: "Correção de Registro",
    info: {
      documentos: [
        "Certidão de nascimento ou casamento original a ser corrigido.",
        "Documentos de identidade com foto (RG, CNH ou Passaporte).",
        "Comprovante de residência.",
        "Justificativa ou declaração que explique a necessidade da correção.",
      ],
      preco:
        "O valor para correção de registro R$ 160,04. E fica pronto em até 5 dias úteis.",
      observacao:
        "A correção de registro é importante para garantir que os documentos reflitam corretamente as informações pessoais e legais. Pode ser necessário em casos de erro material ou de dados incorretos nos registros civis.",
    },
  },
  {
    text: "Casamento Civil",
    info: {
      documentos: [
        "Certidão de nascimento dos noivos.",
        "Documentos de identidade com foto (RG, CNH ou Passaporte).",
        "Comprovante de residência.",
        "Se um dos noivos for divorciado, apresentar a certidão de casamento com averbação do divórcio.",
        "Se um dos noivos for viúvo, apresentar a certidão de óbito do cônjuge falecido.",
      ],
      preco:
        "O registro de Casamento Civil custa em média R$ 278,00. O prazo para conclusão é de até 30 dias úteis após a entrada do processo.",
      observacao:
        "O casamento civil formaliza a união entre duas pessoas e estabelece direitos e deveres legais. É importante levar todos os documentos necessários e estar ciente dos requisitos específicos do cartório.",
    },
  },
  {
    text: "Certidão de 2ª Via",
    info: {
      documentos: [
        "Documentos de identidade com foto (RG, CNH ou Passaporte).",
        "Informações sobre o registro original (data e local do registro).",
        "Comprovante de pagamento da taxa, se aplicável.",
      ],
      preco: "A taxa para emissão de certidão de 2ª via e de R$ 62,08.",
      observacao:
        "A certidão de 2ª via é necessária quando o documento original é perdido, extraviado ou danificado. É importante solicitar a 2ª via o quanto antes para evitar transtornos em situações que exigem o documento original.",
    },
  },
  {
    text: "Abertura de Firma",
    info: {
      documentos: [
        "Documento de identidade com foto (RG, CNH ou Passaporte).",
        "CPF.",
        "Comprovante de residência.",
        "Declaração de atividades e endereço do estabelecimento, se aplicável.",
      ],
      preco: "A abertura de firma tem um custo aproximado de R$ 3,63. ",
      observacao:
        "A abertura de firma é necessária para autenticação de assinaturas em documentos e contratos. Esse procedimento é importante para garantir a validade e a legalidade de documentos assinados.",
    },
  },
  {
    text: "Averbação",
    info: {
      documentos: [
        "Certidão de nascimento ou casamento original para averbação.",
        "Documentos de identidade com foto (RG, CNH ou Passaporte).",
        "Comprovante de residência.",
        "Documentos que comprovem a necessidade de averbação (ex.: declaração de mudança de estado civil, documentos de mudança de nome, etc.).",
      ],
      preco:
        "O custo da averbação é de R$ 160,04. E fica pronto em até 5 dias úteis.",
      observacao:
        "A averbação é o procedimento para registrar alterações ou adições em registros civis já existentes, como mudança de nome, estado civil ou inclusão de informações adicionais.",
    },
  },
  {
    text: "Retificação",
    info: {
      documentos: [
        "Certidão de nascimento, casamento ou óbito a ser retificado.",
        "Documentos de identidade com foto (RG, CNH ou Passaporte).",
        "Comprovante de residência.",
        "Documentos que comprovem a necessidade de retificação (ex.: erros de grafia, dados incorretos).",
      ],
      preco:
        "O valor da retificação é de R$ 160,04. E fica pronto em até 5 dias úteis.",
      observacao:
        "A retificação é utilizada para corrigir erros materiais ou de dados incorretos em registros civis, como nome, data de nascimento ou informações de parentesco.",
    },
  },
  {
    text: "Divórcio",
    info: {
      documentos: [
        "Certidão de casamento.",
        "Documentos de identidade com foto (RG, CNH ou Passaporte) dos cônjuges.",
        "Comprovante de residência.",
        "Se houver filhos menores, apresentação de documento que comprove a guarda ou acordo de custódia.",
        "Certidão de nascimento dos filhos, se houver.",
      ],
      preco:
        "O custo do processo de divórcio varia conforme o tipo (consensual ou litigioso), geralmente entre R$ 160,04 até R$ 3.000,00. E fica pronto em até 5 dias úteis.",
      observacao:
        "O divórcio é o procedimento legal para dissolver um casamento. Pode ser consensual, quando há acordo entre as partes, ou litigioso, quando há disputas. É essencial para regularizar a situação legal dos cônjuges e dos filhos, se houver.",
    },
  },
  {
    text: "E-Notoriado",
    info: {
      documentos: [
        "Documentos de identidade com foto (RG, CNH ou Passaporte).",
        "CPF.",
        "Documentos do ato a ser notariado (contrato, declaração, etc.).",
        "Comprovante de pagamento, se aplicável.",
      ],
      preco:
        "O custo do e-notariado varia conforme o tipo de ato e o cartório, geralmente em torno de R$ 80,00 a R$ 200,00.",
      observacao:
        "O e-notariado é a digitalização e autenticação de documentos em meio eletrônico. Facilita o processo de reconhecimento e autenticação de documentos e atos notariais.",
    },
  },
  {
    text: "Certidão de Inteiro Teor",
    info: {
      documentos: [
        "Documentos de identidade com foto (RG, CNH ou Passaporte).",
        "Informações sobre o registro original (data e local do registro).",
        "Comprovante de pagamento da taxa, se aplicável.",
      ],
      preco:
        "A taxa para emissão da certidão de inteiro teor é de R$ 62,08. E fica pronto em até 15 dias úteis.",
      observacao:
        "A certidão de inteiro teor é uma cópia completa do registro, incluindo todas as alterações e averbações. É utilizada para fins legais que exigem a íntegra do registro original.",
    },
  },
  {
    text: "Inclusão de Nome Familiar",
    info: {
      documentos: [
        "Certidão de nascimento ou casamento onde será incluído o nome.",
        "Documentos de identidade com foto (RG, CNH ou Passaporte).",
        "Comprovante de residência.",
        "Documentos que comprovem a necessidade de inclusão do nome (ex.: decisão judicial, alteração de nome por motivo de casamento ou divórcio).",
      ],
      preco:
        "O custo para inclusão de nome familiar é de R$ 160,04. E fica pronto em até 5 dias úteis.",
      observacao:
        "A inclusão de nome familiar refere-se à adição de nomes em registros civis, como inclusão de sobrenome após casamento ou mudança de nome após divórcio. É importante para a atualização de registros pessoais.",
    },
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
        backgroundColor: "#B6A57B",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ pt: "156px", display: "flex", justifyContent: "center" }}
      >
        <Grid
          sx={{
            // backgroundColor: "#F4F6F8",
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
                // color: "#FFCC00"
              }}
            >
              Conheça os nossos serviços
            </Typography>
            <Grid sx={{ marginTop: "40px" }}>
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
                        pb: "40px",
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
