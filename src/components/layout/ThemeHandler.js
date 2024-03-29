import React, { Component } from "react";
import { Layout, message, Spin, Switch } from "antd";
import { Sun, Moon } from "@styled-icons/boxicons-solid";
import darkVars from "../../dark.json";
import lightVars from "../../light.json";
// import appTheme from '../../theme.json'
import appThemeLight from "../../appThemeLight";
import appThemeDark from "../../appThemeDark";

const modifiedLightVars = {
  ...lightVars,
  ...appThemeLight,
};
const modifiedDarkVars = {
  ...darkVars,
  ...appThemeDark,
};

class ThemeHandler extends Component {
  constructor(props) {
    super(props);
    let initialValue = { ...modifiedLightVars };
    let vars = {};
    let themeName = localStorage.getItem("theme-name") || "light";

    try {
      vars = localStorage.getItem("app-theme");
      if (!vars) {
        vars = initialValue;
      } else {
        vars = Object.assign({}, JSON.parse(vars));
      }
    } catch (e) {
      vars = initialValue;
    } finally {
      this.state = {
        themeApplied: false,
        vars: {
          ...vars,
          // ...appTheme,
        },
        initialValue,
        size: "default",
        disabled: false,
        themeName,
      };
      window.less
        .modifyVars(vars)
        .then(() => {
          this.setState({ themeApplied: true });
        })
        .catch((error) => {
          message.error(`Failed to update theme`, { error });
        });
    }
  }

  resetTheme = () => {
    localStorage.setItem("app-theme", "{}");
    localStorage.setItem("theme-name", "light");
    this.setState({ themeName: "light" });
    this.setState({ vars: this.state.initialValue });
    window.less.modifyVars(this.state.initialValue).catch((error) => {
      message.error(`Failed to reset theme`);
    });
  };

  render() {
    const { themeApplied } = this.state;

    if (!themeApplied) {
      return (
        <Spin size="large">
          <Layout className="app" />
        </Spin>
      );
    }
    return (
      <>
        <Switch
          checked={this.state.themeName === "dark"}
          checkedChildren={<Moon size={18} />}
          unCheckedChildren={<Sun size={18} />}
          onChange={(v) => {
            let vars = !v ? modifiedLightVars : modifiedDarkVars;
            let value = !v ? "light" : "dark";
            vars = {
              ...vars,
              "@white": "#fff",
              "@black": "#000",
            };
            this.setState({ vars, themeName: value });
            this.setState({ vars });
            localStorage.setItem("app-theme", JSON.stringify(vars));
            localStorage.setItem("theme-name", value);
            window.less.modifyVars(vars).catch((error) => {});
          }}
        />
      </>
    );
  }
}

export default ThemeHandler;
