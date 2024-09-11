import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function ModalDetail({ open, handleClose, content }) {
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
          bgcolor: "background.paper",
          border: "none",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
          overflowY: "auto",
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: 0, right: 16 }}
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

                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  Documentos Necessários:
                </Typography>
                <ul>
                  {content.info.documentos.map((doc, index) => (
                    <li key={index}>
                      <Typography variant="body1">{doc}</Typography>
                    </li>
                  ))}
                </ul>

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
