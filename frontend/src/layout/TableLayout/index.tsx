// deps --> denpendencies 依赖
import { AppShell, Box, Button } from "@mantine/core"
import { PropsWithChildren, useEffect } from "react"
import { useTranslation } from "react-i18next"
import useSocket from "../../sokect/hooks/useSocket"

// components
import Header from "./components/Header/index"
import Navbar from "./components/Navbar"


export default function TableLayout(props: PropsWithChildren) {

  const { i18n } = useTranslation()
  const { submitNewVersion } = useSocket()

  // useEffect(() => {
  //   // console.log("presentLanguage", presentLanguage)
  // }, [presentLanguage])
  
  // 试用期 

  useEffect(() => {
    const localLang = localStorage.getItem("lang")
    if (!localLang) return
    i18n.changeLanguage(JSON.parse(localLang))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AppShell header={ <Header /> } navbar={ <Navbar /> }>
      {/* 这块写的就是你的视图 */}
      <Box pl={280}>
        { props.children }
        <Button color="transparent" onClick={ submitNewVersion } className="bg-#3370FF">submit</Button>
      </Box>
    </AppShell>
  )
}


// 一种是按 拼音的首字母排序
// 需要把你的自己的依赖 和 第三方依赖分开