import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import rudnLogo from "../../assets/icons/rudn-logo.svg";
import menuIcon from "../../assets/icons/menu.svg";
import HeaderNavigation from "./HeaderNavigation";
import MobileMenu from "./MobileMenu";

const navItems = [
  { id: 1, name: "Профили", link: "#profiles" },
  { id: 2, name: "Стоимость", link: "#price" },
  { id: 3, name: "Поступление", link: "#admission" },
  { id: 4, name: "Контакты", link: "#contacts" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    function handleKeyDown(event) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <div className={styles.header}>
        <div className="wrap">
          <div className={styles.header__container}>
            <a
              className={styles.header__logo}
              href="https://www.rudn.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.header__logoImg}
                src={rudnLogo}
                alt="RUDN-logo"
              ></img>
            </a>

            <HeaderNavigation items={navItems} />

            <button
              type="button"
              className={styles.header__burger}
              onClick={() => setIsMenuOpen(true)}
              aria-label="Открыть меню"
            >
              <img src={menuIcon} alt="" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        items={navItems}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
