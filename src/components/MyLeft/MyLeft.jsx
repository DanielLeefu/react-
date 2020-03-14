import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import actionCreate from "../../store/actionCreate"
import { Layout, Menu, Breadcrumb, Icon, Dropdown, Button, Badge } from 'antd';
import { quit } from "../../api/request"
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
@withRouter
// 使用装饰器包装这个MyLeft组件   相当于// export default withRouter(MyLeft)

class MyLeft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: sessionStorage.getItem("username")
    }
  }

  go = ({ item, key, keyPath, domEvent }) => {
    this.props.history.push(key)
  }

  quick = () => {
    quit().then(res => {
      if (res.status === 0) {
        sessionStorage.clear();
        this.props.history.push("/login")
      }
    })
  }

  allread = () => {
    var list = this.props.notifyReducer.list
    const num = list.filter(item => !item.read).length
    return num
  }

  showMenu = () => {
    return (
      <Menu>
        <Menu.Item onClick={this.go} key="/home/notify">
          通知中心 <Badge count={this.allread()} style={{ backgroundColor: '#52c41a' }} />
        </Menu.Item>
        <Menu.Item>
          2nd menu item
        </Menu.Item>
      </Menu>
    )
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Layout>
          <Header className="header" style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ color: "#FFF" }}>
              极致管理系统
           </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <Dropdown overlay={this.showMenu()} placement="bottomCenter">
                <Button style={{ color: "#fff", background: "black", border: "none" }}> <Badge dot={Boolean(this.allread() !== 0)}></Badge><Icon type="bell" theme="twoTone" /><Badge />消息通知</Button>
              </Dropdown>

              <Menu mode="horizontal" style={{ height: "64px", lineHeight: "64px", color: "#fff", background: "black" }}>
                <SubMenu title={
                  <span className="submenu-title-wrapper">
                    <Icon type="setting" />
                    {this.state.username}
                  </span>
                }
                >
                  <Menu.Item key="setting:1">个人资料</Menu.Item>
                  <Menu.Item key="setting:2" onClick={this.quick}>退出</Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                selectedKeys={this.props.location.pathname}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item key="/home/dashboard" onClick={this.go}><Icon type="dashboard" />仪表盘</Menu.Item>
                <Menu.Item key="/home/list" onClick={this.go}><Icon type="unordered-list" />列表管理</Menu.Item>
                <Menu.Item key="/home/Pagelists" onClick={this.go}><Icon type="unordered-list" />分页管理</Menu.Item>
                <Menu.Item key="/home/search" onClick={this.go}><Icon type="setting" />设置</Menu.Item>


              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, actionCreate)(MyLeft)
// export default withRouter(MyLeft)
