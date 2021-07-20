import Footer from '../src/components/widgets/Footer'
import Header from '../src/components/widgets/Headers'
import Main from '../src/components/widgets/Main'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
