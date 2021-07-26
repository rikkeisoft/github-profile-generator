import AddOn from '@components/screens/AddOn'
import ConfigForm from '@components/screens/ConfigForm'
import EndMain from '@components/screens/EndMain'
import Skills from '@components/screens/Skills'
import Social from '@components/screens/Social'
import Support from '@components/screens/Support'
import addonData from 'public/json/add-ons.json'
import dataSkills from 'public/json/skills.json'
import socialData from 'public/json/social.json'
import { addCheckedProperty, convertValue, mapObjToArr } from 'src/utils/convertData'
import Subtitle from '../screens/Subtitle'
import Title from '../screens/Title'
import Work from '../screens/Work'

export default function Main({ info, onChangeMainInfo, onResetMainForm, onRestoreMainForm, onGeneratePart }) {
  const workObj = {
    prefix: info?.prefix,
    projectName: info?.projectName,
    link: info?.link,
    data: info?.data,
    placeholder: info?.placeholder,
  }
  const workArr = mapObjToArr(workObj)
  const skills = addCheckedProperty(dataSkills, info?.skills)
  const social = convertValue(socialData, info?.social, 'value')
  const addon = convertValue(addonData, info?.add_ons, 'checked')

  return (
    <main className="px-5 py-8 sm:px-12 sm:py-12">
      <Title 
        data={info?.title}
        onChangeInfo={onChangeMainInfo} 
      />
      <Subtitle
        data={info?.subtitle}
        onChangeInfo={onChangeMainInfo}
      />
      <Work 
        data={workArr}
        onChangeInfo={onChangeMainInfo}
      />
      <Skills
        data={skills} 
        onChangeInfo={onChangeMainInfo}
      />
      <Social
        data={social} 
        onChangeInfo={onChangeMainInfo}
      />
      <AddOn 
        data={addon} 
        onChangeInfo={onChangeMainInfo}
      />
      <Support
        data={info?.support}
        onChangeInfo={onChangeMainInfo}
      />
      <EndMain
        dataSocial={social}
        dataAddons={addon}
        onGeneratePart={onGeneratePart}
      />
      <ConfigForm 
        onResetForm={onResetMainForm}
        onRestoreForm={onRestoreMainForm}
      />
    </main>
  )
}