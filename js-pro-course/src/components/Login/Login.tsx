import React, {ChangeEventHandler, FormEventHandler, useContext, useRef, useState} from "react";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import styles from "./style.module.css";
import {Context} from "../../App";
import {useNavigate} from "react-router-dom";
import {getUser, loginUser} from "../../api/registration";
import {IUser} from "../../types/auth";


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isDark = useContext(Context);
  const navigate = useNavigate();
  const { setUser } = useContext(Context);

  const handleOnChangeEmail:ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value)
  };

  const handleOnChangePassword:ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value)
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    //option
    // console.log(refEmail?.current?.value, refEmail?.current?.value);
    // email = refEmail?.current?.value
    // password = refPassword?.current?.value
    const formData = new FormData(event?.target as any);
    const obj = Object.fromEntries(Array.from(formData.entries()));
    const email: string = obj.email as string;
    const password: string = obj.password as string;

    let isOk = true;
    loginUser(email, password)
      .then((response) => {
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
        }

        return response.json();
      })
      .then((json) => {
        if (isOk) {
          localStorage.setItem("access", json.access);
          localStorage.setItem("refresh", json.refresh);

          getUser()
            .then((response: any) => {
              return response.json();
            })
            .then((user: IUser | null) => {
              setUser(user);
              navigate("/");
            });
        } else {
          //обрабатываем ошибки
        }
      });
  };

  return (
    <div className={styles.loginWrap}>
      <div className={styles.loginWrapForm}>
        <label className={styles.loginWrapFormInput} htmlFor="email">Email</label>
        <Input id="email" value={email} onChange={handleOnChangeEmail} />
        <label className={styles.loginWrapFormInput} htmlFor="password">Password</label>
        <Input id="password" value={password} onChange={handleOnChangePassword} type="password" />
      </div>
      <Button text="Login" onClick={()=>handleSubmit} disabled={false} styleBtn='buttonLogin' />
      <p>Forgot your password?</p>
    </div>
  )
}