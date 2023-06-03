import { useCallback, useEffect, useMemo, useState } from "react"
import { useLocalStorage } from "@mantine/hooks"
import { ColorScheme, SelectItem } from "@mantine/core"
import { useTranslation } from "react-i18next"
import { ValidTheme } from "../../../../../../../theme/types"
import getLocalTheme from "../../../../../../../theme/getLocalTheme"

export default function useThemeWorker() {
  const [presentTheme, setPresentTheme] = useLocalStorage<ValidTheme>({ key: 'local-theme', defaultValue: "system" })
  // 默认值要读local
  // 返回一个light 或者一个dark
  const [realTimeTheme, setRealTimeTheme] = useState<ColorScheme>(getLocalTheme())
  // const [] = useState<ColorScheme>(localStorage.getItem("local-them"))
  const { t } = useTranslation()

  // system light dark 跟header组件没有直接关系 
  const themeSelectData = useMemo<SelectItem[]>(() => {
    return [
      {
        label: t("light"),
        value: "light"
      },
      {
        label: t("dark"),
        value: "dark"
      },
      {
        label: t("system"),
        value: "system"
      }
    ]
  }, [t])

  // 跟随系统
  // light 和dark 

  // 多人协同

  const watchSystemThemeChange = useCallback(() => {
    console.log("executed")

    // 一开始是亮色 然后他选择监听系统
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    // darkThemeMq.addEventListener
    darkThemeMq.addListener(e => {
      if (e.matches) {
        // Theme set to dark.
        console.log("监听成功, 用户的系统变为了深色")
        setRealTimeTheme("dark")

      } else {
          // Theme set to light.
        console.log("监听成功, 用户系统变为了浅色")
        setRealTimeTheme("light")
      }
    });
  }, [])

  // 两个场景:  1. 初始化的时候
  // 监听 一个初始化 

  useEffect(() => {
    console.log("presentTheme", presentTheme) // 初始化的时候presentTheme是light  presentTheme ---> system 
    if (presentTheme === "system") {
      watchSystemThemeChange()
      // 修改
      // 立刻重新获取系统主题
      setRealTimeTheme(getLocalTheme())
      return 
    }

    // 修改realTimeTheme
    setRealTimeTheme(presentTheme)

  }, [presentTheme])

  // useEffect(() => {

  // }, [])


  // 设置当前主题 
  const mutatePresentTheme = useCallback((newTheme: ValidTheme) => {
    console.log("用户要更改主题了", newTheme)
    setPresentTheme(newTheme)

  }, [setPresentTheme])


return {
  presentTheme,
  mutatePresentTheme,
  themeSelectData,
  realTimeTheme
  // theme数据
}
}