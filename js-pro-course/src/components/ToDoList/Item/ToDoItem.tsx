import React from "react";
import {Button} from "../../Button/Button";
import styles from "./style.module.css";

interface IItem {
    text: string
    onClickRemove: () => void
}

export const Item = (props: IItem) => {
    return (
        <div className={styles.toDoItem}>
            <p className={styles.toDoItemContent}>{props.text}</p>
            <Button text="Remove" onClick={props.onClickRemove} disabled={false} type="primary" />
        </div>
    )
}