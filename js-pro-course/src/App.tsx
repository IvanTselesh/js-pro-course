import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {RootRouter} from "./Router/Router";
import {IUser} from "./types/auth";
import {getUser} from "./api/registration";

export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  user: IUser | null;
  setUser: (value: IUser | null) => void;
}>({
  isDark: false,
  setIsDark: () => {},
  user: null,
  setUser: (value: IUser | null) => {},
});

function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    let isOk = true;

    // getUser()
    //   .then((response: any) => {
    //     if (response.ok === true) {
    //       isOk = true;
    //     } else {
    //       isOk = false;
    //     };
    //
    //     return response.json();
    //   })
    //   .then((json: any) => {
    //     if (isOk) {
    //       setUser(json);
    //     }
    //   });
  }, []);
  return (
    <BrowserRouter>
      <Context.Provider value={{isDark: isDark, setIsDark: setIsDark, user, setUser}}>
        <RootRouter />
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
