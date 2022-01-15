import React, {useState} from "react";
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";

function App() {
  return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/main-page" component={MainPage} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
