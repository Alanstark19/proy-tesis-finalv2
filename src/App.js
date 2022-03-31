import "./App.css";
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./Components/Components Navbar/Navbar";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
    <>
      <Switch>
        <Route path={"/inicio"} component={Navbar}></Route>
        <Route path={"/login"} component={Login}></Route>
      </Switch>
    </>
    </BrowserRouter>  
  );
}

export default App;