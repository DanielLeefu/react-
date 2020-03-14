import React, { Component } from 'react'
import { Route } from "react-router-dom"

export default class MyRoute extends Component {
  render() {
    let { roles, component: Com, path } = this.props
    // 判断里面的用户名有没有权限
    let Authority = roles.some((item) => item === sessionStorage.getItem("username"))
    return (
      <Route path={path} render={(props) => {
        return Authority ? <Com {...props} /> : <div>需超级管理员，您无权限访问</div>
      }} />
    )
  }
}
