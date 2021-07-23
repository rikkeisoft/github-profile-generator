import Coffee from '@components/widgets/Coffee'
import Footer from '../src/components/widgets/Footer'
import Header from '../src/components/widgets/Headers'
import Main from '../src/components/widgets/Main'

export default function Home() {
  return (
    <div className="z-0">
      <Header />
      <Main />
      <Footer />
      <Coffee />
    </div>
  )
}
