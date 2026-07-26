import { Fragment, useEffect, useState } from "react";
import styles from "./Profiles.module.scss";
import num1 from "../../assets/icons/1..svg";
import num2 from "../../assets/icons/2..svg";
import num3 from "../../assets/icons/3..svg";
import num4 from "../../assets/icons/4..svg";

function Lines({ lines }) {
  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
}

export default function ProfilesCard() {
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    function handleSelect(event) {
      setActiveId(event.detail);
    }

    window.addEventListener("profiles:select", handleSelect);
    return () => window.removeEventListener("profiles:select", handleSelect);
  }, []);

  const profiles = [
    {
      id: 1,
      tabText: "Бизнес-процессы в сфере туризма и гостеприимства",
      tabTextDesktopLines: ["Бизнес-процессы в сфере туризма", "и гостеприимства"],
      activeClass: styles.profile__tabBlue,
      note: "Идеально для тех, кто стремится к управленческим позициям в туристической индустрии и гостиничном бизнесе.",
      cards: [
        {
          id: 1,
          icon: num1,
          text: "Управляйте предприятиями туризма и гостиничного бизнеса",
        },
        {
          id: 2,
          icon: num2,
          text: "Совершенствуйте внутренние процессы, повышая их эффективность",
        },
        {
          id: 3,
          icon: num3,
          text: "Разрабатывайте маркетинговые стратегии для привлечения клиентов",
        },
        {
          id: 4,
          icon: num4,
          text: "Организуйте международные и национальные события, реализуйте масштабные event-проекты",
        },
      ],
    },
    {
      id: 2,
      tabText: "Планирование и развитие туризма",
      activeClass: styles.profile__tabWhite,
      note: "Подходит для тех, кто хочет работать в стратегическом планировании и территориальном развитии.",
      cards: [
        {
          id: 1,
          icon: num1,
          text: "Создавайте программы и дорожные карты развития туристско-рекреационных зон и кластеров",
        },
        {
          id: 2,
          icon: num2,
          text: "Развивайте туризм в регионах на основе рекреационного потенциала",
        },
        {
          id: 3,
          icon: num3,
          text: "Работайте с местными сообществами для формирования устойчивого туризма",
        },
        {
          id: 4,
          icon: num4,
          text: "Участвуйте в международных проектах и программах развития туризма",
        },
      ],
    },
  ];

  function renderTab(profile, mobile) {
    const isActive = profile.id === activeId;
    const classes = [styles.profile__tab];
    if (isActive) classes.push(profile.activeClass);
    if (mobile) classes.push(styles.profile__tabMobile);

    const desktopLines = !mobile && profile.tabTextDesktopLines;

    return (
      <button
        key={mobile ? undefined : profile.id}
        type="button"
        className={classes.join(" ")}
        onClick={() => setActiveId(profile.id)}
      >
        {desktopLines ? (
          <Lines lines={desktopLines} />
        ) : (
          profile.tabText
        )}
      </button>
    );
  }

  return (
    <>
      <div className={styles.profile__tabs}>
        {profiles.map((profile) => renderTab(profile, false))}
      </div>

      {profiles.map((profile) => (
        <div
          key={profile.id}
          className={
            profile.id === activeId
              ? styles.profile__panel
              : `${styles.profile__panel} ${styles.profile__panelInactive}`
          }
        >
          {renderTab(profile, true)}

          <ul
            className={
              profile.id === 2
                ? `${styles.profile__cards} ${styles.profile__cardsAlt}`
                : styles.profile__cards
            }
          >
            {profile.cards.map((info) => (
              <li key={info.id} className={styles.profile__card}>
                <img className={styles.profile__num} src={info.icon} alt="" />
                <span>{info.text}</span>
              </li>
            ))}
          </ul>

          <p className={styles.profile__note}>{profile.note}</p>
        </div>
      ))}
    </>
  );
}
