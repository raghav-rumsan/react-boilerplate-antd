import React, { useEffect, useState } from "react";
import { api } from "../api";
import { Router } from "@reach/router";
import { createStructuredSelector } from "reselect";
import { getClient, getUser } from "./actions";
import { connect } from "react-redux";
import { PublicRoute, PageNotFound, GuestRoute } from "./components";
import { Login } from "./guest";
import LayoutContainer from "../components/layout/LayoutContainer";
import { selectToken } from "./selectors";
// import "antd/dist/antd.dark.css";
// import "antd/dist/antd.css";

const AppContainer = ({ token, getUser, theme }) => {
  // useEffect(() => {
  //   getClient();
  // }, []);
  // const [theme] = useState(null);

  useEffect(() => {
    api.defaults.headers.common.Authorization = token;
    if (token) {
      getUser();
    }
  }, [token, getUser]);

  return (
    <>
      <LayoutContainer>
        <Router>
          {/* Routes goes here */}
          <GuestRoute container={Login} path="/login" />
          <PublicRoute container={PageNotFound} path="*" />
        </Router>
      </LayoutContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
});

const mapDispatchToProps = {
  getUser,
  getClient,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
