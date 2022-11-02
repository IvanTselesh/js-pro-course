import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {RootRouter} from "./Router/Router";
import {IUser} from "./types/auth";
import {getUser} from "./api/registration";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import {Provider} from "react-redux";
import {store} from "./redux/store";


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
  const getInitialTheme = () => {
    const isDark = localStorage.getItem('isDark');

    if(isDark === 'true') {
      return true;
    };

    return false
  };

function App() {
  const [isDark, setIsDark] = useState(getInitialTheme());
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

  useEffect(() => {
    localStorage.setItem('isDark', String(isDark));
  }, [isDark]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Context.Provider value={{isDark: isDark, setIsDark: setIsDark, user, setUser}}>
          {isReady ? <RootRouter /> : null}
        </Context.Provider>
        <NotificationContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
