import React, {ReactNode, useContext} from "react";
import styles from "./style.module.css";
import {Context} from "../../App";

interface IContainer {
  children: ReactNode
}

export const Container = ({children}: IContainer) => {
  const { isDark } = useContext(Context);
  return (
    <div className={isDark ? styles.darkContainer : styles.container}>
      {children}
    </div>
  )
}