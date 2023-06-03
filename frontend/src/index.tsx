import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import routes from './router.config'
import "./i18n/index"



// 单独点名要听着 路由权限
const root = ReactDOM.createRoot(document.getElementById('root'));

// 初始化的时候 hooks

root.render(
  <React.StrictMode>
    {/* 展开上下文 网 这个网把所有的react组件都覆盖了  */}
    {/* 当我们要这个数据的时候 我们就不会找父组件要了 我们找这个网要  */}
    {/* colors: 配置mantine的内部色值  */}
      <RouterProvider router={routes} />
     
  </React.StrictMode>
);

// useRoutes --> 得到元数据 


// router的hooks 
// 注册路由 


// redux subscribe 

