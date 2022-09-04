import React from "react";
import {PostItem} from "../PostItem/PostItem";
import {IPost} from "../../../types/post";
import styles from "./style.module.css";

const generateUniqueId = () => {
    return "_" + Math.random().toString(16).slice(2);
};

interface IProps {
    posts: IPost[]
}

export const PostList = (props: IProps) => {
    return (
        <div className={styles.listWrap}>
            {props.posts.map((item) => (
                <PostItem
                    key={item.id}
                    image={item.image}
                    text={item.text}
                    date={item.date}
                    title={item.title}
                    id={item.id}
                    lesson_num={item.lesson_num}
                    author={item.author}
                />
            ))}
        </div>
    );
};