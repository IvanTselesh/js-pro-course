import React, {createContext, useState} from 'react';
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
import {Timer1} from "./components/Timer/Timer1";
import {Login} from "./components/Login/Login";
import {Registration} from "./components/Registration/Registration";
import {NavBar} from "./components/NavBar/NavBar";
import {Header} from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {RootRouter} from "./Router/Router";

export const Context = createContext<{
  isDark: boolean,
  setIsDark: (value: boolean) => void}
  >({isDark: false, setIsDark: () => {}});

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <BrowserRouter>
      <Context.Provider value={{isDark: isDark, setIsDark: setIsDark}}>
        <RootRouter />
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
