import React, {ChangeEventHandler, useState} from "react";
import styles from "./style.module.css";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {validateConfirm, validateEmail, validatePassword, validateRequired} from "../../utils/validation";
import {registrateUser} from "../../api/registration";
import {useNavigate} from "react-router-dom";

export const Registration = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [validRepeatPassword, setValidRepeatPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [validUserName, setValidUserName] = useState('');
  const navigate = useNavigate();


  const handleOnChangeUserName:ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateRequired(event.target.value);
    if(error) {
      setValidUserName(error)
    } else {
      setValidUserName('')
    };
    setUserName(event.target.value)
  };

  const handleOnChangeEmail:ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateEmail(event.target.value);
    if(error) {
      setValidEmail(error)
    } else {
      setValidEmail('')
    };
    setEmail(event.target.value)
  };

  const handleOnChangePassword:ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validatePassword(event.target.value);
    if(error) {
      setValidPassword(error)
    } else {
      setValidPassword('')
    };
    setPassword(event.target.value)
  };
  const handleOnChangeRepeatPassword:ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateConfirm(password, event.target.value);
    if(error) {
      setValidRepeatPassword(error)
    } else {
      setValidRepeatPassword('')
    };
    setRepeatPassword(event.target.value)
  };

  const onClickReg = () => {
    setError("");

    const errors = {
      user: validateRequired(userName),
      email: validateEmail(email),
      password: validateRequired(password),
      confirm: validateConfirm(password, repeatPassword),
    };

    setValidUserName(errors.user);
    setValidEmail(errors.email);
    setValidPassword(errors.password);
    setValidRepeatPassword(errors.confirm);

    const isFormValid = Object.values(errors).every((error) => error === '');

    if(isFormValid) {
      const promise = registrateUser(userName, email, password);
      let isOk = true;

      promise
        .then((response) => {
          if(response.ok) {
            isOk = true
          } else {
            isOk = false
          };
          response.json();
      })
        .then((json: any) => {
          if(isOk) {
            navigate('/regConfirm');
          } else {
            if (json?.email?.includes('user with this Email already exists.')) {
              setError("User with this Email already exists");
              return;
            };
            if (json?.username?.includes("A user with that username already exists.")) {
              setError('A user with that username already exists.');
              return;
            };
            if(json?.password?.includes("The password is too similar to the username.")) {
              setError("The password is too similar to the username.");
              return;
            };
          }
        })
    };
  };

  const handleEmailBlur = () => {
    const error = validateEmail(email);

    setValidEmail(error);
  };

  const handleEmailFocus = () => {
    setValidEmail("");
  };

  return (
    <div>
      <div className={styles.regWrap}>
        <div className={styles.regWrapForm}>
          <label className={styles.regWrapFormInput} htmlFor="userName">User Name</label>
          <Input id="userName" value={userName} onChange={handleOnChangeUserName} error={validUserName} />
          <label className={styles.regWrapFormInput} htmlFor="email">Email</label>
          <Input id="email" value={email} onChange={handleOnChangeEmail} error={validEmail} onBlur={handleEmailBlur} onFocus={handleEmailFocus} />
          <label className={styles.regWrapFormInput} htmlFor="password">Password</label>
          <Input id="password" value={password} onChange={handleOnChangePassword} error={validPassword} type="password" />
          <label className={styles.regWrapFormInput} htmlFor="repeatPassword">Repeat Password</label>
          <Input id="repeatPassword" value={repeatPassword} onChange={handleOnChangeRepeatPassword} error={validRepeatPassword} type="password" />
        </div>
        <Button text="Register" onClick={onClickReg} disabled={false} styleBtn="buttonLogin" />
        <p className={styles.error}>{error}</p>
        <p>Forgot your password?</p>
      </div>
    </div>
  )
};