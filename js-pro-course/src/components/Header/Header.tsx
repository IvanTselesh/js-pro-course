import React, {useContext, useState} from "react";
import styles from "./style.module.css";
import {NavBar} from "../NavBar/NavBar";
import menu from "../../assets/images/Menu.svg";
import {User} from "../User/User";
import {Context} from "../../App";

export const Header = () => {
  const { user, isDark } = useContext(Context);
  const [isNavBarVisible, setIsNavBerVisible] = useState(false);

  const openNavBar = () => {
    setIsNavBerVisible(true)
  }
  const closeNavBar = () => {
    setIsNavBerVisible(false)
  }
    return (
    <nav className={styles.header}>
      <div className={styles.headerDiv}>
        <button className={styles.menu} onClick={openNavBar}>
          <img src={menu} alt="menu" className={styles.menuButton} />
        </button>
        {user ? <User username={user.username} isDark={isDark} /> : null}
      </div>
      {isNavBarVisible ? <NavBar onClose={closeNavBar} /> : null}
    </nav>
  );
};