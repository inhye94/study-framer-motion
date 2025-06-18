import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Providers from "./providers/index.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers />
  </StrictMode>
);
