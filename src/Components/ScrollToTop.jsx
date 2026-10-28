import { useEffect } from "react";
import { useLocation } from "react-router";

// Client-side navigation does not reset the scroll position on its own, so
// without this, opening a new page keeps the previous page's scroll offset
// and the new page can appear scrolled to the bottom.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.AOS) {
      // Newly mounted pages have new [data-aos] elements; make AOS see them.
      window.AOS.refresh();
    } else {
      // AOS script failed to load: its CSS would otherwise keep animated
      // sections invisible forever, so show them instead.
      document
        .querySelectorAll("[data-aos]")
        .forEach((el) => el.removeAttribute("data-aos"));
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
