import { useState } from "react";
import VisitorsBadge from "./customize/VisitorsBadge";
import GithubStats from "./customize/GithubStats";
import StreakStats from "./customize/StreakStats";

export default function AddOnCheck({ content, name, checked, onCheckbox, canModify }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModifyComponent = () => setIsOpen(!isOpen);

  const handleChoose = e => {
    const newValue = {
      [e.target.name]: e.target.checked,
    }
    onCheckbox(newValue);
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
        <label htmlFor={name} className="cursor-pointer sm:text-xl">{ content }</label>
        {
          canModify && 
          <span className="ml-2 cursor-pointer" onClick={handleModifyComponent}>
            {
              isOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          </span>
          
        }
      </div>

      {
        isOpen && name === "visitorsBadge" &&
        <VisitorsBadge />
      }
      {
        isOpen && (name === "topSkills" || name === "githubStatsCard") &&
        <GithubStats name={name} />
      }
      {
        isOpen && name === "githubStreakStats" &&
        <StreakStats />
      }
    </>
  )
}