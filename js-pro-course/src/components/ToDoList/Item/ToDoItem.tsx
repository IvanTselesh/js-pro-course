import React, {useEffect} from "react";
import {Button} from "../../Button/Button";
import styles from "./style.module.css";

interface IItem {
    text: string
    onClickRemove: () => void
    checked: boolean
    onClickChecked: () => void
}

export const Item = (props: IItem) => {
    useEffect(() => {
        console.log('mounting')
    }, [])

    return (
        <div className={styles.toDoItem}>
            <input type="checkbox" checked={props.checked} onChange={props.onClickChecked}/>
            <p className={styles.toDoItemContent}>{props.text}</p>
            <Button text="Remove" onClick={props.onClickRemove} disabled={false} styleBtn="button" />
        </div>
    )
}