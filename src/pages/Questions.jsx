import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Comite from "../components/Comite";
import {
  cardsComite,
  cardsComiteExterno,
  swiperBreakpointsComite,
} from "../components/Content";
import { formatId } from "../functions/FormatID";

export default function QuestionSection() {
  return (
    <Container
      id={formatId("Dúvidas Frequentes")}
      sx={{
        pt: "78px",
        borderTop: "1px solid #EAEDF1",
        caretColor: "transparent",
        userSelect: "none",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          color: "#1976d2",
          fontWeight: 700,
          fontSize: "40px",
          paddingBottom: "78px",
          textAlign: "center",
        }}
      >
        Dúvidas Frequentes
      </Typography>
      <Box sx={{ margin: "0 auto", backgroundColor: "#fff", mb: 8 }}>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{ color: "#1976d2", fontWeight: 700, fontSize: 28 }}
            >
              Horário de funcionamento
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Segunda-feira a sexta-feira, com atendimento aos usuários das
              08:00 às 16:00 horas.
            </Typography>
          </AccordionDetails>
          <Accordion
            defaultExpanded
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography
                sx={{ color: "#1976d2", fontWeight: 700, fontSize: 28 }}
              >
                O que é necessário para abrir uma firma em cartório?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                O preenchimento do cartão de firma deverá ser feito na presença
                do tabelião ou de funcionário autorizado, que deverá conferí-lo
                e visá-lo. Na abertura da firma, o tabelião está autorizado a
                extrair, às expensas do interessado, cópia da cédula de
                identidade e do cartão de identificação de contribuinte (CPF).
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography
              sx={{ color: "#1976d2", fontWeight: 700, fontSize: 28 }}
            >
              O que é necessário para o reconhecimento de firmas?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para evitar falsidade e para segurança dos negócios a lei exige,
              na consonância de velhos costumes, o depósito, nos tabelionatos,
              de firmas (fichas, com dados e assinatura), para o respectivo
              reconhecimento.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography
              sx={{ color: "#1976d2", fontWeight: 700, fontSize: 28 }}
            >
              Posso reconhecer uma firma aposta em qualquer documento?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Existem restrições. Por exemplo: se o suporte do documento for um
              papel de fax não será permitido reconhecer pois este papel,
              decorrido um tempo, tem seu conteúdo apagado, sumindo o que foi
              escrito. É vedado também o reconhecimento de firmas em documento
              incompletos, sem data, ou que contenham, no contexto, espaços em
              branco.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography
              sx={{ color: "#1976d2", fontWeight: 700, fontSize: 28 }}
            >
              Devo comparecer ao cartório sempre que for reconhecer a minha
              assinatura, aposta em documento?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Não, nem sempre. Existem duas forma de reconhecimento de firma:
              por semelhança, no qual o tabelião compara a assinatura do
              documento com o cartão que possui arquivado no cartório, e por
              autenticidade, quando o interessado deve assinar o livro de
              registro. No primeiro caso, note, não se exige a presença da
              pessoa que assinou. No segundo sim. Atualmente tem sido exigido
              pelos Departamentos de Trânsito, que os reconhecimentos de firmas
              em instrumentos de transferência de veículos, sejam como
              autênticos.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography
              sx={{ color: "#1976d2", fontWeight: 700, fontSize: 28 }}
            >
              O que é autenticação?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A autenticação é uma afirmação dada pelo Tabelião, através da Fé
              Pública que lhe foi atribuída pelo Estado, de que, para qualquer
              efeito legal, aquele documento é cópia fiel do original a ele
              apresentado. Entretanto, os Tabeliães, ao autenticarem cópias
              reprográficas, não deverão se restringir à mera conferência dos
              textos ou do aspecto morfológico da escrita, mas, verificar, com
              cautela, se o documento copiado contém rasuras ou quaisquer outros
              sinais suspeitos indicativos de possíveis fraudes.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography
              sx={{ color: "#1976d2", fontWeight: 700, fontSize: 28 }}
            >
              O que é necessário para registrar uma criança?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              – “Declaração de Nascido Vivo”, fornecida aos pais do
              recém-nascido pelas maternidades e pelos hospitais; – Cédula de
              identidade da(s) pessoa(s) que comparecer(em) ao cartório. Além da
              cédula de identidade expedida pela Secretaria de Segurança
              Pública, serão aceitas CNH, cédulas de identidade emitidas por
              órgão controlador do exercício profissional ou passaporte, no caso
              de estrangeiros não domiciliados no país; – Caso os pais sejam
              casados entre si, apresentar certidão de casamento – No caso de
              partos acontecidos em domicílios, além dos documentos pessoais
              supra referidos, deverão comparecer ao ato de registro, duas
              testemunhas maiores, e que tenham conhecimento do parto;
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{ color: "#1976d2", fontWeight: 700, fontSize: 28 }}
            >
              Em qual cartório deve ser feito o registro de nascimento?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Todo nascimento que ocorrer no território nacional deverá ser dado
              a registro, no lugar em que tiver ocorrido o parto ou no lugar de
              residência dos pais, dentro do prazo de 15 dias. Caso a mãe
              compareça ao cartório para declarar o nascimento, o prazo é
              estendido em mais 45 dias.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography
              sx={{ color: "#1976d2", fontWeight: 700, fontSize: 28 }}
            >
              É possível alterar o regime de bens antes da celebração?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sim, para tanto basta que os noivos compareçam ao cartório em até
              dois dias antes da cerimônia, manifestando essa vontade. Lembramos
              que o único regime que não necessita de escritura de pacto
              antenupcial é o da comunhão parcial de bens, se a alteração for
              para qualquer outro regime deverão apresentar a referida escritura
              antes de solicitar a alteração.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography
              sx={{ color: "#1976d2", fontWeight: 700, fontSize: 28 }}
            >
              Quais os documentos necessários para trasladar o registro de
              nascimento para o Brasil?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Se o registro não lavrado em consulado brasileiro – Requerimento
              ao Oficial Delegado do Registro Civil; – Certidão do assento
              estrangeiro, legalizada pela autoridade consular brasileira a
              traduzida por tradutor juramentado; – Certidão de nascimento do
              genitor brasileiro; – Prova de domicílio do registrando (conta de
              água, luz ou telefone; declaração firmada por duas testemunhas ou
              atestado policial); Lavrado em consulado brasileiro – Requerimento
              ao Oficial Delegado do Registro Civil; – Certidão expedida pela
              autoridade consular competente; – Prova de domicílio do
              registrando (conta de água, luz ou telefone; declaração firmada
              pôr duas testemunhas ou atestado policial);
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
