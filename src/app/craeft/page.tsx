import { config } from "@craeft/engine/dist/config";
import { Metadata } from "next";
import React from "react";
import CraeftPage from "../../components/pages/CraeftPage";
import Footer from "../../components/structure/Footer";
import Header from "../../components/structure/Header";

export const metadata: Metadata = {
  title: `${config.name} - Game`,
};

const showDonate = process.env.BUILD_TARGET === "itchio";

export default function CraeftPageClient() {
  return (
    <>
      <Header />
      <CraeftPage />
      <Footer showDonate={!showDonate} />
    </>
  );
}
