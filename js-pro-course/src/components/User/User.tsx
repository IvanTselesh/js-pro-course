import React from "react";
import styles from "./style.module.css";

interface User {
    username: string
    isDark: boolean
}

export const User = (props: User) => {
    const initial = props.username.split(' ');
    const isDark = (isDark: boolean) => {
        if(props.isDark === true) {
           return styles.isDark
        } else {
            return styles.isLight
        }
    };

    return (
        <div className={`${styles.userWrap} ${isDark(props.isDark)}`}>
            <div className={styles.userWrapInitial}>
                {initial[0][0].toUpperCase()}
                {initial[1] ? initial[1][0].toUpperCase() : ""}
            </div>
            <div className={styles.userWrapContent}>
                <p>{props.username}</p>
            </div>
        </div>
    );
};