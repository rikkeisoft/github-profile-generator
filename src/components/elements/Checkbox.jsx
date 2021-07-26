export default function Checkbox({ imgSrc, skillName, check, onCheckbox }) {
  const handleChoose = e => {
    const newValue = {
      [e.target.name]: e.target.checked,
    }
    onCheckbox(newValue)
  }

  return (
    <div className="w-1/3 mb-4 flex items-center cursor-pointer sm:w-1/4 sm:mb-10">
      <input
        id={skillName}
        name={skillName} 
        type="checkbox" 
        className="mr-3 cursor-pointer"
        checked={check}
        onChange={handleChoose}
      />
      <label htmlFor={skillName} className="cursor-pointer">
        <img
          title={skillName}
          src={imgSrc}
          alt="icon"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      </label>
    </div>
  )
}