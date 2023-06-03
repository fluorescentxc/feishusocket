// deps
import { Box, Button, Image, Input, Text, Avatar, Menu } from "@mantine/core"
import { Header as HeaderContainer } from "@mantine/core"
import { IconChevronLeft, IconStar, IconFolderFilled, IconLock } from "@tabler/icons-react"
import { watch } from "fs"
import { useCallback } from "react"

// components
import UserCenterDropdown from "./components/UserCenterDropdown"

// svgs
import LeftArrow from "../../../../assets/svgComponents/LeftArrow"

export default function Header() {

  /**
   * 每一次函数组件的重新渲染是不是这个函数的重新执行
   * 
   * editTableName是不是会重新创建
   * 
   * 用了useCallback以后 他会帮你把这个引用缓存下来
   * 
   * if (fn) return fn
   * else fn = params.fn
   */

  const editTableName = useCallback(() => {

  }, [])

  return (
    <HeaderContainer height={64}>
      {/* 16px , rem布局 */}
      <Box className=" h-full pl-4 flex justify-between items-center">
        {/* 左边的区域 */}
        <Box className="h-full flex items-center">

          {/* left icon */}
          <IconChevronLeft />

          {/* left information */}
          <Box className="flex flex-col gap-1">
            {/* 表名 + 收藏 */}
            <Box className="h-6 flex items-center">
              {/* 表名  动态的表名 */}
              <Box className="text-sm px-1" onDoubleClick={editTableName}>✅任务管理</Box>
              {/* <Input defaultValue="" /> */}
              {/* 收藏 */}
              <Box className="w-5 h-5 rounded-md cursor-pointer flex items-center justify-center hover:bg-slate-400">
                <IconStar className="w-3 h-3" />
              </Box>
            </Box>

            {/* 我的空间 + 最近修改时间 */}
            <Box className=" w-64 h-4 flex  items-center">
              {/* 我的空间 */}
              <Box className="flex items-center gap-1 pl-1">
                <IconFolderFilled className="text-#646A73 w-3 h-3" />
                <Text className="text-xs text-#646A73">我的空间</Text>
                <Box style={{ width: "1px" }} className="h-3 bg-#DEE0E3 mx-2" />
              </Box>

              {/* 最近修改 */}
              <Text className="text-xs text-#646A73">最近修改：18分钟前</Text>
            </Box>
          </Box>

        </Box>

        {/* 右边的区域 */}
        <Box className=" h-full flex items-center pr-4">
          {/* 3个按钮 */}
          <Box className="mr-2">
            {/* <Button className="bg-#3370FF" color="transparent">
              <Text>分享</Text>
            </Button> */}
            {/* tailwind mantineui 同时使用会出现tailwind把mantine默认样式给清除了 issue  */}
            {/* 我们直接mantine的按钮样式全部抹除 按照我们自己的处理  */}
            <Button color="transparent" className="bg-#3370FF ">
              <IconLock width={16} height={16} strokeWidth={2} />
              <Text className="ml-1">分享</Text>
            </Button>
          </Box>

          {/* 用户中心区域 */}
          <Menu position="bottom-start">
            <Menu.Target>
              <Avatar color="#3370FF" className="rounded-full bg-#3370FF cursor-pointer">金权</Avatar>
            </Menu.Target>

            <Menu.Dropdown>
              <UserCenterDropdown />
            </Menu.Dropdown>
          </Menu>
        </Box>
      </Box>
    </HeaderContainer>
  )
}
