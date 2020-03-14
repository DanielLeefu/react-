import ajax from "./index"

//获取列表
export function getList() {
  return ajax({
    method: "GET",
    url: "/apis/pagelist"
  })
}

// 后端分页
export function getLists(page, pageSize) {
  return ajax({
    method: "GET",
    url: "/apis/pagelist",
    params: {
      page,
      pageSize
    }
  })
}

//删除用户
export function remove(id) {
  return ajax({
    method: "POST",
    url: "/apis/del",
    data: {
      id
    }
  })
}

//添加用户
export function add(username, userage) {
  return ajax({
    method: "GET",
    url: "/apis/add",
    params: {
      name: username,
      age: userage
    }
  })
}

// 登录用户
export function login(username, password) {
  return ajax({
    method: "POST",
    url: "/apis/users/login",
    data: {
      username,
      password
    }
  })
}

// 退出登录
export function quit() {
  return ajax({
    method: "POST",
    url: "/apis/users/quit"
  })
}

// 上传图片
// export function upload(data) {
//   return ajax({
//     method: "POST",
//     url: "/apis/upload",
//     data
//   })
// }
export const upload = (data) => {
  return ajax.post("/upload", data)
}