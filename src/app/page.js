import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false,
});

export default function Home() {
  return <PDFViewer />;
}
