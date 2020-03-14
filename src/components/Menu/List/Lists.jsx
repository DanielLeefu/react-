import React, { Component } from 'react'
import { getLists, remove } from "../../../api/request"
import { Table, Card, Button, message, Modal } from "antd"



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
    this.getListsData(1, this.state.pageSize)
  }

  getListsData(page, pageSize) {
    getLists(page, pageSize).then(res => {
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

  getCountPage = (page, pageSize) => {
    this.getListsData(page, pageSize)
  }


  // 删除用户

  Delete = (id, name) => {
    this.setState({
      id,
      name,
      visible: true
    }, () => {

    })
  }
  // 模态框
  handleOk = () => {
    this.setState({
      loading: true
    })
    remove(this.state.id).then(res => {
      if (res.status === 0) {
        this.getListsData(1, this.state.pageSize)
        this.setState({
          visible: false,
          loading: false
        })
        message.success('删除成功');
      } else {
        message.error("删除失败")
        this.setState({
          visible: false
        })
      }
    })
  }
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }



  // 添加
  addUser = () => {
    this.props.history.push("/home/add")
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      visible: false,
      count: 0,
      id: -1,
      name: "",
      dataSource: [],
      pageSize: 4,
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '操作',
          dataIndex: 'edit',
          key: 'edit',
          render: (text, record) => {
            // console.log(text)
            // console.log(record)
            return <Button onClick={this.Delete.bind(this, record.key, record.name)}>删除</Button>
          }
        },
      ]
    }
  }





  render() {
    const { columns, dataSource, pageSize, count } = this.state
    return (
      <div>
        <Card title="用户管理" extra={<Button type="primary" onClick={this.addUser}>添加</Button>} style={{ width: "100%" }}>
          <Table columns={columns} dataSource={dataSource} pagination={{ total: count, pageSize, onChange: this.getCountPage }} />
        </Card>
        <Modal
          title="系统提示"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确认"
          cancelText="取消"
          maskClosable={false}
          confirmLoading={this.state.loading}
        >
          <p>确认删除用户--- {this.state.name}?</p>
        </Modal>
      </div>
    )
  }
}

