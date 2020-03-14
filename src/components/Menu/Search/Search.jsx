import React, { Component } from 'react'
import { Upload } from 'antd';
// import { upload } from "../../../api/request"

// 上传文件有bug***********************************************************************

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ''

    }
  }
  // upload = ({ file }) => {
  //   var form = new FormData;
  //   form.append("file", file)
  //   upload(form).then((res) => {
  //     if (res.status === 0) {
  //       this.setState({
  //         img: "http://localhost:4000" + res.path
  //       })
  //     }
  //   })
  // }
  render() {
    return <div>
      <Upload style={{ height: 100, width: 100, border: "1px dashed #ccc", display: "block" }} customRequest={this.upload} showUploadList={false}>
        {this.state.img ? <img src={this.state.img} style={{ width: 100, height: 100 }} alt="ddd" /> : <div>上传文件</div>}
      </Upload>
    </div>
  }
}
export default Search