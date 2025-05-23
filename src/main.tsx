import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/index.tsx";
import { ScrolledProvider } from "./context/ScrolledContext.tsx";
import "./i18n";
import AboutPage from "./pages/AboutPage/index.tsx";
import HomePage from "./pages/HomePage/index.tsx";
import { ROUTES } from "./routes.ts";
import "./styles/main.scss";
import "./styles/normalize.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrolledProvider>
        <Header />

        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        </Routes>
      </ScrolledProvider>
    </BrowserRouter>
  </StrictMode>
);
