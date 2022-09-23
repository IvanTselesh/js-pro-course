import React, {ChangeEventHandler, useEffect, useState} from "react";
import {IPost} from "../../types/post";
import {PostList} from "../PostsList/List/PostList";
import {useNavigate} from "react-router-dom";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import styles from "./style.module.css";
import {fetchResponse} from "../../api/posts";

export const AllPosts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const navigate = useNavigate();
    const [showLoadMore, setShowLoadMore] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value)
  };

    const navToPost = (id: number) => {
        navigate(`/posts/${id}`)
    };

    useEffect(() => {
      setIsLoading(true);

      fetchResponse(searchText, posts.length)
        .then((values) => {
          if(values.count > values.results.length) {
            setShowLoadMore(true)
          } else {
            setShowLoadMore(false)
          }
          setPosts(values.results)
        }).finally(() => {
        setIsLoading(false)
      })
    }, [searchText])

    const loadMore = () => {
        const promise = fetchResponse(searchText, posts.length);
          promise.then((values) => {
              if(values.results.length + posts.length === values.count) {
                setShowLoadMore(false)
              };
              setPosts(posts.concat(values.results));
          });
    }

    return (
      <div>
          <Input value={searchText} onChange={handleOnChange} />
        {isLoading ? <div className={styles.loader}></div> : <div>
          <PostList posts={posts} onClickPost={navToPost} />
          {showLoadMore ? <Button text="Load More" onClick={loadMore} disabled={false} styleBtn="button" /> : null}
        </div>}
      </div>
    )
}