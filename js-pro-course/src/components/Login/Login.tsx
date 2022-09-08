import React, {ChangeEventHandler, useState} from "react";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import styles from "./style.module.css";


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <Button text="Login" onClick={()=> {}} disabled={false} type="secondary" />
      <p>Forgot your password?</p>
    </div>
  )
}