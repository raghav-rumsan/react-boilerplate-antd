import { useContext } from "react";
import { Title } from "../../components";
import { Link } from "@reach/router";
import LocaleContext from "../../../LocaleContext";

const Dashboard = () => {
  const localeContext = useContext(LocaleContext).Dashboard;
  return (
    <div>
      <Title backIcon={false}>{localeContext["dashboard.title"]}</Title>
    </div>
  );
};

export default Dashboard;
