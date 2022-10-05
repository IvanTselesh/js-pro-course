import {useEffect, useState} from "react";
import {IPost} from "../../types/post";
import {useNavigate} from "react-router-dom";
import {fetchMyPosts} from "../../api/posts";
import {PostList} from "../PostsList/List/PostList";
import styles from "./style.module.css";

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

  return (
    <>
      {isLoading ? <div className={styles.loader}><span></span></div> : (<>
        <PostList posts={posts} onClickPost={navigateToSelectedPost} />
      </>)}
    </>
  )

};