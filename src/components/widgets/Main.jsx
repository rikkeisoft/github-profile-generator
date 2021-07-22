import Skills from "@components/screens/Skills";
import { useEffect, useState } from "react";
import Subtitle from "../screens/Subtitle";
import Title from "../screens/Title";
import Work from "../screens/Work";
import Social from "@components/screens/Social";
import AddOn from "@components/screens/AddOn";

import initState from "public/json/initData.json"
import dataSkills from 'public/json/skills.json';
import socialData from 'public/json/social.json'
import addonData from 'public/json/add-ons.json'
import { addCheckedProperty, convertValue, mapObjToArr } from "src/utils/convertData";

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
  const social = convertValue(socialData, info?.social, "value");
  const addon = convertValue(addonData, info?.add_ons, "checked");

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
      <AddOn 
        data={addon} 
        onChangeInfo={handleOnChangeInfo}
      />
    </main>
  )
}