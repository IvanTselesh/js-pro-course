import React, {MouseEventHandler} from "react";
import {PostItem} from "../PostItem/PostItem";
import {IPost} from "../../../types/post";
import styles from "./style.module.css";
import {Button} from "../../Button/Button";
import {useNavigate} from "react-router-dom";

const generateUniqueId = () => {
    return "_" + Math.random().toString(16).slice(2);
};

interface IProps {
    posts: IPost[]
    onClickDelete?: (id: number) => void
}

export const PostList = (props: IProps) => {
    const navigate = useNavigate();

    const navigateToSelectedPost = (postId: number) => {
      navigate(`/selected-post/${postId}`)
    };

    return (
      <div className={styles.container}>
          {props.posts.length !== 0 ? (
            props.posts.map((item) => {
                const clickPost = () => {
                    navigateToSelectedPost(item.id);
                };

                const onClickDelete: MouseEventHandler<HTMLButtonElement> = (event) => {
                    event.stopPropagation();
                    if(props.onClickDelete) {
                        props.onClickDelete(item.id)
                    };
                };
                return (
                  <div key={item.id} onClick={clickPost}>
                      {props.onClickDelete ? <Button
                        text="Delete Post"
                        onClick={onClickDelete}
                        disabled={false}
                        styleBtn='button' />
                        : null}
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