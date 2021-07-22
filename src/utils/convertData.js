// for Work part
export const mapObjToArr = obj => {
  let result = [];

  for (const prefixKey in obj.prefix) {
    if (obj.prefix.hasOwnProperty) {
      let newObj = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key].hasOwnProperty(prefixKey)) {
          newObj = {
            ...newObj,
            [key]: obj[key][prefixKey],
            diffKey: prefixKey,
          }
        }
      }
      
      result.push(newObj)
    }
  }

  return result;
}

// for Skills part
export const addCheckedProperty = (dataSkills, skills) => {
  if (!skills)
    return;
  
  let result = {...dataSkills}
  for (const key in dataSkills) {
    if (dataSkills.hasOwnProperty(key)) {
      const newArr = result[key].map(dataSkill => {
        const checked = skills[dataSkill.name];
        return {
          ...dataSkill,
          checked,
        }
      });

      result = { ...result, [key]: newArr };
    }
  }

  return result;
}

// for Social, Add-ons part
export const convertValue = (data, infoData, key) => {
  if (!infoData)
    return;

  let result = data.map(item => {
    return {
      ...item,
      [key]: infoData[item.key],
    }
  });

  return result;
}