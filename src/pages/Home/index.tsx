import { useTranslation } from "react-i18next";
import "./index.scss";

export const Home = () => {
  const { t } = useTranslation();

  return <h1>{t("pages.home")}</h1>;
};

export default Home;
