"use client";

import Link from "next/link";
import Menu from "../../public/menuSVG";
import { useState } from "react";
import styles from "./navBar.module.css";

function Links() {
  return (
    <>
      <div className={styles.grid}>
        <Link href="/" className={styles.card}>
          <h2>
            <span>-&gt;</span> /home
          </h2>
        </Link>

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

        <Link href="/patrician" className={styles.card}>
          <h2>
            <span>-&gt;</span> Patrician
          </h2>
          <p>Contant me</p>
        </Link>
      </div>
    </>
  );
}

export default function NavBar() {
  return (
    <>
      <div className={styles.nav}>
        <Menu />
      </div>
      <Links />
    </>
  );
}
