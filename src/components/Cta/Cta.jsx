import { Fragment } from "react";
import styles from "./Cta.module.scss";
import arrow from "../../assets/icons/cta-arrow.svg";

function Lines({ lines }) {
  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
}

export default function Cta() {
  const cards = [
    { lines: ["Бизнес-процессы в сфере", "туризма и гостеприимства"], profileId: 1 },
    { lines: ["Планирование", "и развитие туризма"], profileId: 2 },
  ];

  function handleCardClick(event, profileId) {
    event.preventDefault();
    document.getElementById("profiles")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.dispatchEvent(new CustomEvent("profiles:select", { detail: profileId }));
  }

  return (
    <section className={styles.cta}>
      <div className="wrap">
        <h2 className={styles.cta__title}>
          Откройте для себя мир возможностей в туризме!
        </h2>
        <p className={styles.cta__subtitle}>
          Начните карьеру в одной из самых перспективных и вдохновляющих отраслей.
        </p>

        <div className={styles.cta__cards}>
          {cards.map((card, i) => (
            <a
              key={i}
              href="#profiles"
              className={styles.cta__card}
              onClick={(event) => handleCardClick(event, card.profileId)}
            >
              <img className={styles.cta__arrow} src={arrow} alt="" />
              <span className={styles.cta__cardTitle}>
                <Lines lines={card.lines} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
