import AddOnCheck from "@components/elements/AddOnCheck";

export default function AddOn({ data, onChangeInfo }) {
  const handleOnCheckbox = newValue => {
    const checkbox = {
      key: "add_ons",
      value: newValue,
    }
    
    onChangeInfo(checkbox);
  }

  return (
    <div className="pb-10">
      <h2 className="title">Add-ons</h2>
      <div className="py-4">
        {
          data?.map(addon => (
            <AddOnCheck 
              key={addon.key}
              name={addon.key}
              checked={addon.checked}
              content={addon.content}
              canModify={addon.canModify}
              onCheckbox={handleOnCheckbox}
            />
          ))
        }
      </div>
    </div>
  )
}