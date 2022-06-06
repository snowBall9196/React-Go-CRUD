import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
        <div className="container">
            <Routes> 
                  <Route path = "/" exact element =
                      {<ListUserComponent />}></Route>
                  <Route path = "/users" element = 
                      {<ListUserComponent />}></Route>
                  <Route path = "/add-user/:id" element = 
                      {<CreateUserComponent />}></Route>
                  <Route path = "/view-user/:id" element = 
                      {<ViewUserComponent />}></Route>
            </Routes>
        </div>
      <FooterComponent />
      </div>
    
  );
}

export default App;