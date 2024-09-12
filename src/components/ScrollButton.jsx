import React from "react";
import { Box, IconButton } from "@mui/material";
import logo from "../assets/whatsapp.png";

export default function ScrollButton() {
  const handleClick = () => {
    const url = import.meta.env.VITE_WHATSAPP_URL;
    if (url) {
      window.location.href = url;
    } else {
      console.error(
        "A URL do WhatsApp não está definida na variável de ambiente."
      );
    }
  };

  return (
    <IconButton
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        color: "white",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.15)",
          color: "#fff",
        },
        cursor: "pointer",
        width: { xs: 64, sm: 84, md: 94 },
        height: { xs: 64, sm: 84, md: 94 },
      }}
      onClick={handleClick}
    >
      <Box
        component="img"
        src={logo}
        alt="logo"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </IconButton>
  );
}
