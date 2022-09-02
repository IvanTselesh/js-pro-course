import React from "react";
import styles from "./style.module.css";

interface Title {
    text: string
}

export const Title = (props: Title) => {
    return (
        <h1 className={styles.h1}>{props.text}</h1>
    );
};