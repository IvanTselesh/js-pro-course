import React from "react";
import styles from "./style.module.css"
import imgUrl from "./no-image.jpg"

interface PostItem {
    id: string
    text: string
    date: any
    title: string
}

export const PostItem = (props: PostItem) => {
    return (
        <div id={`${props.id}`} className={styles.itemWrap}>
            <div className={styles.itemWrapImg}>
                <img src={imgUrl} />
            </div>
            <div className={styles.itemWrapContent}>
                <h3>{props.title}</h3>
                <p className={styles.itemWrapContentText}>{props.text}</p>
                <p className={styles.itemWrapContentDate}>{props.date}</p>
            </div>
        </div>
    )
};
