import styles from "./Advantages.module.scss";
import AdvantagesCard from "./AdvantagesCard";
import card1 from "../../assets/images/advantage/card-1.png";
import card2 from "../../assets/images/advantage/card-2.png";
import card3 from "../../assets/images/advantage/card-3.png";
import card4 from "../../assets/images/advantage/card-4.png";
import card5 from "../../assets/images/advantage/card-5.png";
import card1Mobile from "../../assets/images/advantage/card-1__mobile.png";
import card2Mobile from "../../assets/images/advantage/card-2__mobile.png";
import card3Mobile from "../../assets/images/advantage/card-3__mobile.png";
import card4Mobile from "../../assets/images/advantage/card-4__mobile.png";
import card5Mobile from "../../assets/images/advantage/card-5__mobile.png";

export default function Advantages() {
  const title = "Преимущества магистратуры по туризму";

  const cards = [
    {
      id: 1,
      title: ["Современные подходы", "к обучению"],
      items: [
        [
          "Обучение строится на реальных",
          "кейсах, проектной работе,",
          "стажировках и использовании",
          "цифровой аналитики",
          "для управленческих",
          "решений.",
        ],
      ],
      img: card1,
      imgMobile: card1Mobile,
      imgWidth: "68.97%",
      imgWidthMobile: "73%",
      minHeightMobile: "21.0625rem",
    },
    {
      id: 2,
      title: ["Международные", "перспективы"],
      items: [
        ["Участие в программах", "обмена и международных", "конференциях."],
        ["Возможность", "изучать", "мировой опыт", "в сфере", "туризма."],
      ],
      img: card2,
      imgMobile: card2Mobile,
      imgWidth: "70.2%",
      imgWidthMobile: "59%",
      minHeightMobile: "22.8125rem",
    },
    {
      id: 3,
      title: ["Связь с практикой"],
      items: [
        [
          "Программа реализуется при",
          "участии ключевых российских",
          "и зарубежных партнеров",
          "туристической отрасли.",
        ],
        ["Преподаватели –", "практики", "с большим", "опытом", "в индустрии."],
      ],
      img: card3,
      imgMobile: card3Mobile,
      imgWidth: "64.78%",
      imgWidthMobile: "65%",
      minHeightMobile: "25.625rem",
    },
    {
      id: 4,
      title: ["Индивидуальная", "траектория обучения"],
      items: [
        [
          "Возможность выбирать",
          "курсы и проекты",
          "в зависимости",
          "от ваших",
          "карьерных",
          "целей.",
        ],
      ],
      img: card4,
      imgMobile: card4Mobile,
      imgWidth: "71.43%",
      imgWidthMobile: "62%",
      minHeightMobile: "20rem",
      row2: true,
    },
    {
      id: 5,
      title: ["Реальные карьерные перспективы"],
      items: [
        [
          "Выпускники магистратуры востребованы",
          "в туристической индустрии, консалтинге,",
          "государственном и муниципальном",
          "управлении, гостиничном бизнесе,",
          "международном туризме, брендинге",
          "территорий и стратегическом развитии",
          "туризма.",
        ],
      ],
      img: card5,
      imgMobile: card5Mobile,
      imgWidth: "54.04%",
      imgWidthMobile: "66%",
      minHeightMobile: "28.5625rem",
      row2: true,
      wide: true,
    },
  ];

  return (
    <section className={styles.advantages}>
      <div className="wrap">
        <h2 className={styles.advantages__title}>{title}</h2>

        <ul className={styles.advantages__cards}>
          {cards.map((card) => (
            <AdvantagesCard key={card.id} card={card} />
          ))}
        </ul>
      </div>
    </section>
  );
}
