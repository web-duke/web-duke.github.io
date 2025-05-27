import { useTranslation } from "react-i18next";
import "./index.scss";

export const AboutPage = () => {
  const { t } = useTranslation("translation", { keyPrefix: "pages.AboutPage" });

  return <div>{t("intro")}</div>;
};

export default AboutPage;
