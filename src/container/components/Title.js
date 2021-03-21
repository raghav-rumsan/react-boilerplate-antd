import { PageHeader } from "antd";
import { Helmet } from "react-helmet";
import { appName } from "../../constants/strings";
import PropTypes from "prop-types";
import { useLocation } from "@reach/router";

const Title = ({
  children,
  sideContent,
  subtitle = "",
  helmetContent = "",
  backIcon = true,
  ...props
}) => {
  const location = useLocation();
  const extraContent = (
    <div
      style={{
        display: "flex",
        width: "max-content",
        justifyContent: "flex-end",
      }}
    >
      {sideContent}
    </div>
  );

  const { pathname } = location;

  let path = () => pathname.substring(1);

  return (
    <>
      <Helmet defaultTitle={appName}>
        <title>{`${children || path()} - ${appName}`}</title>
        <meta name={subtitle} content={helmetContent} />
      </Helmet>
      <PageHeader
        backIcon={backIcon}
        className="site-page-header-responsive"
        onBack={() => window.history.back()}
        title={children}
        subTitle={subtitle}
        extra={extraContent}
      />
    </>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  sideContent: PropTypes.string,
  subtitle: PropTypes.string,
  helmetContent: PropTypes.string,
  backIcon: PropTypes.bool,
};

export default Title;
