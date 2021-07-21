import Input from "@components/elements/Input";

import styles from '/styles/components/screens/subtitle.module.scss'

export default function Subtitle({ data, onChangeInfo }) {
  const handleOnChangeInput = newValue => {
    const newSubtitle = {
      key: "subtitle",
      value: newValue,
    }

    onChangeInfo(newSubtitle);
  }

  return (
    <div className={styles.subtitle}>
      <h2 className="title">Subtitle</h2>
      <div className={styles.subtitle__input}>
        <Input 
          defaultValue={data?.prefix}
          placeholder={data?.sub}
          name="sub"
          onChangeInput={handleOnChangeInput}
        />
      </div>
    </div>
  )
}