import styles from './Profiles.module.scss'
import ProfilesText from './ProfilesText'
import lineLeft from '../../assets/icons/about__line-left.png'
import lineRight from '../../assets/icons/about__line-right.png'

export default function Profiles() {
  return (
    <section className={styles.profiles} id="profiles">
      <div className="wrap">
        <div className={styles.profiles__container}>
          <img className={styles.profiles__lineRight} src={lineRight} alt="" />
          <img className={styles.profiles__lineLeft} src={lineLeft} alt="" />

          <ProfilesText />
        </div>
      </div>
    </section>
  )
}
