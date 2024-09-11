import React from "react";
import Box from "@mui/material/Box";

export default function MiniMapLocation() {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          paddingBottom: "56.25%",
          height: 0,
          mb: 2,
          borderRadius: 4,
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7901.512951169493!2d-34.928204522290066!3d-8.024027499999981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19bac1d53955%3A0x5407f990ab82d55a!2sCart%C3%B3rio%20de%20Registro%20Civil%20da%2011%C2%AA%20Zona%20Judici%C3%A1ria%20(ANTIGO%2013%C2%BA)!5e0!3m2!1sen!2sbr!4v1726061294124!5m2!1sen!2sbr"
          width="100%"
          height="100%"
          style={{
            border: 0,
            position: "absolute",
            top: 0,
            left: 0,
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa do Endereço"
        ></iframe>
      </Box>
    </Box>
  );
}
