import { useEffect, useState } from "react";
import Subtitle from "../screens/Subtitle";
import Title from "../screens/Title";
import Work from "../screens/Work";

const initState = {
  title: {
    prefix: "Hi, I'm ",
    name: null,
  },
  subtitle: {
    sub: "A subtitle for README",
  },
  prefix: {
    currentWork: "🔭 I’m currently working on",
    collaborateOn: "👯 I’m looking to collaborate on",
    helpWith: "🤝 I’m looking for help with",
    currentLearn: "🌱 I’m currently learning",
    askMe: "💬 Ask me about",
    reachMe: "📫 How to reach me",
    myProjects: "👨‍💻 All of my projects are available at",
    myArticles: "📝 I regularly write articles on",
    myExp: "📄 Know about my experiences",
    fact: "⚡ Fun fact",
  },
  projectName: {
    currentWork: "",
    collaborateOn: "",
    helpWith: "",
  },
  link: {
    currentWork: "",
    collaborateOn: "",
    helpWith: "",
  },
  data: {
    currentLearn: "",
    askMe: "",
    reachMe: "",
    myProjects: "",
    myArticles: "",
    myExp: "",
    fact: "",
  },
  placeholder: {
    currentLearn: "Frameworks, courses etc.",
    askMe: "react, vue and gsap",
    reachMe: "example@gmail.com",
    myProjects: "portfolio link",
    myArticles: "blog link",
    myExp: "resume link",
    fact: "I think I am funny",
  },
}

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
    </main>
  )
}