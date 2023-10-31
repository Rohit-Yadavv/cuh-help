import styles from "./nav.module.css"
const Nav = () => {
  return (
    <nav className={styles.navWrapper}>
        <div className={styles.wrapper}>
          <div className={styles.logo}></div>
          <div className={styles.navLinks}></div>
        </div>
    </nav>
  )
}

export default Nav