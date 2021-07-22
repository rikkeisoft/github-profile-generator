export default function VisitorsBadge({ name }) {
  
  return (
    <div className="ml-6 p-2 w-3/4 border-2 border-black bg-blue-50">
      <p className="text-lg border-b border-gray-500">Customize Github Stats Card</p>
      <div className="mt-2 flex flex-col justify-center">
        <label htmlFor="card-theme">
          Theme:&nbsp;
          <select id="card-theme">
            <option value="none">none</option>
            <option value="Dark">Dark</option>
            <option value="Radical">Radical</option>
            <option value="Merko">Merko</option>
            <option value="Gruvbox">Gruvbox</option>
            <option value="Tokyonight">Tokyonight</option>
            <option value="Onedark">Onedark</option>
            <option value="Cobalt">Cobalt</option>
            <option value="Synthwave">Synthwave</option>
            <option value="Hightcontrast">Hightcontrast</option>
            <option value="Dracula">Dracula</option>
          </select>
        </label>

        <label htmlFor="title-color">
          Title Color:&nbsp;
          <input 
            type="color"
            id="title-color"
            value="#000000"
            className="w-6"
          />
        </label>

        <label htmlFor="text-color">
          Text Color:&nbsp;
          <input 
            type="color"
            id="text-color"
            value="#000000"
            className="w-6"
          />
        </label>

        <label htmlFor="bg-color">
          Background Color:&nbsp;
          <input 
            type="color"
            id="bg-color"
            value="#000000"
            className="w-6"
          />
        </label>

        <label htmlFor="card-checkbox">
          Hide border:&nbsp;
          <input 
            type="checkbox"
            id="card-checkbox"
            checked="false"
          />
        </label>

        <label htmlFor="card-cache">
          Cache Seconds:&nbsp;
          <input 
            type="number"
            id="card-cache"
            value="1800"
            min="1800"
            max="86400"
            placeholder="1800"
          />
        </label>

        <label htmlFor="card-locale">
          Background Color:&nbsp;
          <input 
            type="text"
            id="card-locale"
            value="en"
            className="w-6 text-sm"
          />
        </label>
      </div>
    </div>
  )
}