import { LOCAL_STORAGE_KEY } from "./constants";

export const getLocalstorageToFile = () => {
  const textToSave = localStorage.getItem(LOCAL_STORAGE_KEY);
  const textToSaveAsBlob = new Blob([textToSave], {
    type: 'application/json',
  })

  return window.URL.createObjectURL(textToSaveAsBlob)
}

export const saveREADMEFile = ref => {
  let markdownContent
  if (ref && ref.current) {
    markdownContent = ref.current.textContent
  }

  const textToSaveAsBlob = new Blob([markdownContent], {
    type: 'application/json',
  })

  return window.URL.createObjectURL(textToSaveAsBlob)
}