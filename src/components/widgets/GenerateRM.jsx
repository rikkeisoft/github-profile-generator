import Markdown from '@components/screens/Markdown'
import PreviewMarkdown from '@components/screens/PreviewMarkdown'
import Back from '@components/elements/svg/Back'
import { useEffect, useRef, useState } from 'react'
import { mapObjToArr } from 'src/utils/convertData'
import { getLocalstorageToFile, saveREADMEFile } from 'src/utils/downloadFile'
import Copy from '@components/elements/svg/Copy'
import Download from '@components/elements/svg/Download'
import Backup from '@components/elements/svg/Backup'
import Preview from '@components/elements/svg/Preview'
import Code from '@components/elements/svg/Code'
import Check from '@components/elements/svg/Check'

export default function GenerateRM({ data, onGeneratePart }) {
  const [isPreviewMD, setIsPreviewMD] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [downloadMDFileURL, setDownloadMDFileURL] = useState('')
  const markdownRef = useRef(null)
  const workObj = {
    prefix: data?.prefix,
    projectName: data?.projectName,
    link: data?.link,
    data: data?.data,
  }
  const workData = mapObjToArr(workObj)
  const downloadJSONFileURL = getLocalstorageToFile()

  useEffect(() => {
    setDownloadMDFileURL(saveREADMEFile(markdownRef))
  }, [])

  const handleChangeIsPreviewMD = () => setIsPreviewMD(!isPreviewMD)
  const handleCopyToClipboard = (markdownRef) => {
    setIsCopied(true)
    navigator.clipboard.writeText(markdownRef.current.textContent)
  }

  return (
    <div className="py-10 px-8">
      <div className="mb-6 flex justify-around items-center">
        <button className="btn w-16 flex items-center justify-center sm:w-24" title="back" onClick={onGeneratePart}>
          <Back />
          <span className="hidden sm:ml-1 sm:inline sm:text-base">Back</span>
        </button>

        {!isPreviewMD && (
          <>
            <button
              className="btn w-16 flex flex-col items-center justify-center sm:w-24"
              title="copy"
              onClick={() => handleCopyToClipboard(markdownRef)}
            >
              {
                isCopied ?
                <>
                  <Check />
                  <span className="hidden sm:ml-1 sm:inline sm:text-base">Copied markdown</span>
                </>
                :
                <>
                  <Copy />
                  <span className="hidden sm:ml-1 sm:inline sm:text-base">Copy markdown</span>
                </>
              }

            </button>

            <button className="btn w-16 flex items-center justify-center sm:w-24" title="download markdown">
              <a href={downloadMDFileURL} download="README.md" className="flex flex-col items-center justify-center">
                <Download />
                <span className="hidden sm:ml-1 sm:inline sm:text-base">Download markdown</span>
              </a>
            </button>

            <button className="btn w-16 flex items-center justify-center sm:w-24" title="download backup json">
              <a href={downloadJSONFileURL} download="data.json" className="flex flex-col items-center justify-center">
                <Backup />
                <span className="hidden sm:ml-1 sm:inline sm:text-base">Download json</span>
              </a>
            </button>
          </>
        )}

        <button
          className="btn w-16 flex items-center justify-center sm:w-24"
          onClick={handleChangeIsPreviewMD}
          title="preview"
        >
          {!isPreviewMD ? (
            <>
              <Preview />
              <span className="hidden sm:ml-1 sm:inline sm:text-base">Preview</span>
            </>
          ) : (
            <>
              <Code />
              <span className="hidden sm:ml-1 sm:inline sm:text-base">Markdown</span>
            </>
          )}
        </button>
      </div>
      {isPreviewMD ? (
        <PreviewMarkdown data={data} workData={workData} />
      ) : (
        <Markdown data={data} workData={workData} ref={markdownRef} />
      )}
    </div>
  )
}
