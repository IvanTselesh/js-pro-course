import React from "react";
import styles from "./style.module.css";

interface User {
    username: string
}

export const User = (props: User) => {
    return (
        <div className={styles.userWrap}>
            <div className={styles.userWrapImg}>
                <img alt="no-img"/>
            </div>
            <div className="user-wrap-content">
                <p>{props.username}</p>
            </div>
        </div>
    );
};