import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../../../components/pdf-viewer"), {
  ssr: false,
});

const page = ({ params }) => {
  return (
    <div>
      <PDFViewer bookName={params.book} />
    </div>
  );
};

export default page;
