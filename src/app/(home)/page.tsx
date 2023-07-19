import Link from "next/link";
import styles from "./home.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Make your moment forever</p>
        <div>By Peanut Cookie</div>
      </div>

      <div className={styles.center}>
        <h1>Memories</h1>
      </div>

      <div className={styles.grid}>
        <div />
        <Link
          href="/discover"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Discover <span>&gt;</span>
          </h2>
          <p>Find all memories on the blockchain.</p>
        </Link>

        <Link href="/mint" className={styles.card} rel="noopener noreferrer">
          <h2>
            Mint <span>&gt;</span>
          </h2>
          <p>Mint your memory</p>
        </Link>
        <div />
      </div>
    </main>
  );
}
