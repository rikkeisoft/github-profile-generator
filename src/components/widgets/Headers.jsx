import Image from 'next/image'
import Logo from '/public/img/logo.png'

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center py-1 border-b border-gray-300">
      <Image 
        src={Logo} 
        width={50} 
        height={50} 
        alt="Logo"
        className="cursor-pointer"
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