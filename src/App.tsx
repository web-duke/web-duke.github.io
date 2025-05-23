import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROUTES } from "./routes";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
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
    </>
  );
}

export default App;
