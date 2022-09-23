import React, {ChangeEventHandler, useContext, useState} from "react";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import styles from "./style.module.css";
import {Context} from "../../App";


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isDark = useContext(Context);

  const handleOnChangeEmail:ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value)
  };

  const handleOnChangePassword:ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value)
  };

  return (
    <div className={styles.loginWrap}>
      <div className={styles.loginWrapForm}>
        <label className={styles.loginWrapFormInput} htmlFor="email">Email</label>
        <Input id="email" value={email} onChange={handleOnChangeEmail} />
        <label className={styles.loginWrapFormInput} htmlFor="password">Password</label>
        <Input id="password" value={password} onChange={handleOnChangePassword} />
      </div>
      <Button text="Login" onClick={()=> {}} disabled={false} styleBtn='buttonLogin' />
      <p>Forgot your password?</p>
    </div>
  )
}