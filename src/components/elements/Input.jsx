import { useEffect, useState } from 'react'
import styles from '/styles/components/elements/input.module.scss'

export default function Input({ defaultValue, name, placeholder, onChangeInput }) {
  const [text, setText] = useState("");

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
      className={styles.input} 
      name={name}
      type="text"
      value={text}
      onChange={handleOnChangeInput}
      placeholder={placeholder && placeholder}
    />
  )
}