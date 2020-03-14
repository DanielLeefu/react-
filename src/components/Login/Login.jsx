import React, { Component } from 'react'
import { login } from "../../api/request"
import { Form, Icon, Input, Button, Checkbox, Card, message } from 'antd';
@Form.create()

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  handleSubmit = e => {
    this.setState({
      loading: true
    })
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        login(values.username, values.password).then(res => {
          if (res.status === 0 && res.data.login) {
            sessionStorage.setItem("username", values.username)
            sessionStorage.setItem("token", res.data.token)
            this.setState({
              loading: false
            })
            message.success('登录成功');
            this.props.history.push("/")
          } else {
            this.setState({
              loading: false
            })
            message.error('用户或密码错误');
          }

        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card hoverable={true} style={{
        width: "400px",
        height: "350px",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
      }}>

        <div style={{ width: "300px", fontSize: "24px", textAlign: "center", margin: "0 auto", marginTop: "-16px" }}>极致后台登录</div>

        <div style={{
          width: "300px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item style={{ marginTop: "-10px" }}>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>记住我</Checkbox>)}
              <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: "300px" }} loading={this.state.loading} >
                登录
             </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    )
  }
}

export default Login