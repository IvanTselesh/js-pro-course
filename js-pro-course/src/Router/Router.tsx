import React, {ReactNode, useContext} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Main} from "../components/Pages/MainPage/Main";
import {LoginPage} from "../components/Pages/LoginPage/Login";
import {RegistrationPage} from "../components/Pages/RegistrationPage/RegistrationPage";
import {FullPost} from "../components/Pages/FullPost/FullPost";
import {RegConfirm} from "../components/Pages/RegConfirm/RegConfirm";
import {EmailConfirm} from "../components/Pages/EmailConfirm/EmailConfirm";
import {Context} from "../App";
import {MyPostsList} from "../components/MyPosts/MyPosts";
import {ErrorPage} from "../components/Pages/ErrorPage/ErrorPage";
import {AddPost} from "../components/Pages/AddPost/AddPost";

export const RootRouter = () => {
  return (
    <Routes>
      <Route element={<Main />} path="/" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegistrationPage />} path="/registration" />
      <Route element={<FullPost />} path="/selectedPost/:id" />
      <Route element={<RegConfirm />} path="/regConfirm" />
      <Route element={<EmailConfirm />} path="/navigate/:uid/:token" />
      <Route element={useLoginGuard(<AddPost/>)} path="/add-post" />
      <Route element={useLoginGuard(<MyPostsList/>)} path="/my-posts" />
      <Route element={useLoginGuard(<EmailConfirm />)} path="/add-post" />
      <Route element={<ErrorPage />} path="*" />
    </Routes>
  )
};

const useLoginGuard = (component: ReactNode) => {
  const { user } = useContext(Context);

  if(user) {
    return component;
  } else {
    return <Navigate to="/login" />
  };
};