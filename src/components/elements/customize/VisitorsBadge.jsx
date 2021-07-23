import { useEffect, useState } from "react"
import { LOCAL_STORAGE_KEY } from "src/utils/constants";

const initValue = {
  "styles": "Flat",
  "color": "#0e75b6",
  "labelText": "Profile views"
}

export default function VisitorsBadge() {
  const [badge, setBadge] = useState(initValue);

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    setBadge(info.customize.badge);
  }, []);

  const handleOnChangeValue = e => {
    const info = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const newCustomize = {
      ...info,
      customize: {
        ...info.customize,
        badge: {
          ...info.customize.badge,
          [e.target.name]: e.target.value,
        },
      },
    }
    setBadge(prev => ({ ...prev, [e.target.name]: e.target.value}));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCustomize));
  }

  return (
    <div className="ml-6 p-2 w-3/4 border-2 border-black bg-blue-50">
      <p className="text-lg border-b border-gray-500">Customize Badge</p>
      <div className="mt-2 flex flex-col justify-center">
        <label htmlFor="badge-style" className="sm:text-lg">
          Style:&nbsp;
          <select id="badge-style" name="styles" value={badge?.styles} onChange={handleOnChangeValue}>
            <option value="Flat">Flat</option>
            <option value="Flat-Square">Flat Square</option>
            <option value="Plastic">Plastic</option>
          </select>
        </label>

        <label htmlFor="badge-color" className="sm:text-lg">
          Color:&nbsp;
          <input 
            type="color"
            name="color"
            id="badge-color"
            value={badge.color}
            className="w-6"
            onChange={handleOnChangeValue}
          />
        </label>

        <label htmlFor="badge-text" className="sm:text-lg">
          Label Text:&nbsp;
          <input 
            type="text"
            name="labelText"
            id="badge-text"
            value={badge?.labelText}
            className="w-2/4 pl-2 bg-blue-100"
            onChange={handleOnChangeValue}
          />
        </label>

        <label htmlFor="badge-prevew" className="mt-2 sm:text-lg">
          Preview:&nbsp;
          <span>
            <input
              id="badge-prevew"
              type="text"
              value={badge?.labelText}
              readOnly
              className="w-2/6 px-2 bg-gray-700 rounded-tl-sm rounded-bl-sm text-yellow-50 text-sm"
            />
            <input 
              type="color"
              value={badge.color}
              readOnly
              className="relative w-6 h-6 sm:text-sm before:content-['0'] before:absolute before:right-2 before:top-0.5 before:text-white"
              // className="w-4 pl-1 text-sm text-white bg-blue-400 rounded-tr-sm rounded-br-sm before:content-['0'] before:block"
            />
          </span>
        </label>
      </div>
    </div>
  )
}