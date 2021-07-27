import { useContext, useEffect, useState } from 'react'
import { RenderContext } from 'src/contexts/RenderContext'
import { LOCAL_STORAGE_KEY } from 'src/utils/constants'
import debounce from 'src/utils/debounce'

export default function StreakStats() {
  const [stats, setStats] = useState({
    theme: 'default',
  })
  const { render, setRender } = useContext(RenderContext)

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

    setStats(info.customize.streakStats)
  }, [])

  const debounceSetRender = debounce(setRender, 300)

  const handleOnChangeValue = (e) => {
    const info = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    const newCustomize = {
      ...info,
      customize: {
        ...info.customize,
        streakStats: {
          [e.target.name]: e.target.value,
        },
      },
    }

    setStats((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCustomize))
    debounceSetRender(!render)
  }
  return (
    <div className="ml-6 p-2 w-3/4 border-2 border-black bg-blue-50">
      <p className="text-lg border-b border-gray-500">Customize Streak Stats Card</p>
      <div className="mt-2 flex flex-col justify-center sm:text-lg">
        <label htmlFor="card-theme">
          Theme:&nbsp;
          <select
            id="card-theme"
            name="theme"
            value={stats.theme}
            onBlur={handleOnChangeValue}
            onChange={handleOnChangeValue}
          >
            <option value="default">default</option>
            <option value="dark">dark</option>
            <option value="highcontrast">highcontrast</option>
          </select>
        </label>
      </div>
    </div>
  )
}
