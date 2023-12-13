import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import App from "./App.tsx";

import "./assets/css/bootstrap.min.scss";
import "./assets/css/icons.min.scss";
import "./assets/css/app.min.scss";
import "./index.scss";

if (import.meta.env.PROD) {
  disableReactDevTools();
}

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
