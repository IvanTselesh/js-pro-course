import React, {MouseEventHandler, ReactEventHandler, useContext, useEffect, useState} from "react";
import styles from "./style.module.css"
import noImage from "./no-image.jpg";
import { IPost } from "../../../types/post";
import { Context } from "../../../App";
import { useDispatch } from "react-redux";
import { like } from "../../../assets/assets";
import { bookmark } from "../../../assets/assets";
import {likePost} from "../../../redux/actions/post";

interface IProps extends IPost {
  className?: string
  type?: "light" | "dark"
}

export const PostItem = (props: IProps) => {
  const [image, setImage] = useState(props.image);
  const { isDark, user } = useContext(Context);
  const [color, setColor] = useState<'light' | 'dark'>('light');
  const dispatch = useDispatch();
  const { ...posts } = props;

  useEffect(() => {
    if(color === 'light') {
      setColor('dark')
    }
    if(color === 'dark') {
      setColor('light')
    }
  }, [isDark]);

  const handleLikePost: MouseEventHandler<HTMLImageElement> = (event) => {
    event.stopPropagation();
    dispatch(likePost(posts));
  };

  const choiceType = (color: 'light' | 'dark') => {
    if(color === 'dark') {
      return styles.dark
    }
    if(color === 'light') {
      return styles.light
    };
  };


  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setImage('./no-image.jpg')
  };

    return (
        <div id={`${props.id}`} className={`${styles.itemWrap} ${choiceType(color)}`}>
            <div className={styles.itemWrapImg}>
                {image ? <img className={styles.Img} src={props.image} alt={`${props.id + 1}`} onError={handleError} /> : <img src={noImage} alt={`${props.id + 1}`} />}
            </div>
            <div className={styles.itemWrapContent}>
                <h3>{props.title}</h3>
                <p className={styles.itemWrapContentText}>{props.text}</p>
                <p className={styles.itemWrapContentDate}>{props.date}</p>
            </div>
          {user ? (
            <>
              <img src={bookmark} />
              <img src={like} onClick={handleLikePost} />
            </>
          ) : null}
        </div>
    );
};
