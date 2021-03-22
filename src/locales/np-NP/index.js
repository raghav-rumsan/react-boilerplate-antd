import neNp from "antd/lib/locale/ne_NP";
import { dashboard } from "./dashboard";
import { pageNotFound } from "./page-not-found";
import { loader } from "./loading";

const nepali = {
  ...neNp,
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

export default nepali;
