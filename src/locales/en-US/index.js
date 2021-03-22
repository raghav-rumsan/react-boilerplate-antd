import enUS from "antd/lib/locale/en_US";
import { dashboard } from "./dashboard";
import { pageNotFound } from "./page-not-found";
import { loader } from "./loading";

const english = {
  ...enUS,
  Dashboard: {
    ...dashboard,
  },
  PageNotFound: {
    ...pageNotFound,
  },
  Loader: {
    ...loader,
  },
};

export default english;
