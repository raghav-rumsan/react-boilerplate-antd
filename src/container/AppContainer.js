import React, { useEffect, useState } from "react";
import { api } from "../api";
import { Router } from "@reach/router";
import { createStructuredSelector } from "reselect";
import { getUser } from "./actions";
import { connect } from "react-redux";
import {
  PublicRoute,
  PageNotFound,
  GuestRoute,
  ProtectedRoute,
} from "./components";
import { Login } from "./guest";
import LayoutContainer from "../components/layout/LayoutContainer";
import { selectToken } from "./selectors";
import { Dashboard } from "./protected";
const AppContainer = ({ token, getUser }) => {
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
          <PublicRoute container={Dashboard} path="/" />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
