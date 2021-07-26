import { useRef } from 'react'

export default function ConfigForm({ onResetForm, onRestoreForm }) {
  const contentInputRef = useRef(null)

  const handleUploadFile = e => {
    let file = e.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = function(event)
      {
          // NOTE: event.target point to FileReader
          let contents = event.target.result
          contents.split('\n')
          contentInputRef.current.value = contents
      }

      reader.readAsText(file)
    }
  }

  const handleRestore = () => {
    onRestoreForm(contentInputRef.current.value)
    contentInputRef.current.value = ''
  }

  return (
    <div className="px-4 py-3 border-2 border-blue-500">
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center justify-items-start">
          <h3 className="font-semibold sm:text-2xl">Config options</h3>
          <span className="ml-1 p-1 bg-green-600 text-white text-sm font-medium">new feature</span>
        </div>
        <button className="btn" onClick={onResetForm}>Reset form</button>
      </div>

      <div className="mb-8 flex justify-items-start">
        <input
          ref={contentInputRef} 
          placeholder="Paste JSON code or upload file"
          className="pl-2 w-1/2 border-b border-gray-500 focus:outline-none"
        />
        <div className="w-64 ml-2 relative overflow-hidden">
          <input
            type="file"
            name="uploadFile"
            className="absolute w-64 cursor-pointer opacity-0 before:cursor-pointer"
            onChange={handleUploadFile}
          />
          <button className="ml-4 cursor-pointer btn">Upload json file</button>
        </div>
      </div>

      <button className="mb-10 btn" onClick={handleRestore}>Restore</button>

      <div className="sm:text-lg">
        <p className="text-green-700 text-lg">Tips</p>
        <p className="text-gray-600">* Enter the downloaded JSON text to restore.</p>
        <p className="text-gray-600">* Press reset to reset the form.</p>
      </div>
    </div>
  )
}