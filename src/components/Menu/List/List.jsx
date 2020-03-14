import React, { Component } from 'react'
import { getList } from "../../../api/request"
import { Table } from "antd"



export default class List extends Component {

  // 注意，为了解决已经切换页面，还在请求回来数据设置setState
  // Warning: Can't perform a React state update on an unmounted component.This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
  componentWillUnmount() {  //解决异步数据回来时,组件却卸载了
    //重写组件的setState方法，直接返回空
    this.setState = (state, callack) => {
      return;
    };

  }

  componentDidMount() {
    getList().then(res => {
      var list = res.list.map((item) => {
        return {
          key: item._id,
          name: item.name,
          age: item.age
        }
      })
      this.setState({
        dataSource: list,
        count: res.count
      })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      dataSource: [],
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
      ]
    }
  }





  render() {
    const { columns, dataSource } = this.state
    return (
      <div>
        <Table columns={columns} dataSource={dataSource} />
      </div>
    )
  }
}
