import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { siteConfig } from "@/content/site.config";
import { applyTheme } from "@/lib/theme";

// Aplica el theme del nicho antes del primer render.
applyTheme(siteConfig.theme);
document.title = siteConfig.meta.title;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
