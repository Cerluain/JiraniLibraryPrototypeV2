import HeaderSection from "./HeaderSection";
import PDFComponent from "./PDFComponent";
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
        <PDFComponent pdfMediaTitle={filenameOfSelectedMedia}/>
    </>);
}