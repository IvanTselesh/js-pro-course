import React from "react";
import {PostItem} from "../PostItem/PostItem";
import {IPost} from "../../../types/post";
import styles from "./style.module.css";

const generateUniqueId = () => {
    return "_" + Math.random().toString(16).slice(2);
};

interface IProps {
    posts: IPost[]
    onClickPost: (id: number) => void
}

export const PostList = (props: IProps) => {
    return (
      <div className={styles.container}>
          {props.posts.length !== 0 ? (
            props.posts.map((item) => {
                const clickPost = () => {
                    props.onClickPost(item.id);
                };
                return (
                  <div key={item.id} onClick={clickPost}>
                      <PostItem
                        image={item.image}
                        text={item.text}
                        date={item.date}
                        title={item.title}
                        id={item.id}
                        lesson_num={item.lesson_num}
                        author={item.author}
                      />
                  </div>
                );
            })
          ) : (
            <p>There are no posts here</p>
          )}
      </div>
    );
};