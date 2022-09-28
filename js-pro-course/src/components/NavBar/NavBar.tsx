import React, {useContext} from "react";
import cross from "../../assets/images/cross.svg";
import styles from "./style.module.css";
import {DarkModeToggle} from "../DarkModeToggle/DarkModeToggle";
import {Context} from "../../App";
import {Link, NavLink} from "react-router-dom";

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
    <div className={isDark ? styles.navBarDark : styles.navBar}>
      <div className={styles.mainMenu}>
        <div className={styles.menu}>
          <button className={styles.closeButton} onClick={onClose}>
            <img src={cross} className={isDark ? styles.closeButtonImgDark : styles.closeButtonImg} alt="closeBtn"/>
          </button>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
        </div>
        <DarkModeToggle inputChecked={false} onChange={handleOnChange} />
      </div>
    </div>
  )
}