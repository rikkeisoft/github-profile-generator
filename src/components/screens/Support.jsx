import Input from '@components/elements/Input'

export default function Support({ data, onChangeInfo }) {
  const handleOnChangeInput = (newValue) => {
    const newSupport = {
      key: 'support',
      value: newValue,
    }
    onChangeInfo(newSupport)
  }

  return (
    <div className="pb-10">
      <h2 className="title mb-8">Support</h2>
      <div className="flex items-center">
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="buymeacoffee"
          className="w-24 h-8 sm:h-12 sm:w-48"
        />
        <div className="ml-2">
          <Input
            defaultValue={data?.buyMeACoffee}
            name="buyMeACoffee"
            placeholder="buymeacoffee username"
            onChangeInput={handleOnChangeInput}
          />
        </div>
      </div>
    </div>
  )
}
