import { DescriptionSection, Header, InfoSection, SkillSection } from '../components/ResumePageComponents'

// 載入資料
import { sps } from '../../data.json'


const ResumePage = () => {
  return (
    <>
      <Header />
      <main>
        <InfoSection />
        <DescriptionSection />
        <SkillSection sps={sps} />
      </main>
    </>
  )
}

export default ResumePage
