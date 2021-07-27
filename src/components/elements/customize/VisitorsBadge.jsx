import { useContext, useEffect, useState } from 'react'
import { act } from 'react-dom/test-utils'
import { RenderContext } from 'src/contexts/RenderContext'
import { LOCAL_STORAGE_KEY } from 'src/utils/constants'
import debounce from 'src/utils/debounce'

const initValue = {
  styles: 'flat',
  color: '#0e75b6',
  labelText: 'Profile views',
  username: '',
}

export default function VisitorsBadge() {
  const [badge, setBadge] = useState(initValue)
  const { render, setRender } = useContext(RenderContext)

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

    act(() => setBadge({
      ...info.customize.badge,
      username: info.social.github,
    }))
  }, [])

  const debounceSetRender = debounce(setRender, 300)

  const handleOnChangeValue = (e) => {
    const info = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
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

    act(() => setBadge((prev) => ({ ...prev, [e.target.name]: e.target.value })))
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCustomize))
    debounceSetRender(!render)
  }

  return (
    <div className="ml-6 p-2 w-3/4 border-2 border-black bg-blue-50">
      <p className="text-lg border-b border-gray-500">Customize Badge</p>
      <div className="mt-2 flex flex-col justify-center">
        <label htmlFor="badge-style" className="sm:text-lg">
          Style:&nbsp;
          <select
            id="badge-style"
            name="styles"
            value={badge?.styles}
            onBlur={handleOnChangeValue}
            onChange={handleOnChangeValue}
          >
            <option value="flat">Flat</option>
            <option value="flat-square">Flat Square</option>
            <option value="plastic">Plastic</option>
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

        <span className="mt-2 flex items-center sm:text-lg">
          Preview:&nbsp;
          <img
            src={`https://komarev.com/ghpvc/?username=${badge?.username}&label=${badge?.labelText}&color=${badge?.color.slice(1)}&style=${badge?.styles}`}
            alt="preview"
          />
        </span>
      </div>
    </div>
  )
}
