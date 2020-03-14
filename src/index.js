import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { routes } from "./route"
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/index"
ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* <App /> */}
      <Switch>
        {
          routes.map((item) => {
            return <Route key={item.path} path={item.path} component={item.component} />
          })
        }
        < Redirect from="/" to="/home" exact />
        < Redirect to="/404" />
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// vscode里设置搜索 experimentalDecorators 勾上就没有警告了


// "a".padStart(0)
// "a".padEnd(0)
// 