import React from "react";
import "../assets/styles/Global.css";
import { Navbar } from "../components/Navbar";
import { About } from "../containers/About";
import { Footer } from "../containers/Footer";
import { Home } from "../containers/Home";
import { Services } from "../containers/Services";
import { Skills } from "../containers/Skills";

export const Landing = () => {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Skills />
      <section id="about">
        <About />
      </section>
      <section id="solutions" className="solutions">
      <Services />
      </section>
      <section id="contact" className="footer">
      <Footer />
      </section>
    </div>
  );
};
