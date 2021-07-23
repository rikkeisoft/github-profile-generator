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
import Support from "@components/screens/Support";
import { LOCAL_STORAGE_KEY } from "src/utils/constants";
import EndMain from "@components/screens/EndMain";
import ConfigForm from "@components/screens/ConfigForm";

export default function Main() {
  const [info, setInfo] = useState(initState);
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
    const localInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (!localInfo) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initState));
      setInfo(initState);
    } 
    else
      setInfo(localInfo);
  }, []);

  const handleOnChangeInfo = newValue => {
    const { key, value } = newValue;
    const newInfo = {
      ...info,
      [key]: {
        ...info[key],
        ...value,
      },
    };
    
    setInfo(newInfo);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newInfo));
  }

  const handleOnResetForm = () => {
    setInfo(initState);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initState));
  }

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
      <Support
        data={info?.support}
        onChangeInfo={handleOnChangeInfo}
      />
      <EndMain
        dataSocial={social}
        dataAddons={addon}
      />
      <ConfigForm 
        onResetForm={handleOnResetForm}
      />
    </main>
  )
}