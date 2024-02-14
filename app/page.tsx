import styles from "./page.module.css";
// import { Router } from "next/router";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div></div>

        <div className={styles.center}>
          <p className={styles.p}>
            Mollit id fugiat commodo ad consequat in cupidatat quis esse commodo
            ea eiusmod.
          </p>
        </div>

        <div className={styles.description}></div>
      </div>
    </main>
  );
}
