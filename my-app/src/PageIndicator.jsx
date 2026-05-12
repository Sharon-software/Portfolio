import { useLocation } from "react-router-dom";

const routes = ["/", "/about", "/projects", "/contact"];

export default function PageIndicator() {
  const location = useLocation();
  const currentIndex = routes.indexOf(location.pathname);

  return (
    <div className="page-indicator">
      {routes.map((route, index) => (
        <div
          key={route}
          className={`indicator-dot ${index === currentIndex ? "active" : ""} ${index < currentIndex ? "passed" : ""}`}
        />
      ))}
    </div>
  );
}