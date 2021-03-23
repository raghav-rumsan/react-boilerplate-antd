import { Router, Location } from "@reach/router";
import { AnimatePresence } from "framer-motion";

const AnimatedRoute = ({ children }) => (
  <Location>
    {({ location }) => (
      <div style={{ position: "relative" }}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Router key={location.key} location={location}>
            {children}
          </Router>
        </AnimatePresence>
      </div>
    )}
  </Location>
);

export default AnimatedRoute;
