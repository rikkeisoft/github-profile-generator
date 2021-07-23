import { DISCORD_IMG_URL } from "src/utils/constants";

export default function Footer() {
  return (
    <footer className="py-6 px-4 border-t-4 border-gray-200 bg-blue-50">
      <div className="mb-6 flex flex-col sm:justify-between sm:flex-row">
        <div className="mb-2 order-4 sm:mb-0 sm:order-1">
          <img
            src="https://rahuldkjain.github.io/gh-profile-readme-generator/static/mdg-040f54e2f6c858e0a3dcf568c3f2b6f1.png"
            alt="Logo"
            className="w-12 h-12 cursor-pointer sm:w-24 sm:h-24"
          />
          <span className="leading-5 text-xl font-medium sm:text-2xl">GitHub Profile README Generator</span>
        </div>
        <div className="mb-2 order-1 sm:mb-0 sm:order-2">
          <h4 className="mb-3 text-lg font-medium sm:mb-0 sm:text-base">Pages</h4>
          <div className="pl-3 text-xl font-light sm:text-base sm:pl-0">
            <p className="cursor-pointer">Addons</p>
            <p className="cursor-pointer">Support</p>
            <p className="cursor-pointer">About</p>
          </div>
        </div>
        <div className="mb-2 order-2 sm:mb-0 sm:order-3">
          <h4 className="mb-3 text-lg font-medium sm:mb-0 sm:text-base">More</h4>
          <div className="pl-3 text-xl font-light sm:text-base sm:pl-0">
            <p className="cursor-pointer">Github</p>
            <p className="cursor-pointer">Releases</p>
            <p className="cursor-pointer">Issues</p>
            <p className="cursor-pointer">Pull requests</p>
          </div>
        </div>
        <div className="mb-2 order-3 sm:mb-0 sm:order-4">
          <h4 className="mb-3 text-lg font-medium sm:mb-0 sm:text-base">Join Community</h4>
          <img
            src={DISCORD_IMG_URL}
            alt="discord"
            className="w-24 h-12"
          />
        </div>
      </div>
      <p className="text-center">Clone in Vietnam</p>
    </footer>
  )
}