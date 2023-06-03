
import userRouter from "./user"
import Koa from "koa"

/**
 * 
 * 路由集合注册
 */
export default function (ctx:  Koa<Koa.DefaultState, Koa.DefaultContext>) {
  ctx.use(userRouter)
}

