import React, {useState} from "react";
import styles from "./style.module.css";
import {NavBar} from "../NavBar/NavBar";
import menu from "../../assets/images/Menu.svg";
import {User} from "../User/User";

export const Header = () => {
  const [isNavBarVisible, setIsNavBerVisible] = useState(false);

  const openNavBar = () => {
    setIsNavBerVisible(true)
  }
  const closeNavBar = () => {
    setIsNavBerVisible(false)
  }
    return (
    <nav className={styles.header}>
      <button className={styles.menu} onClick={openNavBar}>
        <img src={menu} alt="menu" className={styles.menuButton} />
        <div className={styles.menuButton} />
      </button>
      <User username="John Wick" isDark={false} />

      {isNavBarVisible ? <NavBar onClose={closeNavBar} /> : null}
    </nav>
  );
};