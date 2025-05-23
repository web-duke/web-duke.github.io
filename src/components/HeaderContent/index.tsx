import { useTranslation } from "react-i18next";
import { useScrolled } from "../../context/ScrolledContext";
import "./index.scss";
import Avatar from "../Avatar";
import ScrollArrow from "../ScrollArrow";

export const HeaderContent = () => {
  const scrolled = useScrolled();
  const { t } = useTranslation("translation", { keyPrefix: "HeaderContent" });

  return (
    <header className={`HeaderContent scrolled--${scrolled}`}>
      <Avatar />
      <h1 className="HeaderContent__title">{t("title")}</h1>
      <p className="HeaderContent__subtitle">{t("subtitle")}</p>

      {!scrolled && <ScrollArrow />}
    </header>
  );
};

export default HeaderContent;
