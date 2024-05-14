
import styles from "@/styles/compteur.module.css";
import React, { useState } from 'react';



export default function Compteur() {
  const [compte, setCompte] = useState(0);

  return (
    <div className={styles.container}>
      <h1 className={styles.compteur}>Compteur</h1>
      <p className={styles.text}>Cliquer pour incrémenter :</p>
      <p className={styles.text2}>{compte}</p>

      <div className={styles.boutons}>
        <button className={styles.bouton} onClick={() => setCompte(compte + 1)}>
          Incrémenter
        </button>
        <button className={styles.bouton} onClick={() => compte > 0 && setCompte(compte - 1)}>
          Décrémenter
        </button>
        <button className={styles.bouton} onClick={() => setCompte(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}