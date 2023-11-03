import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import App from "./App";
import "./index.css";
import "./assets/fonts/Font.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/SGlobal";
import { NavermapsProvider } from "react-naver-maps";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <NavermapsProvider ncpClientId={import.meta.env.VITE_NAVERMAP_CLIENT_ID}>
            <App />
          </NavermapsProvider>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
);
