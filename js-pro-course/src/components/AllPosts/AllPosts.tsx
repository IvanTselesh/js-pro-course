import React, {ChangeEventHandler, useEffect, useState} from "react";
import {IPost} from "../../types/post";
import {PostList} from "../PostsList/List/PostList";
import {useNavigate} from "react-router-dom";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import styles from "./style.module.css";
import {fetchResponse} from "../../api/posts";
import {useDispatch, useSelector} from "react-redux";
import {TState} from "../../redux/store";
import {loadAppPosts, loadMorePosts, setAllPosts} from "../../redux/actions/post";

export const AllPosts = () => {
    const posts = useSelector((state: TState) => {state.postsReducer.allPosts});
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
  const isLoading = useSelector(
    (state: TState) => state.postsReducer.isLoading
  );
  const showLoadMore = useSelector(
    (state: TState) => state.postsReducer.showLoadMore
  );


  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value)
  };

    useEffect(() => {
      dispatch(loadAppPosts(searchText) as any)
    }, [searchText])

    const loadMore = () => {
      dispatch(loadMorePosts(searchText) as any);
    }

    return (
      <div>
          <Input value={searchText} onChange={handleOnChange} />
        {isLoading ? <div className={styles.loader}></div> : <div>
          <PostList posts={posts} />
          {showLoadMore ? <Button text="Load More" onClick={loadMore} disabled={false} styleBtn="button" /> : null}
        </div>}
      </div>
    )
}