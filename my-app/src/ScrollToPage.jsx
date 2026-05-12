import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


const routes = ["/", "/about", "/projects", "/contact"];

export default function ScrollToPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = (e) => {
      if (isScrolling) return;
      isScrolling = true;

      const currentIndex = routes.indexOf(location.pathname);

      if (e.deltaY > 0) {
        // scrolling down — go to next page
        if (currentIndex < routes.length - 1) {
          navigate(routes[currentIndex + 1]);
        }
      } else {
        // scrolling up — go to previous page
        if (currentIndex > 0) {
          navigate(routes[currentIndex - 1]);
        }
      }

      setTimeout(() => {
        isScrolling = false;
      }, 1000); // 1 second cooldown between page changes
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [location, navigate]);

  return null;
}