import { useContext, useEffect, useState } from 'react'
import { act } from 'react-dom/test-utils'
import { RenderContext } from 'src/contexts/RenderContext'
import { LOCAL_STORAGE_KEY } from 'src/utils/constants'
import debounce from 'src/utils/debounce'

const initValue = {
  theme: 'none',
  titleColor: '#ffffff',
  textColor: '#ffffff',
  bgColor: '#000000',
  hideBorder: false,
  cacheSeconds: '1800',
  locale: 'en',
}

export default function GithubStats({ name }) {
  const [stats, setStats] = useState(initValue)
  const { render, setRender } = useContext(RenderContext)

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

    act(() => setStats(info.customize[name]))
  }, [])

  const debounceSetRender = debounce(setRender, 300)

  const handleOnChangeValue = (e) => {
    const info = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    let newStats
    if (e.target.name === 'hideBorder')
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

    act(() => setStats(newStats))
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCustomize))
    act(() => debounceSetRender(!render))
  }

  return (
    <div className="ml-6 p-2 w-3/4 border-2 border-black bg-blue-50">
      <p className="text-lg border-b border-gray-500">
        {name === 'githubStatsCard' ? 'Customize Github Stats Card' : 'Customize Top Skills Card'}
      </p>
      <div className="mt-2 flex flex-col justify-center sm:text-lg">
        <label htmlFor="card-theme">
          Theme:&nbsp;
          <select
            id="card-theme"
            name="theme"
            value={stats?.theme}
            onBlur={handleOnChangeValue}
            onChange={handleOnChangeValue}
          >
            <option value="none">none</option>
            <option value="dark">Dark</option>
            <option value="radical">Radical</option>
            <option value="merko">Merko</option>
            <option value="gruvbox">Gruvbox</option>
            <option value="tokyonight">Tokyonight</option>
            <option value="onedark">Onedark</option>
            <option value="cobalt">Cobalt</option>
            <option value="synthwave">Synthwave</option>
            <option value="hightcontrast">Hightcontrast</option>
            <option value="dracula">Dracula</option>
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
