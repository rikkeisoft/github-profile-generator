import { useEffect, useState } from 'react'
import { act } from 'react-dom/test-utils'

const apiURL = 'https://api.github.com/repos/LeDucLoi193/github-profile-clone'

export default function Header() {
  const [stats, setStats] = useState({
    starCount: 0,
    forkCount: 0,
  })

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(apiURL)
      const data = await response.json()
      const { stargazers_count, forks_count } = data

      act(() =>
        setStats({
          starCount: stargazers_count,
          forkCount: forks_count,
        }),
      )
    }

    fetchData()

    return () => {}
  }, [])

  return (
    <div className="flex flex-col justify-center items-center py-2 border-b border-gray-300">
      <img src="https://avatars.githubusercontent.com/u/53306165?v=4" alt="Logo" className="w-12 h-12 cursor-pointer" />
      <span className="leading-5 text-sm font-medium text-blue-900 cursor-pointer sm:text-2xl">
        GitHub Profile README Generator
      </span>
      <div className="flex my-1">
        <button className="sm:text-sm btn">
          Star this repo
          <span className="ml-1 text-purple-600">{stats.starCount}</span>
        </button>
        <button className="ml-4 sm:text-sm btn">
          Fork on Github
          <span className="ml-1 text-purple-600">{stats.forkCount}</span>
        </button>
      </div>
    </div>
  )
}
