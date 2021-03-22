import { Layout, BackTop, Card } from "antd";
import HeaderLayout from "./HeaderLayout";

const { Content } = Layout;

const LayoutWithHeader = ({ children }) => {
  return (
    <Layout>
      <div style={{ marginBottom: 10 }}>
        <HeaderLayout />
      </div>
      <Content style={{ width: "90%", margin: "auto" }}>
        <Card>{children}</Card>
      </Content>
      <BackTop />
    </Layout>
  );
};

export default LayoutWithHeader;
