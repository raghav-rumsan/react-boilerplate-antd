import { Layout } from "antd";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectClient,
  selectUser,
  selectIsLoggedIn,
} from "../../container/selectors";
import LayoutWithHeader from "./LayoutWithHeader";
// import SideBar from "./SideBar";

const { Content } = Layout;

class Container extends React.Component {
  render() {
    const { children, isLoggedIn } = this.props;

    return (
      <Layout style={{ minHeight: "100vh" }}>
        {isLoggedIn ? (
          <LayoutWithHeader>{children}</LayoutWithHeader>
        ) : (
          // <SideBar user={user}>{children}</SideBar>
          // {isLoggedIn ? (
          //   <SideBar user={user}>{children}</SideBar>
          // ) : (
          <Content style={{ margin: "1rem" }}>{children}</Content>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  client: selectClient,
  user: selectUser,
  isLoggedIn: selectIsLoggedIn,
});

export default connect(mapStateToProps, null)(Container);
