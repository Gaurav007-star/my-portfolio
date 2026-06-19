import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import RouteContextProvider from "./context/RouteContext.tsx";
import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <RouteContextProvider>
    <div className="w-full h-max bg-background flex flex-col items-center justify-center">
      <App />
    </div>
    <Toaster />
  </RouteContextProvider>,
);
