import Error from '@components/elements/Error'
import { useEffect, useState } from 'react'
import { 
  DEVTO_USERNAME_ERROR, 
  GITHUB_USERNAME_ERROR, 
  MEDIUM_USERNAME_ERROR, 
  RSS_URL_ERROR, 
  TWITTER_USERNAME_ERROR,
} from 'src/utils/constants'

const filterData = data => {
  const filterDataSocial = []

  for (const item of data) {
    if (
      item.key === 'github' ||
      item.key === 'twitter' ||
      item.key === 'devto' ||
      item.key === 'medium' ||
      item.key === 'rss' 
    )
      filterDataSocial.push(item)
  }

  return filterDataSocial
}

export default function EndMain({ dataSocial, dataAddons, onGeneratePart }) {
  const [errors, setErrors] = useState([])
  const [ 
    visitorsBadge,
    githubTrophy,
    githubStatsCard, 
    topSkills,
    githubStreakStats,
    twitterBadge,
    devDynamicBlog,
    mediumDynamicBlog,
    personalDynamicBlog,
  ] = dataAddons
  const filterDataSocial = filterData(dataSocial)
  const [github, twitter, devto, medium, rss] = filterDataSocial

  useEffect(() => {
    let testErrors = []

    if ((visitorsBadge.checked || githubTrophy.checked || githubStatsCard.checked || topSkills.checked || githubStreakStats.checked) && !github.value) {
      testErrors.push(GITHUB_USERNAME_ERROR)
    }
    if (twitterBadge.checked && !twitter.value) {
      testErrors.push(TWITTER_USERNAME_ERROR)
    }
    if (devDynamicBlog.checked && !devto.value) {
      testErrors.push(DEVTO_USERNAME_ERROR)
    }
    if (mediumDynamicBlog.checked && !medium.value) {
      testErrors.push(MEDIUM_USERNAME_ERROR)
    }
    if (personalDynamicBlog.checked && !rss.value) {
      testErrors.push(RSS_URL_ERROR)
    }

    setErrors(testErrors)
  }, [dataSocial, dataAddons])

  return (
    <div className="mb-12">
      <div className="mb-4">
        {
          errors.map((error, index) => (
            <Error key={index} error={error} />
          ))
        }
      </div>
      <div className="text-center">
        <button 
          className="sm:text-xl btn"
          onClick={onGeneratePart}
        >
          Generate README
          </button>
      </div>
    </div>
  )
}