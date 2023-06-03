// deps
import { Box } from "@mantine/core"

// components
import TableView from "./components/TableView"

// layout
import TableLayout from "../../layout/TableLayout"

export default function Home() {
  return (
    <TableLayout>
      <TableView />
    </TableLayout>
  )
}

// mantine div p  他就没法给你明暗主题
// 长期存在的
// layout 布局