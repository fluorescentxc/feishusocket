// deps
import { SelectItem } from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"
import { useCallback } from "react"
import { useTranslation } from "react-i18next"

// types
import { ValidLang } from "../../../../../../../i18n/types"

const languageSelectData: SelectItem[] = [
  {
    label: "简体中文",
    value: "zh"
  },
  {
    label: "English",
    value: "en"
  }
]

// 都可以使用和语言相关的任何方法和状态 

export default function useLanguageSelectData() {

  // 修改语言的对应函数
  // 拿到当前设置的语言 
  // 假设用户设置一个多语言 中文 希望长久有效 localStorage 写到本地缓存里去
  // localStorage 
  const [presentLanguage, setPresentLanguage] = useLocalStorage<ValidLang>({ key: 'lang', defaultValue: "en" })
  const { i18n } = useTranslation()

  // 设置当前语言 
  const mutatePresentLanguage = useCallback((newLang: ValidLang) => {
    // 判断一下 如果他传递进来的newLang 和当前选中的lang 是一个语言 那就无需更改
    // 通知i18n 
    setPresentLanguage(newLang)
    i18n.changeLanguage(newLang)
  }, [i18n, setPresentLanguage])

  return {
    languageSelectData,
    presentLanguage,
    mutatePresentLanguage
  }
}