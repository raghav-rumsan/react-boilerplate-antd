import { Layout, Row, Col } from "antd";
import { appName } from "../../constants/strings";
import Locale from "./Locale";
import ThemeHandler from "./ThemeHandler";

const { Header } = Layout;

const HeaderLayout = () => {
  return (
    <Header>
      <Row>
        <Col span={6} style={{ float: "left" }}>
          <h4>{appName}</h4>
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
  );
};

export default HeaderLayout;
