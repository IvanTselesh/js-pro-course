import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {RootRouter} from "./Router/Router";
import {IUser} from "./types/auth";
import {getUser} from "./api/registration";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';


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

  const access = localStorage.getItem('access');

function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [isReady, setIsReady] = useState(!access);

  useEffect(() => {
    let isOk = true;
    const access = localStorage.getItem('access');

    if(access) {
      getUser()
        .then((response: any) => {
          if (response.ok === true) {
            isOk = true;
          } else {
            isOk = false;
          };

          return response.json();
        })
        .then((json: any) => {
          if (isOk) {
            setUser(json);
          }
        })
        .finally(() => {
          setIsReady(true)
        });
    }

  }, []);
  return (
    <BrowserRouter>
      <Context.Provider value={{isDark: isDark, setIsDark: setIsDark, user, setUser}}>
        {isReady ? <RootRouter /> : null}
      </Context.Provider>
      <NotificationContainer />
    </BrowserRouter>
  );
}

export default App;
