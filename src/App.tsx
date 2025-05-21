import { useTranslation } from "react-i18next";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import About from "./pages/About";
import Home from "./pages/Home";
import { ROUTES } from "./routes";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <BrowserRouter>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <button
        onClick={() => changeLanguage("fr")}
        disabled={i18n.language === "fr"}
      >
        FR
      </button>
      <button
        onClick={() => changeLanguage("en")}
        disabled={i18n.language === "en"}
      >
        EN
      </button>

      <Link to={ROUTES.HOME}>{t("pages.home")}</Link>
      <Link to={ROUTES.ABOUT}>{t("pages.about")}</Link>

      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
