export default function VisitorsBadge() {
  
  return (
    <div className="ml-6 p-2 w-3/4 border-2 border-black bg-blue-50">
      <p className="text-lg border-b border-gray-500">Customize Badge</p>
      <div className="mt-2 flex flex-col justify-center">
        <label htmlFor="badge-style">
          Style:&nbsp;
          <select id="badge-style">
            <option value="Flat">Flat</option>
            <option value="Flat-Square">Flat Square</option>
            <option value="Plastic">Plastic</option>
          </select>
        </label>

        <label htmlFor="badge-color">
          Color:&nbsp;
          <input 
            type="color"
            id="badge-color"
            value="#0e75b6"
            className="w-6"
          />
        </label>

        <label htmlFor="badge-text">
          Label Text:&nbsp;
          <input 
            type="text"
            id="badge-text"
            value="Profile views"
            className="w-2/4 pl-2 bg-blue-100"
          />
        </label>

        <label htmlFor="badge-prevew" className="mt-2">
          Preview:&nbsp;
          <span>
            <input
              id="badge-prevew"
              type="text"
              value="Profile views"
              readOnly
              className="w-2/6 px-2 bg-gray-700 rounded-sm text-yellow-50 text-sm"
            />
            <input 
              type="text"
              id="badge-text"
              value="0"
              className="w-4 pl-1 text-sm bg-blue-400"
            />
          </span>
        </label>
      </div>
    </div>
  )
}