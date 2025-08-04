import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

export const Context = createContext(0);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Context.Provider value={5000}>
      <App />
    </Context.Provider>
  </StrictMode>
);
