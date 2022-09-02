import React from "react";
import styles from "./style.module.css";

interface Input {
    placeholder?: string
    value: string
}

export const Input = (props: Input) => {
    return (
        <input
            className={styles.input}
            value={props.value}
            placeholder={props.placeholder}
        ></input>
    );
};