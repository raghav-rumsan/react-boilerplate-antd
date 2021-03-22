import hiIN from "antd/lib/locale/hi_IN";
import { dashboard } from "./dashboard";
import { pageNotFound } from "./page-not-found";
import { loader } from "./loading";

const hindi = {
  ...hiIN,
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

export default hindi;
