import Input from '@components/elements/Input'

export default function Subtitle({ data, onChangeInfo }) {
  const handleOnChangeInput = (newValue) => {
    const newSubtitle = {
      key: 'subtitle',
      value: newValue,
    }

    onChangeInfo(newSubtitle)
  }

  return (
    <div className="pb-10">
      <h2 className="title">Subtitle</h2>
      <div className="mt-2 sm:w-1/2">
        <Input
          defaultValue={data?.sub}
          placeholder="A subtitle for README"
          name="sub"
          onChangeInput={handleOnChangeInput}
        />
      </div>
    </div>
  )
}
