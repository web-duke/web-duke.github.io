import { useScrolled } from "../../context/ScrolledContext";
import HeaderContent from "../HeaderContent";
import "./index.scss";

export const Header = () => {
  const { scrolled } = useScrolled();

  return (
    <div className={`Header scrolled--${scrolled}`}>
      <HeaderContent />
    </div>
  );
};

export default Header;
