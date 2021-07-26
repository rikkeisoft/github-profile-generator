import Comment from '@components/elements/Comment'
import { useState } from 'react'

const comments = [
  {
    avatarImg: 'https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg',
    title: 'Hihi bought you a coffee.',
    content: 'This looks ace and really helps me to stand out - cheers!',
  },
  {
    avatarImg: 'https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg',
    title: 'Sabo bought you 10 coffees.',
    content: 'I love the readme generator 😻',
  },
  {
    avatarImg: 'https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg',
    title: 'Tage bought you 2 coffees.',
    content: 'This looks ace and really helps me to stand out - cheers!',
  },
  {
    avatarImg: 'https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg',
    title: 'Ace bought you a coffee.',
    content: 'This GitHub readme generator was a killer time saver. Thank you X3!',
  },
  {
    avatarImg: 'https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg',
    title: 'Zoro bought you 5 coffees.',
    content: 'Thank you!',
  },
]

export default function Coffee() {
  const [isOpenTab, setIsOpenTab] = useState(false)

  const handleOpenTab = () => setIsOpenTab(!isOpenTab)

  return (
    <div>
      <div
        className={`
          w-14 h-14 p-4 fixed bottom-4 right-4 shadow-2xl 
          cursor-pointer rounded-full 
          flex items-center justify-items-center bg-yellow-600
          transition duration-500 ease-in-out transform hover:scale-110
        `}
        onClick={handleOpenTab}
      >
        {isOpenTab ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <img src="https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg" alt="coffee" className="w-full" />
        )}
      </div>

      {isOpenTab && (
        <div className="w-80 h-80 p-6 pb-16 fixed bottom-20 right-6 z-10 bg-white overflow-y-scroll rounded-xl shadow-2xl flex flex-col justify-items-center">
          <h1 className="mb-4 text-2xl">Buy me a coffee</h1>

          <div className="p-3 rounded-md flex justify-items-center items-center border-2 border-red-300 bg-red-100 mb-4">
            <span role="img" aria-label="coffee" className="text-3xl">
              ☕
            </span>
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
            <div className="flex justify-items-center items-center">
              <p className="ml-2 border flex items-center justify-items-center p-2.5 w-8 h-8 rounded-full border-red-300 bg-white">
                1
              </p>
              <p className="ml-2 border flex items-center justify-items-center p-2.5 w-8 h-8 rounded-full border-red-300 bg-white">
                3
              </p>
              <p className="ml-2 border flex items-center justify-items-center p-2.5 w-8 h-8 rounded-full border-red-300 bg-white">
                5
              </p>
            </div>
            <input
              type="text"
              placeholder={8}
              className="ml-3 w-10 pl-3 py-1 rounded-md leading-7 text-gray-600 text-lg border-gray-300 border outline-none"
            />
          </div>

          <input
            type="text"
            placeholder="Name or @yourtwitter (optional)"
            className="p-3 mb-4 bg-gray-200 rounded-md border focus:border-gray-500 outline-none"
          />
          <input
            type="text"
            placeholder="Say something nice.. (optional)"
            className="p-3 mb-4 bg-gray-200 rounded-md border focus:border-gray-500 outline-none"
          />
          <button className="py-3 mb-8 rounded-3xl bg-yellow-400 text-white font-medium hover:opacity-90">
            Support $5
          </button>

          <div>
            <h3 className="mb-4 text-gray-700 uppercase">Recent supporters</h3>
            <div className="pl-3">
              {comments.map((comment, index) => (
                <Comment key={index} avatarImg={comment.avatarImg} title={comment.title} content={comment.content} />
              ))}
            </div>
          </div>

          <div
            className={`
              fixed w-80 h-14 bottom-20 right-6 rounded-b-xl
              px-14
              flex justify-items-center items-center 
              text-center bg-white`}
          >
            <a
              href="buymeacoffee.com"
              className="px-10 py-1.5 rounded-3xl text-sm bg-gray-100 text-gray-600 hover:bg-gray-200"
            >
              buymeacoffee.com
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
