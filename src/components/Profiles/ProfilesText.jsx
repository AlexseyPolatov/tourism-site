import styles from "./Profiles.module.scss";
import ProfilesCard from "./ProfilesCard";

export default function ProfilesText() {
  const title = "Профили обучения";
  const description = "В программе есть два профиля обучения, которые вы можете выбрать в зависимости от своих интересов:";

  return (
    <>
      <div className={styles.profiles__infoText}>
        <h1>{title}</h1>

        <p>{description}</p>
      </div>

      <ProfilesCard />
    </>
  );
}
