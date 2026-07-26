import styles from "./Contacts.module.scss";
import envelopeIcon from "../../assets/icons/contacts/Envelope.svg";
import phoneIcon from "../../assets/icons/contacts/phone.svg";
import locationIcon from "../../assets/icons/contacts/location.svg";

export default function Contacts() {
  const items = [
    { icon: envelopeIcon, text: "hsm@pfur.ru", href: "mailto:hsm@pfur.ru" },
    { icon: phoneIcon, text: "+7 (999) 880-45-67", href: "tel:+79998804567" },
    { icon: locationIcon, text: "г. Москва, ул. Миклухо-Маклая, д. 6 ауд. 172" },
  ];

  return (
    <section className={styles.contacts} id="contacts">
      <div className="wrap">
        <div className={styles.contacts__container}>
          <h2 className={styles.contacts__title}>Контакты:</h2>

          <ul className={styles.contacts__list}>
            {items.map((item, i) => {
              const content = (
                <>
                  <img className={styles.contacts__icon} src={item.icon} alt="" />
                  <span className={styles.contacts__text}>{item.text}</span>
                </>
              );

              return (
                <li key={i} className={styles.contacts__item}>
                  {item.href ? (
                    <a href={item.href} className={styles.contacts__itemLink}>
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
