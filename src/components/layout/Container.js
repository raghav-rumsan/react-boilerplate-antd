import { Layout, Menu, Card, Affix } from "antd";
import React from "react";
import NavBar from "../../container/components/NavBar";
import { HomeOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { menuItems } from "./menuItems";
import { Link } from "@reach/router";
import { createStructuredSelector } from "reselect";
import {
  selectToken,
  selectClient,
  selectUser,
  selectIsLoggedIn
} from "../../container/selectors";
// import { useInjectReducer } from "../../utils/injectReducer";
// import reducer from "../../container/reducer";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    // useInjectReducer({ key: "get_user", reducer });
    console.log("this.props", this.props);
    const { children, isLoggedIn, client } = this.props;
    const menuRender = () => {
      return menuItems.map((menu, menuIndex) => {
        if (menu.children == null) {
          return (
            <Menu.Item key={`${menu.title}-${menuIndex}-no-child`}>
              <Link to={`${menu.link}`}>
                <HomeOutlined />
                {!this.state.collapsed && menu.title}
              </Link>
            </Menu.Item>
          );
        } else {
          return (
            <SubMenu
              key={`${menu.title}-${menuIndex}-with-child`}
              title={menu.title}
            >
              {menu.children.map((subMenu, subMenuIndex) => {
                if (subMenu.children == null) {
                  return (
                    <Menu.Item
                      key={`${menu.title}-submenu-${subMenu.title}-no-child`}
                    >
                      <Link to={`${subMenu.link}`}>{subMenu.title}</Link>
                    </Menu.Item>
                  );
                } else {
                  return (
                    <SubMenu
                      key={`${menu.title}-${subMenu.title}-submenu-with-child-${subMenuIndex}`}
                      title={subMenu.title}
                    >
                      {subMenu.children.map((subSubMenu, subSubMenuIndex) => {
                        if (subSubMenu.children == null) {
                          return (
                            <Menu.Item
                              key={`${subSubMenu.title}-${subSubMenuIndex}-subsubmenu-no-child`}
                            >
                              <Link to={`${subSubMenu.link}`}>
                                {subSubMenu.title}
                              </Link>
                            </Menu.Item>
                          );
                        } else {
                          return (
                            <SubMenu
                              key={`subSubmenu-with-child-${subSubMenu.title}-${subSubMenuIndex}-with-child`}
                            >
                              {subSubMenu.title}
                            </SubMenu>
                          );
                        }
                      })}
                    </SubMenu>
                  );
                }
              })}
            </SubMenu>
          );
        }
      });
    };

    const loggedInView = (
      <>
        {window.innerWidth > 578 ? (
          <Sider
            className="sider-class"
            // collapsedWidth={"20vh"}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <div
                style={{
                  margin: "13px 0 13px 0",
                  padding: "20px",
                  fontSize: "27px",
                  // fontWeight: "bold",
                  color: "white"
                }}
              >
                <Link
                  style={{
                    fontSize: "27px",
                    color: "white"
                  }}
                  to="/"
                >
                  {this.props.client.client_name}
                </Link>
              </div>

              {menuRender()}
            </Menu>
          </Sider>
        ) : (
          <Affix>
            <Menu
              style={{ width: "100%" }}
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="horizontal"
            >
              {menuRender()}
            </Menu>
          </Affix>
        )}

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <NavBar user={this.props.user} />
          </Header>

          <Content style={{ margin: "1rem" }}>
            <Card className="layout-card">{children}</Card>{" "}
          </Content>
          {/* <Layout.Footer style={{ textAlign: "center" }}>
            2020 Raghav Kattel
          </Layout.Footer> */}
        </Layout>
      </>
    );

    return (
      <Layout style={{ minHeight: "100vh" }}>
        {isLoggedIn ? (
          loggedInView
        ) : (
          <Content style={{ margin: "1rem" }}>
            {!isLoggedIn && children}
          </Content>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  client: selectClient,
  user: selectUser,
  isLoggedIn: selectIsLoggedIn
});

export default connect(mapStateToProps, null)(Container);
