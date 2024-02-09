import styles from "./page.module.css";
import Social_links from "./components/social_links";
import { NavBar } from "./components/navBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <NavBar />
      </nav>
      <div className={styles.content}>
        <div></div>
        <div className={styles.center}>center</div>

        <div className={styles.description}>
          <Social_links />
        </div>
      </div>
    </main>
  );
}
