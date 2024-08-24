import { DescriptionSection, Header, InfoSection, SkillSection } from '../components/ResumePageComponents'

// 載入資料
import { sps } from '../../data.json'

// 載入 handlers
import { handleChange } from '../handlers/ResumePageHandlers/handleChange'

const ResumePage = () => {
  // 事件處理程序
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)
  
  return (
    <>
      <Header onChange={onChange} />
      <main>
        <InfoSection />
        <DescriptionSection />
        <SkillSection sps={sps} />
      </main>
    </>
  )
}

export default ResumePage
