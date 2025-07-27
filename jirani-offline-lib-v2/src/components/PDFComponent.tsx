import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from '../../uploads/2025-07-27T045136224ZHobbes  Leviathan-1.pdf'

interface Props{
    pdfMediaTitle: string
}
export default function PDFComponent({pdfMediaTitle}: Props) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false}/>
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}