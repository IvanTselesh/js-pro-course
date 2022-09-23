import React from "react";
import styles from "./style.module.css";

interface IDarkModeToggle {
  inputChecked: boolean
  onChange: () => void
}

export const DarkModeToggle = ({inputChecked, onChange}: IDarkModeToggle) => {
  return (
    <div className={styles.switchCheckbox}>
      <label className={styles.switch}>
        <input type="checkbox" onChange={onChange} checked={inputChecked} />
        <span className={styles.slider}> </span>
      </label>
    </div>
  )
};