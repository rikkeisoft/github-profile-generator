import Input from "@components/elements/Input";

import styles from '/styles/components/screens/work.module.scss'

export default function Work({ data, onChangeInfo }) {
  console.log(data);

  const handleOnChangeInput = (newValue, key) => {
    const newWork = {
      key,
      value: newValue,
    }

    console.log(newWork);

    // onChangeInfo(newWork);
  }

  return (
    <div className={styles.work}>
      <h2 className="title">Work</h2>
      <div className={styles.work__input}>
        {
          data.slice(0, 3).map(obj => (
            <div className={styles.work__input__info} key={obj.prefix}>
              <Input
                id="prefix"
                name={obj.diffKey} 
                defaultValue={obj.prefix}
                onChangeInput={handleOnChangeInput}
              />
              <Input
                id="projectName"
                name={obj.diffKey}
                placeholder="project name"
                defaultValue={obj.projectName}
                onChangeInput={handleOnChangeInput}
              />
              <Input
                id="projectLink"
                name={obj.diffKey}
                placeholder="project link"
                defaultValue={obj.link}
                onChangeInput={handleOnChangeInput}
              />
            </div>
          ))
        }

        {
          data.slice(3).map(obj => (
            <div className={styles.work__input__info} key={obj.prefix}>
              <Input
                id="prefix"
                name={obj.diffKey} 
                defaultValue={obj.prefix}
                onChangeInput={handleOnChangeInput}
              />
              <Input
                id="data"
                name={obj.diffKey}
                defaultValue={obj.data}
                placeholder={obj.placeholder}
                onChangeInput={handleOnChangeInput}
              />
          </div>
          ))
        }
      </div>
    </div>
  )
}