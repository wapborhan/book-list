"use client";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Link from "next/link";

const PDFViewer = ({ bookName }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  console.log(bookName);

  return (
    <>
      <div className="links flex justify-center h-10vh py-3">
        <Link href="/" className="bg-green-600 px-5 py-2 rounded-xl">
          Book List
        </Link>
      </div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
        <div
          style={{
            height: "90vh",
            width: "50vw",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Viewer
            defaultScale={SpecialZoomLevel.PageFit}
            fileUrl={`/pdf/${bookName}.pdf`}
            plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Worker>
    </>
  );
};

export default PDFViewer;
