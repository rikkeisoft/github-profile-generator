import Footer from '@components/widgets/Footer'
import GenerateRM from '@components/widgets/GenerateRM'
import { useContext, useEffect, useState } from 'react'
import { LOCAL_STORAGE_KEY } from 'src/utils/constants'
import Header from '@components/widgets/Headers'
import Main from '@components/widgets/Main'
import initState from 'public/json/initData.json'
import { act } from 'react-dom/test-utils'
import { RenderContext } from 'src/contexts/RenderContext'

export default function Home() {
  const [info, setInfo] = useState(initState)
  const [isGeneratePage, setIsGeneratePage] = useState(false)
  const { render } = useContext(RenderContext)

  useEffect(() => {
    const localInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (!localInfo) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initState))
      act(() => setInfo(initState))
    } else act(() => setInfo(localInfo))
  }, [render])

  const handleOnChangeInfo = (newValue) => {
    const { key, value } = newValue
    const newInfo = {
      ...info,
      [key]: {
        ...info[key],
        ...value,
      },
    }

    act(() => setInfo(newInfo))
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newInfo))
  }

  const handleOnResetForm = () => {
    act(() => setInfo(initState))
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initState))
  }

  const handleOnRestoreForm = (newLocalStorageItem) => {
    act(() => setInfo(JSON.parse(newLocalStorageItem)))
    localStorage.setItem(LOCAL_STORAGE_KEY, newLocalStorageItem)
  }

  const handleGeneratePart = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setTimeout(() => act(() => setIsGeneratePage(!isGeneratePage)), 200)
  }

  return (
    <div className="z-0">
      <Header />
      {isGeneratePage ? (
        <GenerateRM data={info} onGeneratePart={handleGeneratePart} />
      ) : (
        <Main
          info={info}
          onChangeMainInfo={handleOnChangeInfo}
          onResetMainForm={handleOnResetForm}
          onRestoreMainForm={handleOnRestoreForm}
          onGeneratePart={handleGeneratePart}
        />
      )}
      <Footer />
    </div>
  )
}
