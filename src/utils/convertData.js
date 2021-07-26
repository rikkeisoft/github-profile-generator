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

// generate links
export const generateLink = key => {
  switch(key) {
    case 'github':
      return 'https://github.com'
    
    case 'twitter':
      return 'https://twitter.com'

    case 'devto':
      return 'https://dev.to'

    case 'codepen':
      return 'https://codepen.io'

    case 'codesanbox':
      return 'https://codesandbox.com'

    case 'stackoverflow':
      return 'https://stackoverflow.com/users'
    
    case 'linkedin':
      return 'https://linkedin.com/in'

    case 'kaggle':
      return 'https://kaggle.com'

    case 'facebook':
      return 'https://fb.com'

    case 'instagram':
      return 'https://instagram.com'

    case 'dribble':
      return 'https://dribbble.com'

    case 'behance':
      return 'https://www.behance.net'

    case 'medium':
      return 'https://medium.com'

    case 'youtube':
     return 'https://www.youtube.com/c'

    case 'codechef':
      return 'https://www.codechef.com/users'

    case 'hackerrank':
      return 'https://www.hackerrank.com'

    case 'codeforces':
      return 'https://codeforces.com/profile'

    case 'leetcode':
      return 'https://www.leetcode.com'

    case 'topcoder':
      return 'https://www.topcoder.com/members'

    case 'hackerearth':
      return 'https://www.hackerearth.com'

    case 'gfg':
      return 'https://auth.geeksforgeeks.org/user'

    case 'dicord':
      return 'https://discord.gg'

    case 'rss':
      return ''
  }
}