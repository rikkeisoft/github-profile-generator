import { useEffect, useState } from "react"
import { LOCAL_STORAGE_KEY } from "src/utils/constants";

const initValue = {
  theme: "none",
  titleColor: "#000000",
  textColor: "#000000",
  bgColor: "#000000",
  hideBorder: false,
  cacheSeconds: "1800",
  locale: "en"
}

export default function GithubStats({ name }) {
  const [stats, setStats] = useState(initValue);

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    setStats(info.customize[name]);
  }, []);

  const handleOnChangeValue = e => {
    const info = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    let newStats;
    if (e.target.name === "hideBorder") 
      newStats = {
        ...stats,
        hideBorder: e.target.checked,
      }
    else 
      newStats = {
        ...stats,
        [e.target.name]: e.target.value,
      }
    const newCustomize = {
      ...info,
      customize: {
        ...info.customize,
        [name]: newStats,
      },
    }

    setStats(newStats);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCustomize));
  }

  return (
    <div className="ml-6 p-2 w-3/4 border-2 border-black bg-blue-50">
      <p className="text-lg border-b border-gray-500">
        { name === "githubStatsCard" ?
            "Customize Github Stats Card" :
            "Customize Top Skills Card"
        }
      </p>
      <div className="mt-2 flex flex-col justify-center sm:text-lg">
        <label htmlFor="card-theme">
          Theme:&nbsp;
          <select id="card-theme" name="theme" value={stats?.theme} onChange={handleOnChangeValue}>
            <option value="none">none</option>
            <option value="Dark">Dark</option>
            <option value="Radical">Radical</option>
            <option value="Merko">Merko</option>
            <option value="Gruvbox">Gruvbox</option>
            <option value="Tokyonight">Tokyonight</option>
            <option value="Onedark">Onedark</option>
            <option value="Cobalt">Cobalt</option>
            <option value="Synthwave">Synthwave</option>
            <option value="Hightcontrast">Hightcontrast</option>
            <option value="Dracula">Dracula</option>
          </select>
        </label>

        <label htmlFor="title-color">
          Title Color:&nbsp;
          <input 
            type="color"
            name="titleColor"
            id="title-color"
            value={stats.titleColor}
            className="w-6"
            onChange={handleOnChangeValue}
          />
        </label>

        <label htmlFor="text-color">
          Text Color:&nbsp;
          <input 
            type="color"
            name="textColor"
            id="text-color"
            value={stats.textColor}
            className="w-6"
            onChange={handleOnChangeValue}
          />
        </label>

        <label htmlFor="bg-color">
          Background Color:&nbsp;
          <input 
            type="color"
            name="bgColor"
            id="bg-color"
            value={stats.bgColor}
            className="w-6"
            onChange={handleOnChangeValue}
          />
        </label>

        <label htmlFor="card-checkbox">
          Hide border:&nbsp;
          <input 
            type="checkbox"
            name="hideBorder"
            id="card-checkbox"
            checked={stats.hideBorder}
            onChange={handleOnChangeValue}
          />
        </label>

        <label htmlFor="card-cache">
          Cache Seconds:&nbsp;
          <input 
            type="number"
            name="cacheSeconds"
            id="card-cache"
            value={stats.cacheSeconds}
            min="1800"
            max="86400"
            placeholder="1800"
            onChange={handleOnChangeValue}
          />
        </label>

        <label htmlFor="card-locale">
          Locale:&nbsp;
          <input 
            type="text"
            name="locale"
            id="card-locale"
            value={stats.locale}
            className="w-6"
            onChange={handleOnChangeValue}
          />
        </label>
      </div>
    </div>
  )
}