import React from "react"
import Lodable from "react-loadable"
let Home = Lodable({  //异步加载组件
  loader: () => import("../App"),
  loading: () => <div>loading</div>
})
let NotFound = Lodable({  //异步加载组件
  loader: () => import("../components/NotFound/NotFound"),
  loading: () => <div>loading</div>
})
let DashBoard = Lodable({  //异步加载组件
  loader: () => import("../components/Menu/DashBoard/DashBoard"),
  loading: () => <div>loading</div>
})
let Search = Lodable({  //异步加载组件
  loader: () => import("../components/Menu/Search/Search"),
  loading: () => <div>loading</div>
})
let List = Lodable({  //异步加载组件
  loader: () => import("../components/Menu/List/List"),
  loading: () => <div>loading</div>
})
let Lists = Lodable({  //异步加载组件
  loader: () => import("../components/Menu/List/Lists"),
  loading: () => <div>loading</div>
})

let Login = Lodable({  //异步加载组件
  loader: () => import("../components/Login/Login"),
  loading: () => <div>loading</div>
})

let AddUser = Lodable({  //异步加载组件
  loader: () => import("../components/Menu/AddUser/AddUser"),
  loading: () => <div>loading</div>
})
let Notify = Lodable({  //异步加载组件
  loader: () => import("../components/Menu/Notify/Notify"),
  loading: () => <div>loading</div>
})

// import Home from "../App"
// import NotFound from "../components/NotFound/NotFound"
// import DashBoard from "../components/Menu/DashBoard/DashBoard"
// import Search from "../components/Menu/Search/Search"
// import List from "../components/Menu/List/List"
// import Lists from "../components/Menu/List/Lists"
// import Login from "../components/Login/Login"
// import AddUser from "../components/Menu/AddUser/AddUser"
// import Notify from "../components/Menu/Notify/Notify"
export const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/404",
    component: NotFound
  },
  {
    path: "/login",
    component: Login
  }
]


export const LeftRoutes = [
  {
    path: "/home/dashboard",
    component: DashBoard,
    roles: ["admin", "abc"]
  },
  {
    path: "/home/search",
    component: Search,
    roles: ["admin"]
  },
  {
    path: "/home/list",
    component: List,
    roles: ["admin", "abc"]
  },
  {
    path: "/home/Pagelists",
    component: Lists,
    roles: ["admin", "abc"]
  },
  {
    path: "/home/add",
    component: AddUser,
    roles: ["admin"]
  },
  {
    path: "/home/notify",
    component: Notify,
    roles: ["admin", "abc"]
  }
]