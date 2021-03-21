import React, { useEffect, useState } from "react";
import { api } from "../api";
import { Router } from "@reach/router";
import { createStructuredSelector } from "reselect";
import { getUser, setLocale } from "./actions";
import { connect } from "react-redux";
import {
  PublicRoute,
  PageNotFound,
  GuestRoute,
  ProtectedRoute,
} from "./components";
import { Login } from "./guest";
import LayoutContainer from "../components/layout/LayoutContainer";
import { selectToken, selectLocale } from "./selectors";
import { Dashboard } from "./protected";
import { ConfigProvider } from "antd";
import locales from "../locales";
import LocaleContext from "./LocaleContext";

const AppContainer = ({ token, getUser, selectedLocale, setLocale }) => {
  useEffect(() => {
    const locale = localStorage.getItem("locale");
    console.log(`object`, { locales, l: locales[locale], locale });
    if (locale) {
      setLocale(locale);
    } else {
      localStorage.setItem("locale", "enUS");
      setLocale("enUS");
    }
  }, [selectedLocale]);

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
    <ConfigProvider locale={locales[selectedLocale]}>
      <LocaleContext.Provider value={locales[selectedLocale]}>
        <LayoutContainer>
          <Router>
            <PublicRoute container={Dashboard} path="/" />
            <GuestRoute container={Login} path="/login" />
            <PublicRoute container={PageNotFound} path="*" />
          </Router>
        </LayoutContainer>
      </LocaleContext.Provider>
    </ConfigProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
  selectedLocale: selectLocale,
});

const mapDispatchToProps = {
  getUser,
  setLocale,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
