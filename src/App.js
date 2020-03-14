import React from 'react';
import './App.css';
import { Redirect, Switch } from "react-router-dom"
import MyLeft from "./components/MyLeft/MyLeft"
import { LeftRoutes } from "./route/index"
import MyRoute from "./route/MyRoute/MyRoute"

function App() {
  return (
    <div className="App">
      {
        sessionStorage.getItem("username") ? <MyLeft>
          <Switch>
            {
              LeftRoutes.map((item) => {
                return <MyRoute roles={item.roles} key={item.path} path={item.path} component={item.component}></MyRoute>
              })
            }
            <Redirect from="/home" to="/home/dashboard" exact />
            <Redirect to="/404" />
          </Switch>
        </MyLeft> : <Redirect to="/login"></Redirect>
      }

    </div>
  );
}

export default App;
