import Input from "@components/elements/Input";

import styles from '/styles/components/screens/work.module.scss'

export default function Work({ data, onChangeInfo }) {
  const handleOnChangeInput = (newValue, key) => {
    // expected: { prefix: "prefix", value: { currentWork: "abcxyz" } }
    const newWork = {
      key,
      value: newValue,
    }

    onChangeInfo(newWork);
  }

  return (
    <div className={styles.work}>
      <h2 className="title">Work</h2>
      <div className={styles.work__input}>
        {
          data.slice(0, 3).map(obj => (
            <div className={styles.work__input__info} key={obj.prefix}>
              <Input
                name={obj.diffKey} 
                defaultValue={obj.prefix}
                onChangeInput={value => handleOnChangeInput(value, "prefix")}
              />
              <Input
                name={obj.diffKey}
                placeholder="project name"
                defaultValue={obj.projectName}
                onChangeInput={value => handleOnChangeInput(value, "projectName")}
              />
              <Input
                name={obj.diffKey}
                placeholder="project link"
                defaultValue={obj.link}
                onChangeInput={value => handleOnChangeInput(value, "link")}
              />
            </div>
          ))
        }

        {
          data.slice(3).map(obj => (
            <div className={styles.work__input__info} key={obj.prefix}>
              <Input
                name={obj.diffKey} 
                defaultValue={obj.prefix}
                onChangeInput={value => handleOnChangeInput(value, "prefix")}
              />
              <Input
                name={obj.diffKey}
                defaultValue={obj.data}
                placeholder={obj.placeholder}
                onChangeInput={value => handleOnChangeInput(value, "data")}
              />
          </div>
          ))
        }
      </div>
    </div>
  )
}