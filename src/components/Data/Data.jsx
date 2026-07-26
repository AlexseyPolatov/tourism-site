import { Fragment } from "react";
import styles from "./Data.module.scss";
import icon1 from "../../assets/images/data/icon-1.png";
import icon2 from "../../assets/images/data/icon-2.png";
import icon3 from "../../assets/images/data/icon-3.png";
import icon4 from "../../assets/images/data/icon-4.png";
import trophy from "../../assets/images/data/data-icon.png";
import trophyMobile from "../../assets/images/data/data-icon-mobile.png";
import arrow1 from "../../assets/icons/data-arrov.png";
import arrow2 from "../../assets/icons/data-arrov__left.png";

function Lines({ lines }) {
  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && " "}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
}

export default function Data() {
  const dateCards = [
    {
      prefix: "Для поступающих на",
      accent: "бюджет:",
      items: [
        ["Завершение приёма документов – 10 августа"],
        ["Вступительные испытания – с 11 по 18 августа"],
        ["Публикация конкурсных списков –", "не позднее 20 августа"],
        ["Срок подачи согласия на зачисление –", "до 12:00 24 августа"],
        ["Приказы о зачислении – 25 августа"],
      ],
    },
    {
      prefix: "Для поступающих по",
      accent: "контракту:",
      items: [
        ["Завершение приёма документов – 13 августа"],
        ["Вступительные испытания –", "с 21 июня по 19 августа"],
        ["Публикация конкурсных списков –", "не позднее 21 августа"],
        ["Срок подачи согласия на зачисление –", "до 12:00 26 августа"],
        ["Приказы о зачислении – 29 августа"],
      ],
    },
  ];

  const docs = [
    { icon: icon1, lines: ["Паспорт", "(документ,", "удостоверяющий", "личность)"] },
    { icon: icon2, lines: ["Диплом", "бакалавра", "или специалиста", "с приложением"] },
    { icon: icon3, lines: ["СНИЛС", "(при наличии)"] },
    { icon: icon4, lines: ["Портфолио", "(достижения,", "проекты,", "рекомендации)"] },
  ];

  const methods = [
    { pill: "Онлайн", text: "через портал «Госуслуги» (ЕПГУ)", mod: styles.data__methodCard_online },
    { pill: "Лично", text: "по адресу: г. Москва, ул. Миклухо-Маклая, д. 6", mod: styles.data__methodCard_offline },
  ];

  const achievements = [
    { before: "Диплом с отличием – ", accent: "20 баллов", after: "" },
    { before: "Победа в олимпиаде «Я – профессионал» – ", accent: "до 100 баллов", after: "" },
    { before: "Публикации в журналах Scopus/WoS – ", accent: "до 15 баллов", after: " за статью" },
    { before: "Победа в Универсиаде РУДН – ", accent: "до 100 баллов", after: "" },
    { before: "Патенты, свидетельства – ", accent: "по 5 баллов", after: " (суммарно не более 30)" },
  ];

  return (
    <section className={styles.data} id="admission">
      <div className="wrap">
        <div className={styles.data__card}>
          <h2 className={styles.data__title}>
            Ключевые даты приёмной кампании 2026 года
          </h2>
          <p className={styles.data__subtitle}>
            Приём документов начинается <b>20 июня</b> 2026 года
          </p>

          <div className={styles.data__dates}>
            {dateCards.map((card, i) => (
              <div key={i} className={styles.data__dateCard}>
                <div className={styles.data__datePill}>
                  <span>{card.prefix}</span>
                  <b>{card.accent}</b>
                </div>
                <ul className={styles.data__dateList}>
                  {card.items.map((item, j) => (
                    <li key={j} className={styles.data__dateItem}>
                      <Lines lines={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className={`${styles.data__heading} ${styles.data__heading_big} ${styles.data__howto}`}>
            Как поступить ?
          </h3>
          <p className={styles.data__howtoText}>
            Вступительные испытания – <b>конкурс портфолио</b>
            <br />
            Минимальный проходной балл – <b>30</b>
          </p>

          <h3 className={`${styles.data__heading} ${styles.data__docsHeading}`}>
            Необходимые документы:
          </h3>
          <ul className={styles.data__docs}>
            {docs.map((doc, i) => (
              <li key={i} className={styles.data__docCard}>
                <span className={styles.data__docIconWrap}>
                  <img className={styles.data__docIcon} src={doc.icon} alt="" />
                </span>
                <span className={styles.data__docText}>
                  <Lines lines={doc.lines} />
                </span>
              </li>
            ))}
          </ul>

          <h3 className={`${styles.data__heading} ${styles.data__methodsHeading}`}>
            Способы подачи документов:
          </h3>
          <div className={styles.data__methods}>
            {methods.map((m, i) => (
              <div key={i} className={`${styles.data__methodCard} ${m.mod}`}>
                <span className={styles.data__methodPill}>{m.pill}</span>
                <p className={styles.data__methodText}>{m.text}</p>
              </div>
            ))}
          </div>

          <h3 className={`${styles.data__heading} ${styles.data__achHeading}`}>
            Индивидуальные достижения (дополнительные баллы к портфолио):
          </h3>
          <ul className={styles.data__achList}>
            {achievements.map((a, i) => (
              <li key={i} className={styles.data__achItem}>
                {a.before}
                <b>{a.accent}</b>
                {a.after}
              </li>
            ))}
          </ul>

          <img className={styles.data__arrow1} src={arrow1} alt="" />
          <img className={styles.data__arrow2} src={arrow2} alt="" />
          <picture>
            <source media="(max-width: 900px)" srcSet={trophyMobile} />
            <img className={styles.data__trophy} src={trophy} alt="" />
          </picture>
        </div>
      </div>
    </section>
  );
}
