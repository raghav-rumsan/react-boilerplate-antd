import React from "react";
import { Link } from "@reach/router";
import { Alert, Row } from "antd";
import Title from "./Title";

const PageNotFound = () => {
  return (
    <>
      <Title>Page Not Found</Title>
      <Row style={{ padding: 20, textAlign: "center" }}>
        <Alert
          showIcon
          type="error"
          message={
            <p>
              The page is not available.<Link to="/">here</Link> to go back to
              homepage.
            </p>
          }
        />
      </Row>
    </>
  );
};

export default PageNotFound;
