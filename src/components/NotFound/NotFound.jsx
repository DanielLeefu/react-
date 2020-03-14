import React, { Component } from 'react'
import "./notFound.css"
export default class NotFound extends Component {
  back = () => {
    this.props.history.push("/")
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="panel panda">
            <img src="http://res.jzyx.com/themes/general/images/404panda.gif" alt="404" /></div>
          <div className="panel brief">
            <h1>这个地方不安全，<br />我们还是回去吧~</h1>
            <p>试试<span style={{ color: "blue", cursor: "pointer" }} onClick={this.back}>点这里回家</span></p>
          </div>
        </div>
      </div>
    )
  }
}

