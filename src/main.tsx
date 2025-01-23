import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import { App } from "./components/app.component";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query.lib";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
