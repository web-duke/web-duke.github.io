import { useScrolled } from "../../context/ScrolledContext";
import "./index.scss";

export const ScrollArrow = () => {
  const scrolled = useScrolled();

  return <div className={`ScrollArrow scrolled--${scrolled}`} />;
};

export default ScrollArrow;
