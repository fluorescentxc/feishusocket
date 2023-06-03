import { createBrowserRouter, Route } from "react-router-dom"
// import Home from "./pages/Home"
import Login from "./pages/Login"
import RouteGuard from "./RouteGuard"
import { lazy } from "react"

// lazy
const Home = lazy(() => import("./pages/Home/index"))

// router-dom  router react-router 
const routes = createBrowserRouter([
  {
    path: "/",
    element: <RouteGuard />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  },
  
])

// vue先发明的配置化
// react最早是组件式路由 第三库react-router-config 

// react里面是没有beforeRoute的 

// 等会会搭建 redux-toolkit: 仓库管理方案 

export default routes

/**
 * 
 * 路由的本质就是 通过if else判断 url 是否匹配上对应的路由 从而进行元素的显示和隐藏
 * if (matched) return <Home />
 * return null
 * 
 */
