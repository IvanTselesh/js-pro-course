import React from "react";
import {Route, Routes} from "react-router-dom";
import {Main} from "../components/Pages/MainPage/Main";
import {LoginPage} from "../components/Pages/LoginPage/Login";
import {RegistrationPage} from "../components/Pages/RegistrationPage/RegistrationPage";
import {FullPost} from "../components/Pages/FullPost/FullPost";
import {RegConfirm} from "../components/Pages/RegConfirm/RegConfirm";
import {EmailConfirm} from "../components/Pages/EmailConfirm/EmailConfirm";

export const RootRouter = () => {
  return (
    <Routes>
      <Route element={<Main />} path="/" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegistrationPage />} path="/registration" />
      <Route element={<FullPost />} path="/selectedPost/:id" />
      <Route element={<RegConfirm />} path="/regConfirm" />
      <Route element={<EmailConfirm />} path="/emailConfirm" />
    </Routes>
  )
}