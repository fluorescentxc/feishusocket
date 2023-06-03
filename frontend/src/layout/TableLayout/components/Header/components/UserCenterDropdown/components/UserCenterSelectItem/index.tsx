import { Box, Text, HoverCard, SelectItem } from "@mantine/core"
import { IconChevronRight } from "@tabler/icons-react"
import { useTranslation } from "react-i18next"
// index.d.ts lodash 
import { map } from "lodash"
import { useCallback } from "react"

interface UserCenterSelectItemProps<ValidSelectValue = string> {
  label: string
  defaultSelect: string 
  selectData: SelectItem[]
  onSelectChange: (newValue: ValidSelectValue) => void // 1  不行的 扣2 
}

// github issue 

/**
 * 组件
 * 内置的类型 泛型: 写参数
 * 天生提供给你的便利的写法
 */
export function LeftSelectPanel<ValidSelectValue = string>({ selectData, defaultSelect, onSelectChange }: Omit<UserCenterSelectItemProps<ValidSelectValue>, "label">) {
  // Array.prototype.map
  // 很多的box
  // 没有根节点的jsx表达式

  const changeCurrentSelect = useCallback((newSelectedValue: ValidSelectValue) => {
    onSelectChange(newSelectedValue)
  }, [onSelectChange])

  return (
    <Box>
     {
       map(selectData, (selectDescriptor) => {
        // 这里有点
        return <Box className="cursor-pointer" onClick={  () => changeCurrentSelect(selectDescriptor.value as ValidSelectValue) } key={ selectDescriptor.value }>{ selectDescriptor.label }</Box>
      })
     }
    </Box>
  )
}

export default function UserCenterSelectItem<ValidSelectValue = string>({ label, ...selectItemProps }: UserCenterSelectItemProps<ValidSelectValue>) {
  
  const { t } = useTranslation()
  
  return (
    <HoverCard position="left">
      <HoverCard.Target>
        <Box className="px-3 h-10 flex justify-between items-center text-sm cursor-pointer">
          {/* 自己就要处理好这个明暗主题 isDarkMode ? "#fff" : "#1F2329" */}
          <Text className="text-#1F2329">{ t(label) }</Text>
          <IconChevronRight color="#646A73" width={14} height={14} />
        </Box>
      </HoverCard.Target>

      <HoverCard.Dropdown>
        {/* 是外部才知道的 */}
        <LeftSelectPanel<ValidSelectValue> {...selectItemProps} />
      </HoverCard.Dropdown>

    </HoverCard>
  )
}

// 字节 400行 -->  600行  commit 

// 组件