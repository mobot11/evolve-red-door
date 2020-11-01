import { useState } from "react";
import SiteNav from "./SiteNav";
import styles from "../styles/HamburgerMenu.module.scss";
const HamburgerMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles["hamburger-menu"]}>
      <button onClick={() => toggleMenu()} aria-expanded={isOpen}>
        <img
          src="https://placehold.it/30x30&text==&fontSize=32"
          alt="toggle menu"
          height="30"
          width="30"
        />
      </button>
      {isOpen && <SiteNav className={styles["mobile-nav"]} />}
    </div>
  );
};
export default HamburgerMenu;
