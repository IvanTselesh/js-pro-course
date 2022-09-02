import React from "react";
import styles from "./style.module.css";

interface Props {
    text: string
    onClick: () => void
}

export const Button = (props: Props) => {
    return (
        <button className={styles.button} onClick={props.onClick}>{props.text}</button>
    );
};