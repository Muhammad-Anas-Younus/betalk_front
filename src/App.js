import {useContext, useEffect, useState} from 'react'
import { Redirect, Router } from 'react-router';
import "./App.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import {AuthContextProvider} from './context/AuthContext'
import AuthContext from './context/AuthContext'
// import PrivateRoute from './PrivateRoute'
import Chat from './Chat'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'
import Profile from './Profile';
import {IdContextProvider} from './context/IdContext'
import useLocalStorage from './hooks/useLocalStorage';
import {ContactsContextProvider} from './context/ContactsContext'
import {ConversationsContextProvider} from './context/ConversationsContext'
import {SocketContextProvider} from "./context/SocketContext"


function App() {
  const [id, setId] = useLocalStorage('id')

  return (
      <BrowserRouter>
        <div className="App overflow-x-hidden">
          <Switch>
            <SocketContextProvider id={id}>
              <ContactsContextProvider>
                <ConversationsContextProvider id={id}>
                  <Route path="/" exact>
                    <Chat id={id}/>
                  </Route>
                  <Route path="/profile" exact>
                    <Profile ID={setId} showID={id}/>
                  </Route>      
              </ConversationsContextProvider>
            </ContactsContextProvider>
          </SocketContextProvider>
          </Switch>
          </div>      
      </BrowserRouter>
  );
}

export default App;
