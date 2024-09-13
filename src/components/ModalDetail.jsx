import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function ModalDetail({ open, handleClose, content }) {
  const documentos =
    content?.info?.documentos ||
    content?.info?.documentosDois ||
    content?.info?.documentoRegistro ||
    content?.info?.documentoCinco;

  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", md: 1378 },
          maxHeight: { xs: "90%", md: "80%" },
          bgcolor: "#FDF8EC",
          border: "none",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
          overflowY: "auto",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 12,
            right: 16,

            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.5)",
              backgroundColor: "#e9d269",
            },
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              component="h2"
              color="#000"
              sx={{ mb: 2, fontWeight: 700 }}
            >
              {content.text}
            </Typography>

            {/* Verifica se a info é um objeto estruturado */}
            {typeof content.info === "object" ? (
              <>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {content.info.descricao}
                </Typography>

                {/* Renderizando documentos se a lista de documentos existir */}
                {documentos && (
                  <>
                    <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                      Documentos Necessários:
                    </Typography>
                    <ul>
                      {documentos.map((doc, index) => (
                        <li
                          key={index}
                          style={{
                            listStyleType: "none", // Remove a bolinha
                            marginBottom: "8px", // Espaçamento entre os itens
                          }}
                        >
                          <Typography
                            variant="body1"
                            style={{
                              fontFamily: "Arial, sans-serif", // Controle de fontes
                              fontSize: "16px", // Tamanho da fonte
                              color: "#333", // Cor da fonte
                            }}
                          >
                            {doc}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  Preço:
                </Typography>
                <Typography variant="body1">{content.info.preco}</Typography>

                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  Observação:
                </Typography>
                <Typography variant="body1">
                  {content.info.observacao}
                </Typography>
              </>
            ) : (
              <Typography variant="body1">{content.info}</Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
