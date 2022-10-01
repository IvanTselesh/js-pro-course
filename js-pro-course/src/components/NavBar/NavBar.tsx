import React, {useContext} from "react";
import cross from "../../assets/images/cross.svg";
import styles from "./style.module.css";
import {DarkModeToggle} from "../DarkModeToggle/DarkModeToggle";
import {Context} from "../../App";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {Button} from "../Button/Button";

interface INavBar {
  onClose: () => void
}

export const NavBar = ({onClose}: INavBar) => {
  const {isDark, setIsDark, user, setUser} = useContext(Context);
  const navigate = useNavigate();

  const handleOnChange =() => {
    if(isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    };
    //2 setIsDark(!isDark);
  };

  const logout = () => {
    navigate("/");
    setUser(null);
    localStorage.clear();
  }

  return (
    <div className={isDark ? styles.navBarDark : styles.navBar}>
      <div className={styles.mainMenu}>
        <div className={styles.menu}>
          <button className={styles.closeButton} onClick={onClose}>
            <img src={cross} className={isDark ? styles.closeButtonImgDark : styles.closeButtonImg} alt="closeBtn"/>
          </button>
          <ul>
            {user ? (
              <>
                <li>
                  <Link to="/">All posts</Link>
                </li>
                <li>
                  <Link to="/myposts">My posts</Link>
                </li>
                <li>
                  <Link to="/add-post">Add new post</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">All posts</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/registration">Registration</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        {user ? <Button text="Logout" onClick={logout} disabled={false} styleBtn="button" /> : null}
        <DarkModeToggle inputChecked={false} onChange={handleOnChange} />
      </div>
    </div>
  )
}