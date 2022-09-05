import React from 'react';
import './App.css';
import {Input} from "./components/Input/Input";
import {Button} from "./components/Button/Button";
import {Title} from "./components/Title/Title";
import {User} from "./components/User/User";

function App() {
    const onClickLogin = () => {
        alert('Login');
    };
    const onClickSignUp = () => {
        alert('Signup');
    };
    const onClickLogout = () => {
        alert('Logout');
    };

  return (
    <div className="App">
      <Title text="Title" />
      <Input value="value" />
      <Button text="Login" onClick={onClickLogin}/>
      <Button text="Sign Up" onClick={onClickSignUp}/>
      <Button text="Logout" onClick={onClickLogout}/>
      <User username="Vseslav Narodniy" />
    </div>
  );
}

export default App;
