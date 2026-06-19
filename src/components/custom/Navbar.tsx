import { type MouseEvent, useEffect } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useRouteContext } from "@/context/RouteContext";
import { useNavigate, useLocation } from "react-router";

const Navbar = () => {
  const context = useRouteContext();
  const setRouteHandler = context?.setRouteHandler;
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the current route based on the pathname
  const currentRoute = location.pathname === "/" ? "home" : location.pathname.substring(1);

  // Keep the route context in sync with the location path
  useEffect(() => {
    if (setRouteHandler) {
      setRouteHandler(currentRoute);
    }
  }, [currentRoute, setRouteHandler]);

  const RouteHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.textContent?.toLowerCase();
    if (target === "home") {
      navigate("/");
    } else if (target) {
      navigate(`/${target}`);
    }
  };

  return (
    <div className="navbar-section">
      <Button
        variant="link"
        className={cn(
          "cursor-pointer!",
          currentRoute === "home" ? "text-muted underline " : "",
        )}
        onClick={RouteHandler}
      >
        Home
      </Button>
      <Button
        variant="link"
        className={cn(
          "cursor-pointer!",
          currentRoute === "projects" ? "text-muted underline " : "",
        )}
        onClick={RouteHandler}
      >
        Projects
      </Button>
      <Button
        variant="link"
        className={cn(
          "cursor-pointer!",
          currentRoute === "resume" ? "text-muted underline " : "",
        )}
        onClick={RouteHandler}
      >
        Resume
      </Button>
    </div>
  );
};

export default Navbar;
