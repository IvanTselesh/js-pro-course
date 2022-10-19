import {IPost} from "../../types/post";
import {ACTIONS} from "../constants";
import {Dispatch} from "redux";
import {TState} from "../store";
import {fetchResponse} from "../../api/posts";

export const likePost = (post: IPost) => {
  return { type: ACTIONS.LIKE_POST, post };
};

export const setAllPosts = (posts: IPost[]) => {
  return {
    type: ACTIONS.SET_ALL_POSTS,
    posts,
  };
};

export const loadAppPosts = (searchText: string) => {
  return (dispatch: Dispatch, getState: () => TState) => {
    const { postsReducer } = getState();
    const posts = postsReducer.allPosts;

    fetchResponse(searchText, posts.length)
      .then((values) => {
        if(values.count > values.results.length) {
          dispatch(setShowLoadMore(true));
        } else {
          dispatch(setShowLoadMore(true));
        }

        if (posts.length !== 0) {
          dispatch(setAllPosts(posts.concat(values.results)));
        } else {
          dispatch(setAllPosts(values.results));
        }
      })
      .finally(() => {
      dispatch(setIsLoading(false))
    })
  }
};

export const setIsLoading = (isLoading: boolean) => {
  return {
    type: ACTIONS.SET_IS_LOADING,
    isLoading,
  };
};


export const setShowLoadMore = (showLoadMore: boolean) => {
  return {
    type: ACTIONS.SET_SHOW_LOAD_MORE,
    showLoadMore,
  };
};

export const loadMorePosts = (searchText: string) => {
  return (dispatch: Dispatch, getState: () => TState) => {
    const allPosts = getState().postsReducer.allPosts;
    const promise = fetchResponse(searchText, allPosts.length);

    promise.then((values) => {
      if (values.results.length + allPosts.length === values.count) {
        dispatch(setShowLoadMore(false));
      }

      dispatch(setAllPosts(allPosts.concat(values.results)));
    });
  };

};+