import styles from "./Header.module.scss";
import rudnLogo from "../../assets/icons/rudn-logo.svg";
import closeIcon from "../../assets/icons/close.svg";

export default function MobileMenu({ items, isOpen, onClose }) {
  return (
    <div
      className={
        isOpen ? `${styles.mobileMenu} ${styles.mobileMenuOpen}` : styles.mobileMenu
      }
      aria-hidden={!isOpen}
    >
      <div className={styles.mobileMenu__top}>
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
          />
        </a>

        <button
          type="button"
          className={styles.mobileMenu__close}
          onClick={onClose}
          aria-label="Закрыть меню"
        >
          <img src={closeIcon} alt="" />
        </button>
      </div>

      <nav>
        <ul className={styles.mobileMenu__list}>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className={styles.mobileMenu__link}
                onClick={onClose}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a className={styles.mobileMenu__btn} href="#form" onClick={onClose}>
        Оставить заявку
      </a>
    </div>
  );
}
