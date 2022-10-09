import {useEffect, useState} from "react";
import {IPost} from "../../types/post";
import {useNavigate} from "react-router-dom";
import {fetchMyPosts, removePost} from "../../api/posts";
import {PostList} from "../PostsList/List/PostList";
import styles from "./style.module.css";
import { NotificationManager } from "react-notifications";

export const MyPostsList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMyPosts()
      .then((values: any) => {
        if(values?.status === 404) {
          setPosts([]);
        } else {
          setPosts(values);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const navigateToSelectedPost = (postId: number) => {
    navigate(`/selectedPost/${postId}`);
  };

  const deletePost = (postId: number) => {
    setIsLoading(true);
    removePost(postId).then((response) => {
      if(response.ok) {
        const newPosts = posts.filter((item) => {
          if(item.id === postId) {
            return false;
          }

          return true;
        });

        setPosts(newPosts);

        NotificationManager.success('Post delete', 'Post has been removed');
      } else {
        NotificationManager.success('Post delete', 'Post hasn`t been removed');
      };
    }).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <>
      {isLoading ? <div className={styles.loader}><span></span></div> : (<>
        <PostList posts={posts} onClickPost={navigateToSelectedPost} onClickDelete={deletePost}/>
      </>)}
    </>
  )

};