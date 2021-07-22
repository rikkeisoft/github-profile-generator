import Input from "./Input";

export default function SocialInput({ name, imgSrc, placeholder, value, onChangeSocialInput }) {
  const handleOnChageInput = newValue => {
    onChangeSocialInput(newValue)
  }
  return (
    <div className="w-1/3 mb-8 even:ml-16 flex justify-center items-center">
      <img
        src={imgSrc}
        alt="logo"
        className="w-6 h-6 mr-2 sm:w-8 sm:h-8 sm:mr-0"
      />
      <Input
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        onChangeInput={handleOnChageInput}
      />
    </div>
  )
}