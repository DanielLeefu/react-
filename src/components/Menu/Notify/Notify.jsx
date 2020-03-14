import React, { Component } from 'react'
import { List, Avatar, Button, Card, Spin } from 'antd';
import { connect } from "react-redux"
import actionCreate from "../../../store/actionCreate"

class Notify extends Component {

  allread = () => {
    var list = this.props.notifyReducer.list
    const num = list.filter(item => !item.read).length
    return num
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Spin spinning={this.props.notifyReducer.loading}>
          <Card title="未读消息数量" extra={<Button onClick={this.props.allmark} disabled={this.allread() === 0}>一键已读</Button>}>
            <List
              itemLayout="horizontal"
              dataSource={this.props.notifyReducer.list}
              renderItem={item => (
                <List.Item extra={<Button onClick={this.props.MarkById.bind(this, item.id)} disabled={item.read}>{item.read ? "已读" : "未读"}</Button>}>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />

                </List.Item>
              )}
            />
          </Card>
        </Spin>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, actionCreate)(Notify)
