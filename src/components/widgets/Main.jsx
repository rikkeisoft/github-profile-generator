import Skills from "@components/screens/Skills";
import { useEffect, useState } from "react";
import Subtitle from "../screens/Subtitle";
import Title from "../screens/Title";
import Work from "../screens/Work";
import Social from "@components/screens/Social";

import initState from "public/json/initData.json"
import dataSkills from 'public/json/skills.json';
import socialData from 'public/json/social.json'

// for Work part
const mapObjToArr = obj => {
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
const addCheckedProperty = (dataSkills, skills) => {
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

// for Social part
const addValue = (dataSocial, social) => {
  if (!social)
    return;

  let result = dataSocial.map(item => {
    return {
      ...item,
      value: social[item.key],
    }
  });

  return result;
}

export default function Main() {
  const [info, setInfo] = useState(null);
  const workObj = {
    prefix: info?.prefix,
    projectName: info?.projectName,
    link: info?.link,
    data: info?.data,
    placeholder: info?.placeholder,
  }
  const workArr = mapObjToArr(workObj);
  const skills = addCheckedProperty(dataSkills, info?.skills);
  const social = addValue(socialData, info?.social);

  useEffect(() => {
    const localInfo = JSON.parse(localStorage.getItem('info'));
    if (!localInfo) {
      localStorage.setItem('info', JSON.stringify(initState));
      setInfo(initState);
    } 
    else
      setInfo(localInfo);
  }, []);

  const handleOnChangeInfo = newValue => {
    // console.log(newValue);
    const { key, value } = newValue;
    const newInfo = {
      ...info,
      [key]: {
        ...info[key],
        ...value,
      },
    };
    // console.log(newInfo);
    setInfo(newInfo);
    localStorage.setItem('info', JSON.stringify(newInfo));
  }

  // console.log(info);
  return (
    <main className="px-5 py-8 sm:px-12 sm:py-12">
      <Title 
        data={info?.title}
        onChangeInfo={handleOnChangeInfo} 
      />
      <Subtitle
        data={info?.subtitle}
        onChangeInfo={handleOnChangeInfo}
      />
      <Work 
        data={workArr}
        onChangeInfo={handleOnChangeInfo}
      />
      <Skills
        data={skills} 
        onChangeInfo={handleOnChangeInfo}
      />
      <Social
        data={social} 
        onChangeInfo={handleOnChangeInfo}
      />
    </main>
  )
}