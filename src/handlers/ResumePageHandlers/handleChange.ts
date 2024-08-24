// event handler
// 可以在 JSX 的對應 input 利用 (e)=>{} 查看事件物件類型
export const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // change 事件可以重複使用
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}
