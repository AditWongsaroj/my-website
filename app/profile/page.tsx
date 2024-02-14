import styles from "../page.module.css";
import React from "react";

export default function ProfilePage() {
  return (
    <>
      <div className={styles.content}>
        <div>Adit Wongsaroj</div>

        <div className={styles.center}>
          <p className={styles.p}>{lorem}</p>
        </div>

        <div className={styles.description}>postscript</div>
      </div>
    </>
  );
}

const lorem = (
  <div>
    Ex anim commodo qui incididunt nulla sit id duis non mollit sint non
    commodo. Commodo Lorem ut irure et fugiat anim ipsum dolor qui. Consectetur
    aute cillum elit consequat incididunt aliqua tempor voluptate eu in deserunt
    adipisicing. Nostrud commodo pariatur eu ut dolore. Do qui proident dolore
    exercitation sunt consequat ad do consequat consectetur nostrud nulla.
    <br />
    <br />
    Nisi fugiat excepteur ullamco aliqua ad velit non aute deserunt officia
    veniam et ipsum. Amet magna quis nulla esse occaecat sint. Qui nisi proident
    deserunt laboris ipsum occaecat nostrud sunt. Ea tempor ad aliqua fugiat
    quis ex pariatur id nisi magna tempor.
    <br />
    <br />
    Ad enim anim excepteur id nostrud excepteur sint reprehenderit Lorem qui
    commodo non voluptate quis. Veniam qui culpa sit ea do aliquip adipisicing
    proident. Et sint ut cupidatat exercitation eiusmod cupidatat consectetur
    magna anim quis commodo sint exercitation. Enim deserunt elit sit incididunt
    magna quis esse amet do incididunt velit. Esse labore laborum eiusmod
    laborum aute sint.
    <br />
    <br />
    Dolore adipisicing sint ut ut nostrud tempor officia officia duis. Et veniam
    amet incididunt non sit laboris enim velit labore cupidatat. Officia irure
    nostrud et incididunt occaecat sint Lorem cillum ad non nulla. Consequat
    fugiat do quis incididunt ipsum duis magna do elit ipsum. Do eiusmod
    pariatur ea excepteur. Minim incididunt veniam aliquip officia deserunt
    consectetur fugiat culpa consequat esse velit.
  </div>
);
