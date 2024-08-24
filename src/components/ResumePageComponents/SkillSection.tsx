import styled from 'styled-components'

// 為 Props 定義型別
type sp = {
  id: number
  title: string
  language: string
  linkGitHub: string
  linkWebAPIs: string
  websiteRender: string
  cover: string
  root?: string | undefined
  user1?: string | undefined
  password?: string | undefined
  userMe?: string | undefined
}

type Props = {
  sps: sp[]
}

const SkillSection = ({ sps }: Props) => {
  return (
    <div className="skill-section">
      {/* <!-- 作品描述 --> */}
      <div className="skill">
        <h3 className="skill-name">作品描述</h3>

        <p className="skill-description">
          個人期望能應徵後端工程師職缺。除了後端技能外，我也具備前端開發經驗，對 React
          框架有基礎認知，這些經驗幫助我更好地理解全端開發流程，並提高與前端工程師協作的效率。
        </p>

        <p className="skill-description">
          您可使用提供的測試帳號直接登入專案網站。請注意，初次連線時可能需要等待伺服器重啟，時間最長約為 1 分鐘；若伺服器在 15
          分鐘內沒有偵測到入站流量則會自動關閉。從提供的 Web APIs 文件連結，亦可直接查看專案的路由設計，以及各條路由的介紹與示範操作。
        </p>

        <h3 className="skill-name">作品列表</h3>
        <ul>
          {sps.map((sp) => (
            <StyledA key={sp.id} href={sp.websiteRender} target="_blank" rel="noopenner noreferrer">
              <li>{sp.title}</li>
            </StyledA>
          ))}
        </ul>
      </div>

      {/* 作品集: 將陣列資料迴圈出來 */}
      {sps.map((sp) => {
        return (
          <div key={sp.id} className="skill image-container">
            <h3 className="skill-name">{sp.title}</h3>
            <div>
              <a className="link-formats" href={sp.linkGitHub} target="_blank" rel="noopenner noreferrer">
                <i className="fa-brands fa-github me-1"></i>
                <span>GitHub 頁面</span>
              </a>

              {
                // 依 sp.linkWebAPIs 的有無決定是否顯示
                sp.linkWebAPIs && (
                  <a className="link-formats" href={sp.linkWebAPIs} target="_blank" rel="noopenner noreferrer">
                    <span> | Web APIs 文件</span>
                  </a>
                )
              }
            </div>

            <div className="mb-2">
              <a className="link-formats" href={sp.websiteRender} target="_blank" rel="noopenner noreferrer">
                <span>網站入口</span>
              </a>

              <span> | 使用 {sp.language} 開發</span>
            </div>
            <a className="link-formats" href={sp.websiteRender} target="_blank" rel="noopenner noreferrer">
              <img className="text-center img-shadow" src={sp.cover} alt={sp.title} />
            </a>

            {/* 測試帳號資訊 */}
            <ul>
              <div className="mt-2">
                <strong>測試帳號</strong>
              </div>
              {
                // 寫成箭頭函式的形式, 並用小括號立即執行
                (() => {
                  // 依密碼的有無決定是否顯示帳號資訊
                  if (sp.root) {
                    return (
                      <>
                        <StyledLi className="ms-3">帳號: {sp.root}</StyledLi>
                        <StyledLi className="ms-3">帳號: {sp.user1}</StyledLi>
                        <StyledLi className="ms-3 mb-3">密碼: {sp.password}</StyledLi>
                      </>
                    )
                  } else if (sp.userMe) {
                    return (
                      <>
                        <StyledLi className="ms-3">帳號: {sp.userMe}</StyledLi>
                        <StyledLi className="ms-3 mb-3">密碼: {sp.password}</StyledLi>
                      </>
                    )
                  } else {
                    return <StyledLi className="ms-3">並未實作使用者驗證機制</StyledLi>
                  }
                })()
              }
            </ul>
          </div>
        )
      })}
    </div>
  )
}

// UI 元件樣式
const StyledLi = styled.li`
  white-space: nowrap;
`

const StyledA = styled.a`
  text-decoration: none;
  color: var(--main-text-color);

  &:hover {
    color: var(--nav-link-color);
  }
`


export default SkillSection
