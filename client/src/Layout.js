import React from "react";
import { withRouter } from "react-router";
import './assets/scss/Main.scss';
import Footer from "./components/Footer";

const Body = props => {
  return (
    <>
      <a className="ribbon" 
      href="https://github.com/RianTavares/pokedex" 
      target="_blank" 
      rel="noopener noreferrer">
        Fork me on GitHub
      </a>
      <main className="page-content">
          <section className="page-content__card">
            {props.children}
          </section>
      </main>
      <Footer />
    </>
  );
};

export default withRouter(Body);