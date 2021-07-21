import Input from "../elements/Input";

import styles from '/styles/components/screens/title.module.scss'

export default function Title({ data, onChangeInfo }) {
  const handleOnChangeInput = newValue => {
    const newTitle = {
      key: "title",
      value: newValue,
    }

    onChangeInfo(newTitle);
  }

  return (
    <div className={styles.title}>
      <h2 className="title">Title</h2>
      <div className={styles.title__input}>
        <div className={styles.title__input__first}>
          <Input 
            defaultValue={data?.prefix}
            name="prefix"
            onChangeInput={handleOnChangeInput}
          />
        </div>
        <div className={styles.title__input__last}>
          <Input
            defaultValue={data?.name}
            placeholder="name"
            name="name"
            onChangeInput={handleOnChangeInput}
          />
        </div>
        
      </div>
    </div>
  )
}