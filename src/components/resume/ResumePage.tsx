import './ResumePage.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState, useEffect } from 'react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumePage({ darkMode }: { darkMode: boolean }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number>(900);
  const resumePath = `${import.meta.env.BASE_URL}resume.pdf`;
  
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  // Update page width based on screen size and available height
  useEffect(() => {
    function updatePageWidth() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const availableHeight = height - 160;
      const pdfAspectRatio = 8.5 / 11;
      const widthFromHeight = availableHeight * pdfAspectRatio;
      
      if (width < 768) {
        setPageWidth(Math.min(width * 0.9, widthFromHeight));
      } else if (width < 1200) {
        setPageWidth(Math.min(width * 0.7, widthFromHeight));
      } else {
        setPageWidth(Math.min(900, widthFromHeight));
      }
    }

    updatePageWidth();
    window.addEventListener('resize', updatePageWidth);
    return () => window.removeEventListener('resize', updatePageWidth);
  }, []);

  return (
    <div className={`resume-container ${darkMode ? 'dark' : ''}`}>
      <div 
        className={`resume-pdf-container ${darkMode ? 'dark' : ''}`}
      >
        <Document
          file={resumePath}
          onLoadSuccess={onDocumentLoadSuccess}
          className="resume-document"
        >
          {Array.from(new Array(numPages), (_, index) => (
            <div key={`page_${index + 1}`} className="resume-page-wrapper">
              <Page 
                pageNumber={index + 1}
                width={pageWidth}
                renderTextLayer={true}
                renderAnnotationLayer={false}
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
}

export default ResumePage;