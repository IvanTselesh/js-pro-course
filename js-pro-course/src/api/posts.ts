import {tmsFetch} from "../utils/fetch";

export const fetchResponse = async (searchText: string, offset: number) => {
  const promise = await fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=6&search=${searchText}&offset=${offset}`);
  const promiseJson = await promise.json();

  return promiseJson;
};

export const  fetchMyPosts = () => {
  return tmsFetch(`https://studapi.teachmeskills.by/blog/posts/my_posts/`)
    .then((response) => {
      response.json()
    });
};

export const fetchPostsAsync = async (searchText: string, offset: number) => {
  const response = await fetch(
    `https://studapi.teachmeskills.by/blog/posts/?limit=5&search=${searchText}&offset=${offset}`
  );
  const json = await response.json();
  return json;
};

export const createPost = (body: FormData) => {
  return tmsFetch('https://studapi.teachmeskills.by/blog/posts/', {
    method: "POST",
    body: body,
  });
};

export const removePost = (id: number) => {
  return tmsFetch(`https://studapi.teachmeskills.by/blog/posts/${id}`, {
    method: "DELETE",
  });
};

export const resetPassword = (email: string) => {
  return fetch("https://studapi.teachmeskills.by/auth/users/reset_password/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email})
  });
};

export const confirmPassword = (uid: string, token: string, newPassword: string) => {
  return fetch(
    "https://studapi.teachmeskills.by/auth/users/reset_password_confirm/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid, token, new_password: newPassword }),
    }
  );
};