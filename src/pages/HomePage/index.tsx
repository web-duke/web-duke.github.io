import { useTranslation } from "react-i18next";
import "./index.scss";

export const HomePage = () => {
  const { t } = useTranslation();

  return <div className="HomePage">{t("pages.home")}</div>;
};

export default HomePage;
