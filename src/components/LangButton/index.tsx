import { useTranslation } from "react-i18next";
import "./index.scss";

export const LangButton = () => {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "LangButton",
  });

  const switchLang = () =>
    i18n.language === "fr"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("fr");

  const label = i18n.language === "fr" ? t("en") : t("fr");

  return (
    <button className="LangButton" onClick={switchLang}>
      {label}
    </button>
  );
};

export default LangButton;
