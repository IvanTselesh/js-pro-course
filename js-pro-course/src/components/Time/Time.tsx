import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

export const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <p className={styles.time}>{time}</p>
  )
};