import { Box, Avatar, Text, SelectItem } from "@mantine/core"
import { IconChevronRight } from "@tabler/icons-react"
import UserCenterSelectItem from "./components/UserCenterSelectItem"
import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import useLanguageWorker from "./hooks/useLanguageWorker"
import { ValidLang } from "../../../../../../i18n/types"
import useThemeWorker from "./hooks/useThemeWorker"

export default function UserCenterDropdown() {

  // t是一个函数 用这个函数去包裹你想要多语言的文案
  const { t } = useTranslation()
  const { languageSelectData, presentLanguage, mutatePresentLanguage } = useLanguageWorker()
  const { presentTheme, themeSelectData, mutatePresentTheme } = useThemeWorker()

  return (
    <Box>
      {/* 用户中心 */}
      <Box className="p-4 flex items-center gap-2 w-72  border-b border-#646A73/10 border-solid">
        <Avatar color="#3370FF" className="rounded-full w-12 h-12 bg-#3370FF cursor-pointer">金权</Avatar>
        <Box className="flex flex-col">
          <Text className="text-#1F2329">付金权</Text>
          <Text className="text-sm text-#646A73">飞书个人用户</Text>
        </Box>
      </Box>

      <UserCenterSelectItem<ValidLang> label="lang" selectData={languageSelectData} onSelectChange={ mutatePresentLanguage }  defaultSelect={ presentLanguage }  />
      {/* light dark follow system */}
      <UserCenterSelectItem onSelectChange={ mutatePresentTheme } label="theme" selectData={themeSelectData}  defaultSelect={ presentTheme }  />
    </Box>
  )

  // string !== ValidLang
}