import React, {ChangeEventHandler, useState} from "react";
import styles from "./style.module.css";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";

export const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [userName, setUserName] = useState('');

  const handleOnChangeUserName:ChangeEventHandler<HTMLInputElement> = (event) => {
    setUserName(event.target.value)
  };

  const handleOnChangeEmail:ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value)
  };

  const handleOnChangePassword:ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value)
  };
  const handleOnChangeRepeatPassword:ChangeEventHandler<HTMLInputElement> = (event) => {
    setRepeatPassword(event.target.value)
  };

  return (
    <div>
      <div className={styles.regWrap}>
        <div className={styles.regWrapForm}>
          <label className={styles.regWrapFormInput} htmlFor="userName">User Name</label>
          <Input id="userName" value={userName} onChange={handleOnChangeUserName} />
          <label className={styles.regWrapFormInput} htmlFor="email">Email</label>
          <Input id="email" value={email} onChange={handleOnChangeEmail} />
          <label className={styles.regWrapFormInput} htmlFor="password">Password</label>
          <Input id="password" value={password} onChange={handleOnChangePassword} />
          <label className={styles.regWrapFormInput} htmlFor="repeatPassword">Repeat Password</label>
          <Input id="repeatPassword" value={repeatPassword} onChange={handleOnChangeRepeatPassword} />
        </div>
        <Button text="Login" onClick={()=> {}} disabled={false} type="secondary" />
        <p>Forgot your password?</p>
      </div>
    </div>
  )
};