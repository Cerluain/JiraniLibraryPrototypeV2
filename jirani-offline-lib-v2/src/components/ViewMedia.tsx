import HeaderSection from "./HeaderSection";
import PDFComponent from "./PDFComponent";
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
    const fileExtension = filenameOfSelectedMedia.split('.').pop()?.toLowerCase();

    let mediaComponent = null;

    switch (fileExtension) {
        case 'pdf':
            mediaComponent = <PDFComponent pdfMediaTitle={filenameOfSelectedMedia} />;
            break;
        case 'mp4':
            mediaComponent = <MP4VideoPlayer filename={filenameOfSelectedMedia} />;
            break;
        default:
            console.log("Unsupported File Type Selected");
            mediaComponent = <p>Unsupported file of type {fileExtension} selected</p>;
            break;
    }

    return (<>
        <HeaderSection sectionName="Viewing Page" setCurrentPage={setCurrentPage} />
        <div className='container-md mt-4'>
            <div className="my-3 py-3 bg-light d-flex flex-column justify-content-center align-items-center">

                {mediaComponent}

            </div>
        </div>


    </>);
}