import { Layout, Row, Col, Affix } from "antd";
import { appName } from "../../constants/strings";
import Locale from "./Locale";
import ThemeHandler from "./ThemeHandler";
import { Link } from "@reach/router";

const { Header } = Layout;

const HeaderLayout = () => {
  return (
    <Affix>
      <Header>
        <Row>
          <Col span={6} style={{ float: "left" }}>
            <Link to="/">
              <h4 style={{ fontFamily: "Raleway", fontWeight: 900 }}>
                {appName}
              </h4>
            </Link>
          </Col>
          <Col
            style={{ float: "right", alignContent: "end", alignItems: "end" }}
            span={18}
          >
            <Col style={{ float: "right" }}>
              <Col style={{ float: "left" }} span={12}>
                <ThemeHandler />{" "}
              </Col>
              <Col style={{ float: "right" }} span={12}>
                <Locale />
              </Col>
            </Col>
          </Col>
        </Row>
      </Header>
    </Affix>
  );
};

export default HeaderLayout;
