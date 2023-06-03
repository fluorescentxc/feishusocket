import { useEffect, useMemo } from "react"
import { useNavigate, useRoutes, Outlet } from "react-router-dom"
import { MantineProvider, ColorScheme } from "@mantine/core"
import useThemeWorker from "./layout/TableLayout/components/Header/components/UserCenterDropdown/hooks/useThemeWorker"
import { ValidTheme } from "./theme/types"

// console.log("helloworld")

export default function RouteGuard() {
  // 跟路由
  const navigate = useNavigate()
  const { realTimeTheme } = useThemeWorker()
  useEffect(() => {
    // 在这个useEffect里 我们需要判断当前的用户有没有登录
    const isLogin = true
    if (!isLogin) {
      navigate("/login")
    }
  }, [])

  // mantine帮我们处理好了

  return (
    // 登录 socket 
    //  router-view 
    <MantineProvider theme={{ colors: { "transparent": ["transparent"] }, colorScheme: realTimeTheme }} withGlobalStyles withNormalizeCSS>
       <Outlet />
    </MantineProvider>
  )
}