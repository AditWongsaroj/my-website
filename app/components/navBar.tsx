"use client";

import Link from "next/link";
import Menu from "../../public/menuSVG";
import { useState } from "react";
import styles from "./navBar.module.css";

function Links() {
  return (
    <>
      <div className={styles.grid}>
        <Link href="/profile" className={styles.card}>
          <h2>
            <span>-&gt;</span> Profile
          </h2>
          <p>About me</p>
        </Link>

        <Link href="/projects" className={styles.card}>
          <h2>
            <span>-&gt;</span> Projects
          </h2>
          <p>Stuff I&apos;ve done</p>
        </Link>

        <Link href="/" className={styles.card}>
          <h2>
            <span>-&gt;</span> Patreon
          </h2>
          <p>Contant me</p>
        </Link>
      </div>
    </>
  );
}

export function NavBar() {
  const [active, setActive] = useState(true);
  const onClick = () => setActive(!active);

  if (
    typeof window !== "undefined" &&
    window?.innerWidth < 300 &&
    active != true
  ) {
    setActive(true);
  }
  return (
    <>
      <div
        className={styles.nav}
        onPointerEnter={() => setActive(true)}
        onClick={onClick}
      >
        <Menu />
      </div>
      {active ? <Links /> : null}
    </>
  );
}
