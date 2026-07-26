import styles from "./About.module.scss";
import AboutInfo from "./AboutInfo";
import AboutText from "./AboutText";

export default function About() {
  return (
    <>
      <section className={styles.about}>
        <div className="wrap">
          <div className={styles.about__container}>
            <AboutText />
            <AboutInfo />
          </div>
        </div>
      </section>
    </>
  );
}
