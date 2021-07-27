export default function debounce (fn, delay) {
  return (args) => {
    clearTimeout(fn.id)

    fn.id = setTimeout(() => {
      fn.call(this, args)
    }, delay)
  }
}
