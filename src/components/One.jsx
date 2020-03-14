import React, { Component } from 'react'

export default class One extends Component {

  componentDidMount() {
    this.getState()
  }

  getState = () => {
    fetch("/apis/api/v1/topics").then(res => res.json()).then(res => {
      console.log(res);
    })
  }


  render() {
    return (
      <div>
        one
      </div>
    )
  }
}
