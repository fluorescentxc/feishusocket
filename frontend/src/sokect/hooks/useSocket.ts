/* eslint-disable react-hooks/exhaustive-deps */
import { useViewportSize } from "@mantine/hooks";
import { IconXboxX } from "@tabler/icons-react";
import { Console } from "console";
import { useCallback, useEffect } from "react";
import socket from "./socketInitor";

export default function useSocket() {

  const socketConnectedCallback = useCallback(() => {
    console.log("socket 连接成功")
  }, [])

  const socketDisconnectedCallback = useCallback(() => {
    console.log("socket 异常终止")
  }, [])

  const onMessageComming = useCallback((event) => {
    console.log("有新版本过来了", event)
    // 双保险
    // 服务端推送过来了 其他人操作了版本 
    // 处理版本
    // 客户端写一个队列  queue 还要上锁 一个版本一个版本的应用 
  }, [])

  useEffect(() => {
    socket.on("connect", socketConnectedCallback)
    socket.on('disconnect', socketDisconnectedCallback)

    // socketio  event emmiter 机制
    // event emmiter node 
    socket.on('message', onMessageComming);

    // 当用户token过期之类的 会自动跳转到login页面
    return () => {
      socket.off("conect", socketConnectedCallback)
      socket.off("disconnect", socketDisconnectedCallback)
      socket.off("message", onMessageComming)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const submitNewVersion = useCallback(() => {
    socket.emit("message", JSON.stringify({ version: 2, delete: "hello", insert: "hello world" }))
  }, [])

  return {
    submitNewVersion
  }
}

// sheet ---> useViewportSize

// 写在redux里的数据结构 
// 性能以外 开发成本 
// canvas 只有一个画布
// 数据合并
// diff算法 第一次接触和虚拟dom以外的diff算法
// 二进制


// 组件
// 1. 公用性 「感觉可能会超过3个组件会用他 」 <Input /> 表单  表格 优先级最高 只要涉及到公用组件 一定要抽离 src/components 
// 组件抽离不是越细越好 短暂让别人对上下文产生迷惑 直观 vue2 mixins  维护性能和代码可读性 他不是一个背道而驰 
// 2. 局部功能组件 header header很臃肿 局部功能组件抽离出去 「 如果你的局部功能组件不超过2个 且整个文件代码不超过400行你是可以不抽离的 」
// 3. 犯病 button 遵循 组件抽出去了 可以占30 - 50行以上的代码  10 
// 4. 数据 数据和当前这个组件没有关系 

// chongtu 

// 设计模式 各种模式也是冲突 页面加载慢和公用组件 只会和你写代码的方式有关系 每个组件独立成了一个文件 
// 首页话 引入了哪些组件不就会加载哪些组件吗 一般用了懒加载 不可能首页把所有的组件都加载了 
// 首页必须要加载这些组件 那就是没办法 那你不抽出去 你是不是也要在首页这么文件里写这么多代码

// 300 100 200  400 页面性能 公用 提高可 

// 900行

// 看 最佳实践 自己不断去抽 github 看react 是怎么抽离组件 感觉

// // 假设一个canvas是一个dom元素 

// // 创建5000个div 
// {
//   "sheet-dsdsdsahdjkasdas": {
//     views: [
//       {
//         type: "1", // 表格视图 2-> 看板视图,
//         columns: [
//           {
//             columnId: "SKDSDS",
//             type: "text",
//             sort: 1,
//             width: 100,
//             columnProps: {
//               selectData: [
//                 {
//                   label: "已完成",
//                   value: "finished"
//                 }
//               ]
//             }
//           }
//         ],
//         filters: [
//           {
//             symbol: "1 --> equals"
//           }
//         ], // 筛选
//         group: [],
//         sort: [],
//         dataSource: [
//           {
//             "SKDSDS": "产品功能开发设计",
//             // 不同列id 
//             "jinzhan": "finished"
//           }
//         ]
//       }
//     ]
//   }
// }

// 声明是不参与维护 

// 规范 保证整个代码的可读性 可维护性以及性能 

// 静态资源 asset 

// img  hello 

// 声明文件不是给人看的 是给ts 编译器看的

// 编译器 webpack 乱码 

// 保持状态不刷新的话 状态提到顶层 context 离开了这个组件再进来状态不会被刷新 

// keep-alive 做了顶层 实现底层状态 keep-alive 会了用法无脑用 

// 闭包 父组件  react 逻辑上说的过去就可以 

// 周三 下班前 

// 一周直播有点累 
// 一周做前瞻 一周写项目  质量 充分的时间 一个保证自己的精力 课程 撤销 redux 
// 