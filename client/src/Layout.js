import React from "react";
import { withRouter } from "react-router";
import './assets/scss/Main.scss';
import Footer from "./components/Footer";

const Body = props => {
  return (
    <>
      <div className="page-content">
        <main className="page-content__body">{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default withRouter(Body);