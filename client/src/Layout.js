import React from "react";
import { withRouter } from "react-router";
import './assets/scss/Main.scss'

const Body = props => {
  return (
    <>
      <div className="page-content">
        <main className="page-content__body">{props.children}</main>
      </div>
    </>
  );
};

export default withRouter(Body);