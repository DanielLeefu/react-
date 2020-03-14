import axios from "axios";

var service = axios.create({
  baseURL: "",
  "content-type": "application/json",
  timeout: 5000
})

// 请求拦


// 响应拦截器
service.interceptors.response.use((res) => {
  // console.log(res);
  return res.data
})

export default service