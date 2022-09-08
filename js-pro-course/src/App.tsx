import React from 'react';
import './App.css';
import {Input} from "./components/Input/Input";
import {Button} from "./components/Button/Button";
import {Title} from "./components/Title/Title";
import {User} from "./components/User/User";
import {Clicker} from "./components/Clicker/Clicker";
import {PostItem} from "./components/PostsList/PostItem/PostItem";
import {PostList} from "./components/PostsList/List/PostList";
import {emojies, posts} from "./mocks";
import {ToDoList} from "./components/ToDoList/List/ToDoList";
import {EmojiList} from "./components/EmojiList/EmojiList/EmojiList";
import {Converter} from "./components/Converter/Converter";
import {Time} from "./components/Time/Time";
import {Timer} from "./components/Timer/Timer";
import {Login} from "./components/Login/Login";
import {Registration} from "./components/Registration/Registration";
import {NavBar} from "./components/NavBar/NavBar";
import {Header} from "./components/Header/Header";

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
      <Header />
    </div>
  );
}

export default App;
