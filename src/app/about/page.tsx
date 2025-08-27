import { config } from "@craeft/engine/dist/config";
import { Metadata } from "next";
import React from "react";
import AboutPage from "../../components/pages/AboutPage";
import Footer from "../../components/structure/Footer";
import Header from "../../components/structure/Header";

export const metadata: Metadata = {
  title: `${config.name} - About`,
};

export default function AboutPageClient() {
  return (
    <>
      <Header />
      <AboutPage />
      <Footer />
    </>
  );
}
