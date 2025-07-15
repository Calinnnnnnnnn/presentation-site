import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // poți pune "smooth" dacă vrei să animeze
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
