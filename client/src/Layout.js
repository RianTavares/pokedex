import React from "react";
import { withRouter } from "react-router";
import './assets/scss/Main.scss';
import Footer from "./components/Footer";

const Body = props => {
  return (
    <>
      <main className="page-content">
          <section class="page-content__card">
            {props.children}
          </section>
        <Footer />
      </main>
    </>
  );
};

export default withRouter(Body);