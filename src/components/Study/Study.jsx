import { Fragment } from "react";
import styles from "./Study.module.scss";
import photo from "../../assets/images/study/study.png";
import arrow from "../../assets/icons/study-arrow.svg";

function Lines({ lines }) {
  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && " "}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
}

export default function Study() {
  const title = "Чему вы научитесь?";

  const items = [
    ["Управлять проектами в сфере туризма", "и гостеприимства"],
    ["Анализировать глобальные тренды и внедрять", "инновации"],
    ["Создавать конкурентоспособные туристические", "продукты"],
    ["Формировать стратегии территориального", "развития"],
    ["Разрабатывать устойчивые и экологичные", "решения для туризма"],
    ["Работать с цифровыми инструментами для анализа", "рынка и управления"],
  ];

  return (
    <section className={styles.study}>
      <div className="wrap">
        <div className={styles.study__container}>
          <img
            className={styles.study__photo}
            src={photo}
            alt="Студенты магистратуры за работой"
          />

          <div className={styles.study__content}>
            <h2 className={styles.study__title}>{title}</h2>

            <ul className={styles.study__list}>
              {items.map((item, i) => (
                <li key={i} className={styles.study__item}>
                  <span className={styles.study__icon}>
                    <img src={arrow} alt="" />
                  </span>
                  <p>
                    <Lines lines={item} />
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
