import Error from '@components/elements/Error'
import { useEffect, useState } from 'react'
import { act } from 'react-dom/test-utils'
import { GITHUB_USERNAME_ERROR, TWITTER_USERNAME_ERROR } from 'src/utils/constants'

const filterData = (data) => {
  const filterDataSocial = []

  for (const item of data) {
    if (item.key === 'github' || item.key === 'twitter') filterDataSocial.push(item)
  }

  return filterDataSocial
}

export default function EndMain({ dataSocial, dataAddons, onGeneratePart }) {
  const [errors, setErrors] = useState([])
  const filterDataSocial = filterData(dataSocial)
  const [github, twitter] = filterDataSocial

  useEffect(() => {
    let testErrors = []

    if (
      (dataAddons?.visitorsBadge?.checked ||
        dataAddons?.githubTrophy?.checked ||
        dataAddons?.githubStatsCard?.checked ||
        dataAddons?.topSkills?.checked ||
        dataAddons?.githubStreakStats?.checked) &&
      !github.value
    ) {
      testErrors.push(GITHUB_USERNAME_ERROR)
    }
    if (dataAddons?.twitterBadge?.checked && !twitter.value) {
      testErrors.push(TWITTER_USERNAME_ERROR)
    }

    act(() => setErrors(testErrors))
  }, [dataSocial, dataAddons])

  return (
    <div className="mb-12">
      <div className="mb-4">
        {errors.map((error, index) => (
          <Error key={index} error={error} />
        ))}
      </div>
      <div className="text-center">
        <button className="sm:text-xl btn" onClick={onGeneratePart} disabled={errors.length > 0}>
          Generate README
        </button>
      </div>
    </div>
  )
}
