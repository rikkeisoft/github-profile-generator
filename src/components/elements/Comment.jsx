export default function Comment({ avatarImg, title, content }) {
  return (
    <div className="mb-3 w-full flex relative">
      <img src={avatarImg} alt="avatar" className=" absolute -left-4 top-2 w-7 h-7 p-1.5 bg-red-100 rounded-full" />
      <div className="px-4 py-3 w-full flex flex-col rounded-lg bg-red-50">
        <span className="mb-2 font-medium text-sm">{title}</span>
        <span className="text-sm text-gray-700">{content}</span>
      </div>
    </div>
  )
}
