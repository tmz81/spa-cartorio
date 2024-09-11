import React from "react";
import NavBar from "./components/NavBar";
import AboutSection from "./pages/About";
import ServicesSection from "./pages/Services";
import QuestionSection from "./pages/Questions";
import FooterSection from "./pages/Footer";
import ScrollButton from "./components/ScrollButton";

export default function App() {
  return (
    <>
      <NavBar />
      <AboutSection />
      <ServicesSection />
      <QuestionSection />
      <ScrollButton />
      <FooterSection />
    </>
  );
}
