import { useState } from "react";
import styles from "../styles/main.module.css"

export default function Home() {
  const [input, setInput] = useState("");
  return (
    <>
    <div className={styles.items}>
      <h1>ChatBot!!!</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className={styles.input}
      />
      <p>{input}</p>
    </div>
    </>
  );
}
