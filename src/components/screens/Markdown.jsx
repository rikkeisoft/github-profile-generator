import skillJSON from 'public/json/skills.json'
import socialJSON from 'public/json/social.json'
import React from 'react'
import { skillWebsites } from 'src/utils/constants'
import { generateLink } from 'src/utils/convertData'

const findImgSrc = (name) => {
  for (const key in skillJSON) {
    if (Object.prototype.hasOwnProperty.call(skillJSON, key)) {
      const foundItem = skillJSON[key].find((skill) => skill.name === name)

      if (foundItem !== undefined) return foundItem.src
    }
  }

  return null
}

const fillValueSocial = (socialLocal) => {
  let result = [...socialJSON]
  for (const key in socialLocal) {
    if (Object.prototype.hasOwnProperty.call(socialLocal, key)) {
      if (socialLocal[key]) {
        let item = result.find((rs) => rs.key === key)
        item.value = socialLocal[key]
      }
    }
  }

  return result
}

const MiniTitle = ({ title }) => {
  return (
    <>
      {
`
<h3 align="left">${title}</h3>`
      }
      <br />
    </>
  )
}

const Title = ({ prefix, name }) => {
  if (prefix && name) {
    return (
      <>
        {
`
<h1 align="center">${prefix + ' ' + name}</h1>`
        }
        <br />
      </>
    )
  }

  return null
}

const Subtitle = ({ sub }) => {
  if (sub) {
    return (
      <>
        {
`
<h3 align="center">${sub}</h3>`
        }
        <br />
        <br />
      </>
    )
  }

  return null
}

const GithubTrophy = ({ username }) => {
  return (
    <>
      {
`
<p align="left">
  <a href="https://github.com/ryo-ma/github-profile-trophy" target="_blank">
    <img src="https://github-profile-trophy.vercel.app/?username=${username}" alt=${username} />
  </a>
</p>
`
      }
      <br />
      <br />
    </>
  )
}

const TwitterBadge = ({ username }) => {
  return (
    <>
      {
`
<p align="left">
  <a href="https://twitter.com/${username}" target="_blank">
    <img src="https://img.shields.io/twitter/follow/${username}?logo=twitter&style=for-the-badge" alt=${username} />
  </a>
</p>
`
      }
      <br />
      <br />
    </>
  )
}

const VisitorsBadge = ({ username, customizeBadge }) => {
  return (
    <>
      {
`
<p align="left">
  <img
    src="https://komarev.com/ghpvc/?username=${username}&label=${customizeBadge.labelText}&color=${customizeBadge.color.slice(1)}&style=${customizeBadge.styles}"
    alt=${username}
  />
</p>
`
      }
      <br />
      <br />
    </>
  )
}

