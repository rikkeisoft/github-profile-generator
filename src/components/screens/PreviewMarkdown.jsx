import { generateLink } from 'src/utils/convertData'
import socialJSON from 'public/json/social.json'
import skillJSON from 'public/json/skills.json'
import { skillWebsites } from 'src/utils/constants'

const fillValueSocial = (socialLocal) => {
  let result = [...socialJSON]
  for (const key in socialLocal) {
    if (Object.prototype.hasOwnProperty.call(socialLocal, key)) {
      if (socialLocal[key]) {
        let item = result.find((rs) => rs.key === key)
        item.url = generateLink(key)
        item.value = socialLocal[key]
      }
    }
  }

  return result
}

const findImgSrc = (name) => {
  for (const key in skillJSON) {
    if (Object.prototype.hasOwnProperty.call(skillJSON, key)) {
      const foundItem = skillJSON[key].find((skill) => skill.name === name)

      if (foundItem !== undefined) return foundItem.src
    }
  }

  return null
}

const MiniTitle = ({ title }) => {
  return <h3 className="mb-2 text-lg sm:text-xl">{title}</h3>
}

const TitlePreview = ({ prefix, name }) => {
  if (prefix && name) {
    return (
      <h1 className="mb-1 text-center font-semibold text-2xl">
        {prefix} {name}
      </h1>
    )
  }

  return null
}

const SubtitlePreview = ({ sub }) => {
  if (sub) {
    return <h3 className="mb-6 text-center">{sub}</h3>
  }

  return null
}

const GithubTrophyPreview = ({ username }) => {
  return (
    <div className="mb-2">
      <a href="https://github.com/ryo-ma/github-profile-trophy" target="_blank" rel="noreferrer">
        <img
          src={`https://github-profile-trophy.vercel.app/?username=${username}`}
          alt={username}
          className="w-full h-48 sm:h-64"
        />
      </a>
    </div>
  )
}

const TwitterBadgePreview = ({ username }) => {
  return (
    <div className="mb-4">
      <a href={`https://twitter.com/${username}`} target="_blank" rel="noreferrer">
        <img
          src={`https://img.shields.io/twitter/follow/${username}?logo=twitter&style=for-the-badge`}
          alt={username}
          className="h-4 sm:h-6"
        />
      </a>
    </div>
  )
}

const VisitorsBadgePreview = ({ username, customizeBadge }) => {
  return (
    <div className="mb-4">
      <img
        src={`https://komarev.com/ghpvc/?username=${username}&label=${customizeBadge.labelText}&color=${customizeBadge.color.slice(1)}&style=${customizeBadge.styles}`}
        alt={username}
        className="h-5 sm:h-7"
      />
    </div>
  )
}

const WorkPreview = ({ prefix, project, link, data }) => {
  if (prefix && project) {
    if (link) {
      return (
        <p className="mb-1 font-light tracking-wider">
          {prefix}
          <a href={link} target="_blank" rel="noreferrer" className="font-medium no-underline text-blue-500">
            {' '}
            {project}
          </a>
        </p>
      )
    }
    return (
      <p className="mb-1 font-light tracking-wider">
        {prefix}
        <span href={link} className="font-medium">
          {' '}
          {project}
        </span>
      </p>
    )
  }
  if (prefix && data) {
    return (
      <p className="mb-1 font-light tracking-wider">
        {prefix}
        <span href={link} className="font-medium">
          {' '}
          {data}
        </span>
      </p>
    )
  }

  return null
}

const isSocial = (social) => {
  return (
    social.behance ||
    social.codechef ||
    social.codeforces ||
    social.codepen ||
    social.codesanbox ||
    social.devto ||
    social.dicord ||
    social.dribble ||
    social.facebook ||
    social.gfg ||
    social.github ||
    social.hackerearth ||
    social.hackerrank ||
    social.instagram ||
    social.kaggle ||
    social.leetcode ||
    social.linkedin ||
    social.medium ||
    social.rss ||
    social.stackoverflow ||
    social.topcoder ||
    social.twitter ||
    social.youtube
  )
}

const SocialPreview = ({ username, imgSrc, url }) => {
  if (username) {
    return (
      <a href={`${url}/${username}`} target="_blank" rel="noreferrer" className="ml-2 sm:ml-4">
        <img className="w-7 h-7 sm:w-8 sm:h-8" src={imgSrc} alt={username} />
      </a>
    )
  }

  return null
}

