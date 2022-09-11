import React, {useContext} from "react";
import cross from "../../assets/images/cross.svg";
import styles from "./style.module.css";
import {DarkModeToggle} from "../DarkModeToggle/DarkModeToggle";
import {Context} from "../../App";

interface INavBar {
  onClose: () => void
}

export const NavBar = ({onClose}: INavBar) => {
  const {isDark, setIsDark} = useContext(Context);
  const handleOnChange =() => {
    if(isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    };
    //2 setIsDark(!isDark);
  };

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
        <DarkModeToggle inputChecked={false} onChange={handleOnChange} />
      </div>
    </div>
  )
}