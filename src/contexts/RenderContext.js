import { createContext, useState } from 'react'

export const RenderContext = createContext()

const RenderContextProvider = ({ children }) => {
  const [render, setRender] = useState(false)

  return <RenderContext.Provider value={{ render, setRender }}>{children}</RenderContext.Provider>
}

export default RenderContextProvider
