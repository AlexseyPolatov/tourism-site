import styles from "./Footer.module.scss";
import partner1 from "../../assets/images/footer/partner1.png";
import partner2 from "../../assets/images/footer/partner2.png";
import partner3 from "../../assets/images/footer/partner3.png";

export default function Footer() {
  const partners = [
    { src: partner1, alt: "Агентство стратегических инициатив" },
    { src: partner2, alt: "Комитет по туризму города Москвы" },
    { src: partner3, alt: "1001 Тур — сеть туристических агентств" },
  ];

  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footer__container}>
          <p className={styles.footer__copyright}>© RUDN University</p>

          <div className={styles.footer__partners}>
            {partners.map((partner, i) => (
              <img
                key={i}
                className={styles.footer__partner}
                src={partner.src}
                alt={partner.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
