import React from 'react';
import './App.css';
import {Input} from "./components/Input/Input";
import {Button} from "./components/Button/Button";
import {Title} from "./components/Title/Title";
import {User} from "./components/User/User";
import {Clicker} from "./components/Clicker/Clicker";
import {PostItem} from "./components/PostsList/PostItem/PostItem";

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
      {/*<Title text="Title" />*/}
      {/*<Input value="value" />*/}
      {/*<Button text="Login" onClick={onClickLogin} type="secondary" disabled={false}/>*/}
      {/*<Button text="Sign Up" onClick={onClickSignUp} type="primary" disabled={false}/>*/}
      {/*<Button text="Logout" onClick={onClickLogout} type="secondary2" disabled={false}/>*/}
      {/*<User username="John Wick" isDark={true}/>*/}
      {/*<Clicker />*/}
      {/*<PostItem id="1" text="Lorem a;ljsfd lka;sjd ;l jlkk alkj sdnv oaeg najfk hvaeejg nadkjfgh kae r ngjkherajg kaefnogjelkv nlkfeahojacnvkjefjghowejfp  albguerog mkla sdn jkherg j ew glhero  g" date={"20-01-2020"} title="Lorem fjsoe ksvnva woqldk" />*/}
    </div>
  );
}

export default App;
