import { useState } from 'react'
import VisitorsBadge from './customize/VisitorsBadge'
import GithubStats from './customize/GithubStats'
import StreakStats from './customize/StreakStats'
import Setting from './svg/Setting'
import Close from './svg/Close'
import { act } from 'react-dom/test-utils'

export default function AddOnCheck({ content, name, checked, onCheckbox, canModify }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleModifyComponent = () => act(() => setIsOpen(!isOpen))

  const handleChoose = (e) => {
    const newValue = {
      [e.target.name]: e.target.checked,
    }
    onCheckbox(newValue)
  }

  return (
    <>
      <div className="my-2 flex items-center">
        <input
          id={name}
          name={name}
          type="checkbox"
          className="mr-3 cursor-pointer"
          checked={checked}
          onChange={handleChoose}
        />
        <label htmlFor={name} className="cursor-pointer sm:text-xl">
          {content}
        </label>
        {canModify && (
          <button
            className="ml-2 cursor-pointer"
            onClick={handleModifyComponent}
          >
            {isOpen ? <Setting /> : <Close />}
          </button>
        )}
      </div>

      {isOpen && name === 'visitorsBadge' && <VisitorsBadge />}
      {isOpen && (name === 'topSkills' || name === 'githubStatsCard') && <GithubStats name={name} />}
      {isOpen && name === 'githubStreakStats' && <StreakStats />}
    </>
  )
}
