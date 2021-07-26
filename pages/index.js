import Coffee from '@components/widgets/Coffee'
import Footer from '@components/widgets/Footer'
import GenerateRM from '@components/widgets/GenerateRM'
import { useEffect, useState } from 'react'
import { LOCAL_STORAGE_KEY } from 'src/utils/constants'
import Header from '@components/widgets/Headers'
import Main from '@components/widgets/Main'
import initState from 'public/json/initData.json'
import Loading from '@components/elements/Loading'

export default function Home() {
  const [info, setInfo] = useState(initState)
  const [loading, setLoading] = useState(false)
  const [isGeneratePage, setIsGeneratePage] = useState(false)

  useEffect(() => {
    const localInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (!localInfo) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initState))
      setInfo(initState)
    } 
    else
      setInfo(localInfo)
  }, [])

  const handleOnChangeInfo = newValue => {
    const { key, value } = newValue
    const newInfo = {
      ...info,
      [key]: {
        ...info[key],
        ...value,
      },
    }
    
    setInfo(newInfo)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newInfo))
  }

  const handleOnResetForm = () => {
    setInfo(initState)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initState))
  }

  const handleOnRestoreForm = newLocalStorageItem => {
    setInfo(JSON.parse(newLocalStorageItem))
    localStorage.setItem(LOCAL_STORAGE_KEY, newLocalStorageItem)
  }

  const handleGeneratePart = () => {
    setLoading(true)
    setTimeout(() => {
      setIsGeneratePage(!isGeneratePage)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="z-0">
      <Header />
      {
        loading && <Loading />
      }
      {
        !loading ? (isGeneratePage ? 
        <GenerateRM 
          data={info}
          onGeneratePart={handleGeneratePart}
        /> :
        <Main 
          info={info}
          onChangeMainInfo={handleOnChangeInfo}
          onResetMainForm={handleOnResetForm}
          onRestoreMainForm={handleOnRestoreForm}
          onGeneratePart={handleGeneratePart}
        />
        ) : null
      }
      <Footer />
      <Coffee />
    </div>
  )
}
