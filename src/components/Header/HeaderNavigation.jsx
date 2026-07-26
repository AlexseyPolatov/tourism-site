import styles from "./Header.module.scss";

export default function HeaderNavigation({ items }) {
  return (
    <>
      <nav className={styles.header__navigation}>
        <ul className={styles.header__list}>
          {items.map((item) => (
            <li key={item.id} className={styles.header__listItem}>
              <a href={item.link} className={styles.header__link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <a className={styles.header__btn} href="#form">Оставить заявку</a>
      </nav>
    </>
  );
}
