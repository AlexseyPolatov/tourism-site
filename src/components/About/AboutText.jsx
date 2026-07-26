import styles from "./About.module.scss";
import swirl from "../../assets/icons/hero-swirl.svg";

export default function AboutText() {
  const title = "Создавайте будущее туризма: ";
  const description =
    "управляйте бизнес-процессами, разрабатывайте стратегии развития и воплощайте амбициозные проекты!";
  return (
    <div className={styles.about__containerText}>
      <h1>{title} </h1>
      <p>{description}</p>
      <img className={styles.about__swirl} src={swirl} alt="" />
    </div>
  );
}
