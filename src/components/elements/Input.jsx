import { useEffect, useState } from 'react'

export default function Input(props) {
  const [text, setText] = useState("");
  const { defaultValue, name, placeholder = "", readOnly = false, onChangeInput } = props;

  useEffect(() => {
    defaultValue && setText(defaultValue);
  }, [defaultValue]);

  const handleOnChangeInput = e => {
    setText(() => e.target.value);
    const newValue = {
      [e.target.name]: e.target.value,
    }
    onChangeInput(newValue, e.target.id);
  }

  return (
    <input
      className="pl-2 pb-0.5 w-full border-b border-gray-400 text-sm focus:outline-none focus:border-blue-700 sm:first:ml-0 sm:ml-6 sm:text-lg" 
      name={name}
      type="text"
      value={text}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={handleOnChangeInput}
    />
  )
}