import { useTranslation } from "react-i18next";
import "./index.scss";

export const AboutPage = () => {
  const { t } = useTranslation();

  return <div>{t("pages.about")}</div>;
};

export default AboutPage;
