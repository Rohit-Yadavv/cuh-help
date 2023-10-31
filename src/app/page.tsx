import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.mainWrapper}>

      {/* image */}
      <div className={styles.imageWrapper}>
          <h1 className={styles.heading}>Hi There</h1>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>Get Started</button>
        </div>
      </div>

      {/* department  */}
      <div className={styles.depWrapeer}>
    
      </div>

    </main>
  )
}
