import styled from 'styled-components'

// UI元件
const Header = () => {
  return (
    <header>
      <nav>
        <a className="link-formats" href="#">
          <span className="nav-title">Chin-Yang, Huang</span>
        </a>
        <div className="nav-group">
          <label htmlFor="nav-darkmode-toggle" className="nav-icon">
            <StyledSpan>
              <i className="fa fa-moon me-1"></i>
              深色模式
            </StyledSpan>
          </label>
          <input type="checkbox" id="nav-darkmode-toggle" />
        </div>
      </nav>
    </header>
  )
}

// UI元件樣式
const StyledSpan = styled.span`
  white-space: nowrap;
`

export default Header