const LanguageAndToolPreview = ({ skills }) => {
  const listSkills = []
  for (const key in skills) {
    if (Object.prototype.hasOwnProperty.call(skills, key)) {
      if (skills[key]) {
        listSkills.push(key)
      }
    }
  }
  return (
    listSkills.length > 0 && (
      <>
        <MiniTitle title="Languages and Tools:" />
        <div className="flex flex-wrap items-center">
          {listSkills.map((skill) => {
            const imgSrc = findImgSrc(skill)
            const url = skillWebsites[skill]
            return (
              <a href={url} target="_blank" rel="noreferrer" key={skill} className="ml-2 mb-2 sm:ml-4 sm:mb-4">
                <img src={imgSrc} alt={skill} className="w-8 h-8 sm:w-10 sm:h-10" />
              </a>
            )
          })}
        </div>
      </>
    )
  )
}

const TopLanguagesPreview = ({ username, customizeDetail }) => {
  const { bgColor, cacheSeconds, hideBorder, locale, textColor, theme, titleColor } = customizeDetail
  const imgSrc = `https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true`
  + `&theme=${theme}`
  + `&title_color=${titleColor.slice(1)}`
  + `&text_color=${textColor.slice(1)}`
  + `&bg_color=${bgColor.slice(1)}`
  + (hideBorder ? `&hide_boder=${hideBorder}` : '')
  + (cacheSeconds !== 1800 ? `&cache_seconds=${cacheSeconds}` : '')
  + `&locale=${locale}`

  return (
    <div className="my-3">
      <img
        src={imgSrc}
        alt={username}
        className="h-64"
      />
    </div>
  )
}

const GithubStatsPreview = ({ username, customizeStats }) => {
  const { bgColor, cacheSeconds, hideBorder, locale, textColor, theme, titleColor } = customizeStats
  const imgSrc = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true`
  + `&theme=${theme}`
  + `&title_color=${titleColor.slice(1)}`
  + `&text_color=${textColor.slice(1)}`
  + `&bg_color=${bgColor.slice(1)}`
  + (hideBorder ? `&hide_boder=${hideBorder}` : '')
  + (cacheSeconds !== 1800 ? `&cache_seconds=${cacheSeconds}` : '')
  + `&locale=${locale}` + '&layout=compact'

  return (
    <div className="my-3">
      <img
        src={imgSrc}
        alt={username}
        className="h-48 text-center sm:h-48"
      />
    </div>
  )
}

const GithubStreakStatsPreview = ({ username, customizeStreakStats }) => {
  const { theme } = customizeStreakStats
  const imgSrc = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}`

  return (
    <div className="my-3">
      <img
        src={imgSrc}
        alt={username}
        className="h-48 text-center sm:h-48"
      />
    </div>
  )
}

export default function PreviewMarkdown({ data, workData }) {
  const isTwitterBadge = data.add_ons.twitterBadge
  const twitterUsername = data.social.twitter
  const isGithubTrophy = data.add_ons.githubTrophy
  const githubUsername = data.social.github
  const isVisitorsBadge = data.add_ons.visitorsBadge
  const customizeBadge = data.customize.badge
  const isGithubStatsCard = data.add_ons.githubStatsCard
  const customizeStats = data.customize.githubStatsCard
  const isTopSkills = data.add_ons.topSkills
  const customizeDetail = data.customize.topSkills
  const isStreakStats = data.add_ons.githubStreakStats
  const customizeStreakStats = data.customize.streakStats

  return (
    <div className="w-full p-4 border-2 border-black bg-gray-100 shadow-2xl">
      <TitlePreview prefix={data.title.prefix} name={data.title.name} />
      <SubtitlePreview sub={data.subtitle.sub} />

      {isVisitorsBadge && <VisitorsBadgePreview username={githubUsername} customizeBadge={customizeBadge} />}
      {isGithubTrophy && <GithubTrophyPreview username={githubUsername} />}
      {isTwitterBadge && <TwitterBadgePreview username={twitterUsername} />}

      <div className="mb-4">
        {workData.map((item) => (
          <WorkPreview
            key={item.diffKey}
            prefix={item.prefix}
            project={item.projectName}
            link={item.link}
            data={item.data}
          />
        ))}
      </div>

      {isSocial(data.social) && <MiniTitle title="Connect with me: " />}
      <div className="mb-4 flex">
        {fillValueSocial(data.social).map((item) => (
          <SocialPreview key={item.key} username={item.value} imgSrc={item.imgSrc} url={item.url} />
        ))}
      </div>

      <LanguageAndToolPreview skills={data.skills} />
      <div className="sm:flex sm:flex-wrap sm:items-center sm:justify-between">
        {isTopSkills && <TopLanguagesPreview username={githubUsername} customizeDetail={customizeDetail} />}
        {isGithubStatsCard && <GithubStatsPreview username={githubUsername} customizeStats={customizeStats} />}
        {isStreakStats &&
        <GithubStreakStatsPreview username={githubUsername} customizeStreakStats={customizeStreakStats} />}
      </div>
    </div>
  )
}
