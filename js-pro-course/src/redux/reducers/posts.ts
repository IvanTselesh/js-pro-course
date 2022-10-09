import {AnyAction} from "redux";
import {IPost} from "../../types/post";
import {ACTIONS} from "../constants";

export interface IPostsState {
  likedPosts: IPost[]
  markedPosts: IPost[]
};

const defaultState: IPostsState = {
  likedPosts: [],
  markedPosts: [],
};

export const postsReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.LIKE_POST:
      const post = action.post;
      const newLikedPost = state.likedPosts.concat([post]);

      return {
        ...state,
        likedPosts: newLikedPost,
      }
    default:
      return state;
  };
};