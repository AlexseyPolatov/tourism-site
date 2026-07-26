import styles from "./Price.module.scss";
import lineLeft from "../../assets/icons/price-line-left.svg";
import lineRight from "../../assets/icons/price-line-right.svg";

export default function Price() {
  const title = "Стоимость и бюджетные места*";
  const subtitle = "*актуально для приёма 2026 года";

  const rows = [
    {
      label: "Стоимость обучения:",
      value: (
        <b>300 000 ₽</b>
      ),
    },
    {
      label: "Срок обучения:",
      value: <b>2 года</b>,
    },
    {
      label: "форма обучения:",
      value: <b>очная</b>,
    },
    {
      label: "Места:",
      value: (
        <>
          платные <b>25</b> / бюджетные <b>15</b>
        </>
      ),
    },
  ];

  return (
    <section className={styles.price} id="price">
      <img className={styles.price__lineLeft} src={lineLeft} alt="" />
      <img className={styles.price__lineRight} src={lineRight} alt="" />

      <div className="wrap">
        <div className={styles.price__inner}>
          <h2 className={styles.price__title}>{title}</h2>
          <p className={styles.price__subtitle}>{subtitle}</p>

          <div className={styles.price__rows}>
            {rows.map((row, i) => (
              <div key={i} className={styles.price__row}>
                <span className={styles.price__label}>{row.label}</span>
                <span className={styles.price__value}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
