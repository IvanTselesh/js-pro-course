import {NavLink} from "react-router-dom";
import styles from "./style.module.css";

export const Toggle = () => {
  return (
    <div className={styles.toggle}>
      <NavLink className={styles.toggleNavlink} to="/login">Login</NavLink>
      <p>|</p>
      <NavLink className={styles.toggleNavlink} to="/registration">Registration</NavLink>
    </div>
  )
};