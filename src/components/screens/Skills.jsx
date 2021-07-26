import Input from '@components/elements/Input'
import Checkbox from '@components/elements/Checkbox'

const renderData = (defaultValue, data, handleOnCheckbox) => {
  return (
    <div className="mb-10">
      <Input 
        defaultValue={defaultValue}
        readOnly
      />
      <div className="pt-4 pl-4 flex flex-wrap sm:pl-10">
        {
          data?.map(skill => (
            <Checkbox
              key={skill.name}
              skillName={skill.name}
              check={skill.checked}
              imgSrc={skill.src}
              onCheckbox={handleOnCheckbox}
            />
          ))
        }
      </div>
    </div>
  )
}

export default function Skills({ data, onChangeInfo }) {
  const handleOnCheckbox = newValue => {
    const checkSkill = {
      key: 'skills',
      value: newValue,
    }

    onChangeInfo(checkSkill)
  }

  return (
    <div className="pb-12">
      <div className="mb-4 flex items-center">
        <h2 className="title flex-1">Skills</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Skills"
            className="pl-3 py-1 leading-4 text-sm border-2 border-black"
          />
          <span className="absolute top-0.5 right-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </div>
      { renderData('Programming Languages', data?.proLang, handleOnCheckbox) }
      { renderData('Frontend Development', data?.frontendDev, handleOnCheckbox) }
      { renderData('Backend Development', data?.backendDev, handleOnCheckbox) }
      { renderData('Mobile App Development', data?.mobileDev, handleOnCheckbox) }
      { renderData('AI/ML', data?.ai_ml, handleOnCheckbox) }
      { renderData('Database', data?.database, handleOnCheckbox) }
      { renderData('Data Visualization', data?.dataVisual, handleOnCheckbox) }
      { renderData('Devops', data?.devops, handleOnCheckbox) }
      { renderData('Backend as a Service(BaaS)', data?.baas, handleOnCheckbox) }
      { renderData('Framework', data?.framework, handleOnCheckbox) }
      { renderData('Testing', data?.testing, handleOnCheckbox) }
      { renderData('Software', data?.software, handleOnCheckbox) }
      { renderData('Static Site Generators', data?.staticGen, handleOnCheckbox) }
      { renderData('Game Engines', data?.gameEngine, handleOnCheckbox) }
      { renderData('Automation', data?.automation, handleOnCheckbox) }
      { renderData('Other', data?.other, handleOnCheckbox) }
    </div>
  )
}