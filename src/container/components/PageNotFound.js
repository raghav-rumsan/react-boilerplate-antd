import React, { useContext } from "react";
import { Alert } from "antd";
import Title from "./Title";
import LocaleContext from "../../LocaleContext";

const PageNotFound = () => {
  const localeContext = useContext(LocaleContext).PageNotFound;
  return (
    <>
      <Title>{localeContext["title"]}</Title>
      <div>
        <h1
          style={{
            fontSize: "8rem",
            textAlign: "center",
            fontFamily: "Assistant",
          }}
        >
          404
        </h1>
        <Alert
          showIcon
          type="error"
          message={
            <h1 style={{ textAlign: "center" }}>{localeContext["message"]}</h1>
          }
        />
      </div>
    </>
  );
};

export default PageNotFound;
