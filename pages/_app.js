import RenderContextProvider from 'src/contexts/RenderContext'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <RenderContextProvider>
      <Component {...pageProps} />
    </RenderContextProvider>
  )
}

export default MyApp
