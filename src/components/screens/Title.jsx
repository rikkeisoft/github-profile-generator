import Input from '../elements/Input'

export default function Title({ data, onChangeInfo }) {
  const handleOnChangeInput = newValue => {
    const newTitle = {
      key: 'title',
      value: newValue,
    }

    onChangeInfo(newTitle)
  }

  return (
    <div className="pb-10">
      <h2 className="title">Title</h2>
      <div className="flex flex-nowrap mt-2">
        <div className="w-1/4">
          <Input 
            defaultValue={data?.prefix}
            name="prefix"
            onChangeInput={handleOnChangeInput}
          />
        </div>
        <div className="w-2/4 ml-6">
          <Input
            defaultValue={data?.name}
            placeholder="name"
            name="name"
            onChangeInput={handleOnChangeInput}
          />
        </div>
        
      </div>
    </div>
  )
}