import React, {ReactEventHandler, useState} from "react";
import styles from "./style.module.css"
import noImage from "./no-image.jpg";
import {IPost} from "../../../types/post";

interface IProps extends IPost {
  className?: string
}

export const PostItem = (props: IProps) => {
  const [image, setImage] = useState(props.image);

  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setImage('./no-image.jpg')
  };

    return (
        <div id={`${props.id}`} className={styles.itemWrap}>
            <div className={styles.itemWrapImg}>
                {image ? <img className={styles.Img} src={props.image} alt={`${props.id + 1}`} onError={handleError} /> : <img src={"./no-image.jpg"} alt={`${props.id + 1}`} />}
            </div>
            <div className={styles.itemWrapContent}>
                <h3>{props.title}</h3>
                <p className={styles.itemWrapContentText}>{props.text}</p>
                <p className={styles.itemWrapContentDate}>{props.date}</p>
            </div>
        </div>
    );
};
