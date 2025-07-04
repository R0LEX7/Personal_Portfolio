import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ResumeComp = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
<div className="border border-black/30 w-full max-w-4xl h-[100vh] mx-auto overflow-y-scroll">

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl="/resume/resume.pdf"
          plugins={[defaultLayoutPluginInstance]}
          theme="dark"
           defaultScale={1}
        />
      </Worker>
    </div>
  );
};

export default ResumeComp;
