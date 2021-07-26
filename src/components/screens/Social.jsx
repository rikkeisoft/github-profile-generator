import SocialInput from '@components/elements/SocialInput'

export default function Social({ data, onChangeInfo }) {
  const handleOnChangeSocialInput = (newValue) => {
    const newSocialInput = {
      key: 'social',
      value: newValue,
    }

    onChangeInfo(newSocialInput)
  }

  return (
    <div className="pb-10">
      <h2 className="title">Social</h2>
      <div className="p-6 flex items-center justify-center flex-wrap sm:px-0 sm:py-4">
        {data?.map((social) => (
          <SocialInput
            key={social.key}
            name={social.key}
            value={social.value}
            placeholder={social.placeholder}
            imgSrc={social.imgSrc}
            onChangeSocialInput={handleOnChangeSocialInput}
          />
        ))}
      </div>
    </div>
  )
}
