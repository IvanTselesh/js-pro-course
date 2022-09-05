import React, {ChangeEventHandler} from "react";
import styles from "./style.module.css";

interface Input {
    placeholder?: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const Input = (props: Input) => {
    return (
        <input
            className={styles.input}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        ></input>
    );
};