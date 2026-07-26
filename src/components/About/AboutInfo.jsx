import styles from "./About.module.scss";
import travelerImage from "../../assets/images/traveler.png";
import travelerImageMobile from "../../assets/images/traveler-mobile.png";
import flightImage from "../../assets/images/flight.png";
import flightImageMobile from "../../assets/images/flight=mobile.png";
import hsmLogo from "../../assets/images/HSM.png";

export default function AboutInfo() {
  const paragraphs = [
    "это возможность стать профессионалом, который знает, как управлять туристическими проектами, оптимизировать бизнес-процессы и планировать развитие территорий.",
    "Программа готовит экспертов, способных решать стратегические задачи и внедрять инновации в сфере туризма и гостеприимства.",
  ];

  const tags = [
    "Срок обучения: 2 года",
    "Стоимость обучения: 300 000 ₽",
    "Форма обучения: очная",
  ];

  return (
    <div className={styles.about__info}>
      <div className={styles.about__infoText}>
        <h2 className={styles.about__infoTitle}>
          Магистратура
          <br />
          по направлению «Туризм» –
        </h2>

        <div className={styles.about__infoDescription}>
          {paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <ul className={styles.about__infoTags}>
          {tags.map((tag) => (
            <li key={tag} className={styles.about__tag}>
              {tag}
            </li>
          ))}
        </ul>

        <p className={styles.about__infoCaption}>
          *актуально для приёма 2026 года
        </p>
      </div>

      <div
        className={styles.about__infoImages}
        style={{
          "--traveler-bg": `url(${travelerImage})`,
          "--flight-bg": `url(${flightImage})`,
          "--traveler-bg-mobile": `url(${travelerImageMobile})`,
          "--flight-bg-mobile": `url(${flightImageMobile})`,
        }}
      >
        <img
          className={styles.about__badge}
          src={hsmLogo}
          alt="Высшая школа управления"
        />
      </div>
    </div>
  );
}
