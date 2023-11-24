import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyle } from "./global.style.ts";
import { RouterProvider } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import router from "./Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);
