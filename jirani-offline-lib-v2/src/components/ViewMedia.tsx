import HeaderSection from "./HeaderSection";
// import PDFComponent from "./PDFComponent";
import MP4VideoPlayer from "./MP4VideoPlayer";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface Props {
    setCurrentPage: (page: string) => void
    filenameOfSelectedMedia: string
}
export default function ViewMedia({ setCurrentPage, filenameOfSelectedMedia }: Props) {
    return (<>
        <HeaderSection sectionName="Viewing Page" setCurrentPage={setCurrentPage} />
        <MP4VideoPlayer filename={filenameOfSelectedMedia} />
        {/* <PDFComponent pdfMediaTitle={filenameOfSelectedMedia}/> */}
    </>);
}