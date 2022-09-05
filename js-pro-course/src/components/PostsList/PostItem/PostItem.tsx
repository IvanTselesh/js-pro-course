import React from "react";
import styles from "./style.module.css"
import noImage from "../../../assets/images/no-image.jpg"
import {IPost} from "../../../types/post";

export const PostItem = (props: IPost) => {
    return (
        <div id={`${props.id}`} className={styles.itemWrap}>
            <div className={styles.itemWrapImg}>
                {props.image ? <img className={styles.Img} src={props.image} alt={`${props.id + 1}`} /> : <img src={noImage} alt={`${props.id + 1}`} />}
            </div>
            <div className={styles.itemWrapContent}>
                <h3>{props.title}</h3>
                <p className={styles.itemWrapContentText}>{props.text}</p>
                <p className={styles.itemWrapContentDate}>{props.date}</p>
            </div>
        </div>
    )
};
