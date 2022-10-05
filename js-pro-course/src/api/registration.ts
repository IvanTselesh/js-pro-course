import {tmsFetch} from "../utils/fetch";

export const registrateUser = (username: string, email: string, password: string) => {
  const body = {
    username: username,
    email: email,
    password: password,
  };

  return fetch('https://studapi.teachmeskills.by/auth/users/', {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    }
  });
};

export const loginUser = (email: string, password: string) => {
  return fetch("https://studapi.teachmeskills.by/auth/jwt/create/", {
    method: 'POST',
    body: JSON.stringify({email, password}),
    headers: {
      "Content-Type": "application/json",
    }
  });
};

export const activateUser = (uid: string, token: string) => {
  return fetch("https://studapi.teachmeskills.by/auth/users/activation/", {
    method: 'POST',
    body: JSON.stringify({uid, token}),
    headers: {
      "Content-Type": "application/json",
    }
  });
};

export const getUser = () => {
  const access = localStorage.getItem('access');

  tmsFetch("https://studapi.teachmeskills.by/auth/users/me", {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
    }
  })
};

export const refreshToken = () => {
  const refresh = localStorage.getItem('refresh');

  fetch("https://studapi.teachmeskills.by/auth/jwt/refresh/", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh }),
  })
}
