export default function getLocalTheme() {
  const localTheme = localStorage.getItem("local-theme") // 读本地缓存
  if (!localTheme || JSON.parse(localTheme) === "system") {
    // 立马查看用户系统当前是什么主题
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  
    if (darkThemeMq.matches) {
      return "dark"
    } else {
      return "light"
    }
  }
  return JSON.parse(localTheme)
}