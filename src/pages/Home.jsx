import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Section/Hero";
import Features from "../components/Section/Features";
import CTA from "../components/Section/CTA";
import Footer from "../components/Common/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a]">

      <Navbar />

      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />

    </div>
  );
}

export default Home;