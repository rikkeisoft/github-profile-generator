export default function Error({ error }) {
  return (
    <div className="pl-1 bg-gray-200">
      <span className="text-red-600 text-xs">{error}</span>
    </div>
  )
}
