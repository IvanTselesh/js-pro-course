import React from "react";
import styles from "./style.module.css";

interface IDarkModeToggle {
  inputChecked: boolean
  onChange: () => void
}

export const DarkModeToggle = (props: IDarkModeToggle) => {
  return (
    <div className={styles.switchCheckbox}>
      <label className={styles.switch}>
        <input type="checkbox" onChange={props.onChange} checked={props.inputChecked} />
        <span className={styles.slider}> </span>
      </label>
    </div>
  )
};