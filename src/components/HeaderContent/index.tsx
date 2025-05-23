import { useTranslation } from "react-i18next";
import { useScrolled } from "../../context/ScrolledContext";
import "./index.scss";
import Avatar from "../Avatar";

export const HeaderContent = () => {
  const { scrolled } = useScrolled();
  const { t } = useTranslation("translation", { keyPrefix: "HeaderContent" });

  return (
    <header className={`HeaderContent scrolled--${scrolled}`}>
      <Avatar />
      <h1 className="HeaderContent__title">{t("title")}</h1>
      <p className="HeaderContent__subtitle">{t("subtitle")}</p>
    </header>
  );
};

export default HeaderContent;
