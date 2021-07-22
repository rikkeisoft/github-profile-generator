export default function VisitorsBadge({ name }) {
  
  return (
    <div className="ml-6 p-2 w-3/4 border-2 border-black bg-blue-50">
      <p className="text-lg border-b border-gray-500">Customize Streak Stats Card</p>
      <div className="mt-2 flex flex-col justify-center">
        <label htmlFor="card-theme">
          Theme:&nbsp;
          <select id="card-theme">
            <option value="none">none</option>
            <option value="dark">dark</option>
            <option value="highcontrast">highcontrast</option>
          </select>
        </label>
      </div>
    </div>
  )
}