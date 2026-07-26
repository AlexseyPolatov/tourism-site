import { Fragment } from "react";
import styles from "./Advantages.module.scss";

function Lines({ lines }) {
  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && " "}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
}

export default function AdvantagesCard({ card }) {
  const classNames = [
    styles.advantage,
    card.row2 ? styles.advantage_row2 : "",
    card.wide ? styles.advantage_wide : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li
      className={classNames}
      style={{ "--min-height-mobile": card.minHeightMobile }}
    >
      <h3 className={styles.advantage__title}>
        <Lines lines={card.title} />
      </h3>

      <ul className={styles.advantage__list}>
        {card.items.map((item, i) => (
          <li key={i} className={styles.advantage__item}>
            <Lines lines={item} />
          </li>
        ))}
      </ul>

      <picture>
        {card.imgMobile && (
          <source media="(max-width: 720px)" srcSet={card.imgMobile} />
        )}
        <img
          className={styles.advantage__img}
          style={{
            "--img-width": card.imgWidth,
            "--img-width-mobile": card.imgWidthMobile || card.imgWidth,
          }}
          src={card.img}
          alt=""
        />
      </picture>
    </li>
  );
}