const Work = ({ prefix, project, link, data }) => {
  if (prefix && project) {
    if (link) {
      return (
        <>
{`
- ${prefix} [${project}](${link})
`}
<br />
<br />
        </>
      )
    }
    return (
      <>
{`
- ${prefix} **${project}**
`}
<br />
<br />
      </>
    )
  }
  if (prefix && link) {
    return (
      <>
{`
- ${prefix}[${link}](${link})
`}
  <br />
  <br />
      </>
    )
  }
  if (prefix && data) {
    return (
      <>
{`
- ${prefix} **${data}**
`}
<br />
<br />
      </>
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

const Social = ({ diffKey, username, imgSrc }) => {
  if (username) {
    const url = generateLink(diffKey)
    return (
      <>
{
`
<a href="${url}/${username}" target="_blank">
  <img
    align="center"
    src="${imgSrc}"
    alt="${username}"
    height="40"
    width="40"
  />
</a>`}
      </>
    )
  }

  return null
}

const LanguageAndTool = ({ skills }) => {
  const listSkills = []
  for (const key in skills) {
    if (Object.prototype.hasOwnProperty.call(skills, key)) {
      if (skills[key]) {
        const imgSrc = findImgSrc(key)
        const url = skillWebsites[key]
        listSkills.push(
`
<a href="${url}" target="_blank">
  <img
    src="${imgSrc}"
    alt="${key}"
    height="30"
    width="40"
  />
</a>`,
        )
      }
    }
  }
  return (
    listSkills.length > 0 && (
      <>
        <MiniTitle title="Languages and Tools: " />
{`
<p align="left">${listSkills.join(' ')}</p>`}
        <br />
        <br />
      </>
    )
  )
}

const TopLanguages = ({ username, customizeDetail }) => {
  const { bgColor, cacheSeconds, hideBorder, locale, textColor, theme, titleColor } = customizeDetail
  const imgSrc = `https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true`
  + `&theme=${theme}`
  + `&title_color=${titleColor.slice(1)}`
  + `&text_color=${textColor.slice(1)}`
  + `&bg_color=${bgColor.slice(1)}`
  + (hideBorder ? `&hide_boder=${hideBorder}` : '')
  + (cacheSeconds !== 1800 ? `&cache_seconds=${cacheSeconds}` : '')
  + `&locale=${locale}` + '&layout=compact'

  return (
    <>
      {
`
<p align="left">
  <img
    src="${imgSrc}"
    alt=${username}
  />
</p>
`
      }
      <br />
      <br />
    </>
  )
}

const GithubStats = ({ username, customizeStats }) => {
  const { bgColor, cacheSeconds, hideBorder, locale, textColor, theme, titleColor } = customizeStats
  const imgSrc = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true`
  + `&theme=${theme}`
  + `&title_color=${titleColor.slice(1)}`
  + `&text_color=${textColor.slice(1)}`
  + `&bg_color=${bgColor.slice(1)}`
  + (hideBorder ? `&hide_boder=${hideBorder}` : '')
  + (cacheSeconds !== 1800 ? `&cache_seconds=${cacheSeconds}` : '')
  + `&locale=${locale}`
  return (
    <>
      {
`
<p align="left">
  <img
    align="center"
    src="${imgSrc}"
    alt=${username}
  />
</p>
`
      }
      <br />
      <br />
    </>
  )
}

const GithubStreakStats = ({ username, customizeStreakStats }) => {
  const { theme } = customizeStreakStats
  const imgSrc = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}`

  return (
    <>
      {
`
<p align="left">
  <img
    align="center"
    src="${imgSrc}"
    alt=${username}
  />
</p>
`
      }
      <br />
      <br />
    </>
  )
}

const Markdown = React.forwardRef(({ data, workData }, ref) => {
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
    <>
      {data && (
        <div ref={ref} className="w-full px-4 py-3 border-2 border-black bg-gray-100 break-words shadow-2xl">
          <>
            <Title prefix={data.title.prefix} name={data.title.name} />
          </>
          <>
            <Subtitle sub={data.subtitle.sub} />
          </>
          <>
            {isVisitorsBadge && <VisitorsBadge username={githubUsername} customizeBadge={customizeBadge} />}
          </>
          <>
            {isGithubTrophy && <GithubTrophy username={githubUsername} />}
          </>
          <>
            {isTwitterBadge && <TwitterBadge username={twitterUsername} />}
          </>
          <>
            {workData.map((item) => (
              <Work
                key={item.diffKey}
                prefix={item.prefix}
                project={item.projectName}
                link={item.link}
                data={item.data}
              />
            ))}
          </>
          <>
            {isSocial(data.social) && <MiniTitle title="Connect with me:" />}
              {fillValueSocial(data.social).map((item) => (
                <Social key={item.key} diffKey={item.key} username={item.value} imgSrc={item.imgSrc} />
              ))}
            {isSocial(data.social) && (
              <>
                <br />
                <br />
              </>
            )}
          </>
          <>
            <LanguageAndTool skills={data.skills} />
          </>
          <>
            {isTopSkills && <TopLanguages username={githubUsername} customizeDetail={customizeDetail} />}
          </>
          <>
            {isGithubStatsCard && <GithubStats username={githubUsername} customizeStats={customizeStats} />}
          </>
          <>
            {isStreakStats &&
            <GithubStreakStats username={githubUsername} customizeStreakStats={customizeStreakStats} />}
          </>
        </div>
      )}
    </>
  )
})

export default Markdown
