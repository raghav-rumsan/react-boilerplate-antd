import { DatePicker, Empty } from "antd";
import React, { useContext } from "react";
import { Title } from "../../components";
import LocaleContext from "../../LocaleContext";

const Dashboard = () => {
  const localeContext = useContext(LocaleContext).Dashboard;
  console.log(`localeContext`, localeContext);
  return (
    <div>
      <Title backIcon={false}>{localeContext["dashboard.title"]}</Title>
      <DatePicker />
      <Empty />
    </div>
  );
};

export default Dashboard;
