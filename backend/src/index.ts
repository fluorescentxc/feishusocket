
import Koa from "koa"  // es的语法也是可以在服务端被识别 因为ts的存在 es和ts的结合是最好的
import routesInstaller from "./routes"
import bodyParser from "koa-bodyparser"
import KoaCORS from "@koa/cors"
import { Server } from "socket.io"
import { createServer } from "http"

// 最原生的是最难写的 
// 报文 字符串

const app = new Koa()

const server = createServer(app.callback())

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
})

io.on("connection", (socket) => {
  // 代表有人连接你服务端了
  // socket 我们监听哪个端口
  console.log("someone connected")
  socket.on("message", (message: string) => {
    console.log("客户端发新版本过来了", message)
    // 我们告诉他这个版本应用成功没有 
    // 原的message返回给他 
    // 当用户在本地操作了一个单元格 是不是立即给他生效
    // 因为冲突还是服务端出问题 
    // 版本合并 
    socket.emit("message", message)
  })
});

server.listen(8999, () => {
  console.log("websocket listen on 8999")
})

const port: number = 8080

// 也是监听一个请求 只不过当请求来的 时候 他帮你把这个请求体帮你解析出来
// app.use(KoaCORS())

app.use(bodyParser()) 

routesInstaller(app) // 如果是先执行他的话 

app.listen(port, () => {
  // 你派一个人去守门 保安 小区的西门给我守着 
  // 诶我到了 西门 
  console.log("listen success", port)
})


// 跨域问题
