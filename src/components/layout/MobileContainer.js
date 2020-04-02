import React from "react";
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from "semantic-ui-react";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsLoggedIn,
  selectUser,
  selectClient
} from "../../containers/selectors";
import { logoutUser } from "../../containers/actions";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class MobileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  handleLogout = () => {
    this.props.logoutUser();
    navigate("/login");
  };

  render() {
    const { children, isLoggedIn, user } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item
            as={Link}
            to="/"
            getProps={({ isCurrent }) => {
              return {
                className: isCurrent ? "item active" : "item"
              };
            }}
          >
            Hamro Accounting
          </Menu.Item>
          <Menu.Item>{this.props.client.name}</Menu.Item>
          {!isLoggedIn ? (
            <Menu.Item as={Link} to="/login">
              Log in
            </Menu.Item>
          ) : (
            <>
              <Menu.Item as={Link} to="/register-new-user">
                Register User
              </Menu.Item>
              <Menu.Item as={Button} onClick={this.handleLogout}>
                {user.name}
              </Menu.Item>
            </>
          )}
        </Sidebar>
        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 50, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  {!isLoggedIn ? (
                    <Button as={Link} to="/login" inverted>
                      Log in
                    </Button>
                  ) : (
                    <Button inverted onClick={this.handleLogout}>
                      {user.name} Log out
                    </Button>
                  )}
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoggedIn: selectIsLoggedIn,
  user: selectUser,
  client: selectClient
});

const mapDispatchToProps = {
  logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileContainer);
