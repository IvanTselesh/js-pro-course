import React from "react";
import styles from "./style.module.css";

interface Props {
    text: string
    onClick: () => void
    disabled: boolean
    type: "primary" | "secondary" | "secondary2"
}

const getButtonStyle = (type: "primary" | "secondary" | "secondary2") => {
    if (type === 'primary') {
        return styles.primary
    }
    if (type === 'secondary') {
        return styles.secondary
    }
    if (type === 'secondary2') {
        return styles.secondary
    }
};


export const Button = (props: Props) => {
    return (
        <button className={`${styles.button} ${getButtonStyle(props.type)}`} onClick={props.onClick}>{props.text}</button>
    );
};