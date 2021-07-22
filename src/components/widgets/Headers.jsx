export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center py-1 border-b border-gray-300">
      <img
        src="https://rahuldkjain.github.io/gh-profile-readme-generator/static/mdg-040f54e2f6c858e0a3dcf568c3f2b6f1.png"
        alt="Logo"
        className="w-12 h-12 cursor-pointer"
      />
      <span className="leading-5 text-sm font-medium text-blue-900 cursor-pointer sm:text-2xl">GitHub Profile README Generator</span>
      <div className="flex my-1">
        <button className="sm:text-sm btn">
          Star this repo 
          <span className="ml-1 text-purple-600">6169</span>
        </button>
        <button className="sm:text-sm btn">
          Fork on Github 
          <span className="ml-1 text-purple-600">1063</span>
        </button>
      </div>
    </div>
  )
}