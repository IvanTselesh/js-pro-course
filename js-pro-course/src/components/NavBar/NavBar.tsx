import React from "react";
import cross from "../../assets/images/cross.svg";
import styles from "./style.module.css";

interface INavBar {
  onClose: () => void
}

export const NavBar = ({onClose}: INavBar) => {


  return (
    <div className={styles.navBar}>
      <div className={styles.mainMenu}>
        <div className={styles.menu}>
          <button className={styles.closeButton} onClick={onClose}>
            <img src={cross} className={styles.closeButtonImg} alt="closeBtn"/>
          </button>
          <ul>
            <li>
              <a>Login</a>
            </li>
            <li>
              <a>Registration</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}