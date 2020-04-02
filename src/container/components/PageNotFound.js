import React from "react";
import { Link } from "@reach/router";
import { Row } from "antd";
import TitleHeader from "./TitleHeader";

const PageNotFound = () => {
    return (
        <Row style={{ padding: 20, textAlign: "center" }}>
            <TitleHeader>
                The page is not available. click <Link to="/">here</Link> to go
                back to homepage.
            </TitleHeader>
        </Row>
    );
};

export default PageNotFound;
