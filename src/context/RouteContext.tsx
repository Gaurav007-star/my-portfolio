/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface routeInterface {
  route: string;
  setRouteHandler: (value: string) => void;
}

const RouteContext = createContext<routeInterface | null>(null);

const RouteContextProvider = ({ children }: { children: ReactNode }) => {
  const [route, setRoute] = useState<string>("home");
  const setRouteHandler = useCallback((value: string) => {
    setRoute(value);
  }, []);
  return (
    <RouteContext.Provider value={{ route, setRouteHandler }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteContextProvider;

export const useRouteContext = () => {
  const context = useContext(RouteContext);
  if (!context) {
    console.log("Wrap the context to app");
    return;
  }

  return context;
};
