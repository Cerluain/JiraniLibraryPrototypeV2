import { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';

interface Props {
  pdfMediaTitle: string
}
export default function PDFComponent({ pdfMediaTitle }: Props) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string | null>(null);

  function newPageNum(newPageNum: number){
    console.log("A")
    if(!numPages)
      return
    console.log("B")
    if(newPageNum < 1 || newPageNum > numPages){
      return
    }
    console.log("C")
    setPageNumber(newPageNum);
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  useEffect(() => {

    const fetchAndServePDF = async () => {
      const fetch_request = '/api/fetchPDF/' + pdfMediaTitle;
      const response = await fetch(fetch_request);

      if (!response.ok)
        console.log(`ERROR: Failed to fetch PDF File. Status: ${response.status}, ${response.statusText}`);

      const blob = await response.blob();
      setPdfBlobUrl(URL.createObjectURL(blob));
      (new File([blob], 'intermediate-file.pdf', { type: 'application/pdf' }));
    }
    fetchAndServePDF();

    return () => {//cleanup
      if (pdfBlobUrl) {
        URL.revokeObjectURL(pdfBlobUrl);
      }
    };
  }
    , [pdfMediaTitle])

  return ( 
    <div className='container-md mt-4'>
      <div className="my-3 py-3 bg-light d-flex flex-column justify-content-center align-items-center">

      <Document file={pdfBlobUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
      </Document>
      <p className='d-flex justify-content-center align-items-center'>
        Page {pageNumber} of {numPages}
      </p>
      <div className='d-flex justify-content-center align-items-center'>
        <button onClick={()=>newPageNum(pageNumber-1)} className='btn btn-outline-dark fs-4 m-3'>{"<"}</button>
        <button onClick={()=>newPageNum(pageNumber+1)} className='btn btn-outline-dark fs-4 m-3'>{">"}</button>
      </div>
      </div>
    </div>
  );
}