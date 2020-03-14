import React, { Component } from 'react'
import { Form, Icon, Input, Button, message } from 'antd';

import { add } from "../../../api/request"

@Form.create()

class AddUser extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        add(values.username, values.userage).then(res => {
          if (res.status === 0) {
            message.success("添加成功")
            this.props.history.push("/home/Pagelists")
          } else {
            message.error("添加失败")
          }

        })


      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('userage', {
              rules: [{ required: true, message: '请输入年龄' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="Number"
                placeholder="年龄"
                min={0}
                max={150}
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              添加
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default AddUser