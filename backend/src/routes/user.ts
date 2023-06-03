// router层 路由 路由层只做路由匹配和分发工作 
import KoaRouter from "@koa/router"
import { login } from "../controller/userController"
import { UserLoginParams } from "../controller/userController/types"
const userRouter = new KoaRouter() // new 出来一定是KoaRouter的实例  post方法  @types/koa__router在底层是不是帮你写了类型声明的

// ts有一个很强大的功能叫做类型推导 

// 挂泛型 

// next是和中间件相关的 
userRouter.post("/login", async (ctx) => {
  // 是为啥 没处理请求体 我们要处理请求体 
  console.log("用户发送登录请求来了", ctx.request.body, ctx.body) // ctx.body === ctx.request.body // 读请求体 ctx.body = ctx.request.body  ctx.response.body 

  // 这个写法不对 
  const user = await login(ctx.request.body as UserLoginParams) // 这段代码报错 用户没查到 异常中间件去的

  if (user) {
    ctx.body = {
      status: 200,
      message: "ok",
      data: user
    }
  } else {
    // 中间件概念还很 
    ctx.body = {
      status: 4009,
      message: "password is not correct",
      data: null
    }
  }

  // 开始处理 用户登录请求 我们自然的交给 用户登录的controller 去写对应的业务逻辑对不对
  // 因为我们实际上在处理登录的时候 我们是要去读数据库 所以我们要做成异步
  // const result = await userController.login(ctx.body) // ctx.body --> 请求体

  // 分发给controller 

  // 匹配对应的controller 文件 userController
   
})

// koa的洋葱模型 中间件 

// 煮好了饭 -> 吃饭
// 吃饭 --> 煮好了饭 

// restful api 

// userRouter.post("/logout")


export default userRouter.routes() // 这个时候会导出去一个中间件「监听用户请求的函数

// 得益于我们安装了 @types/koa_router这个类型库


// 和用户相关的所有路由 

// - 登录
// - 注销
// - 注册
// - 用户的xxx