import { useEffect } from "react"

// AXIOS --> 带着大家封装 拦截

export default function Login() {
  useEffect(() => {
    fetch("/api/login", {
      method: "POST",
      // 厄斐琉斯 
      body: JSON.stringify({username: "Ephelios", password:"123"})
    }).then(data => {
      // console.log("data", data)
      data.json().then(data => {
        console.log("data", data)
      })
    }).catch(error => {
      console.log("error", error)
    })
  })
  return (
    <div>hello login</div>
  )
}

// 服务端不是你自己写 发到一个测试服务器 或者开发服务器 

// localhost:3000 / 

// webpack 配置 