import { Button } from "@/components/ui/button";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Navbar from "@/components/custom/Navbar";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import Cvpdf from "@/assets/mycv.pdf";

const pdfjsWorker = "/pdf.worker.min.js";

const Resume = () => {
  const navigate = useNavigate();
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
    renderToolbar: (Toolbar) => (
      <Toolbar>
        {(slots) => {
          const {
            CurrentPageInput,
            Download,
            EnterFullScreen,
            GoToNextPage,
            GoToPreviousPage,
            NumberOfPages,
            SwitchTheme,
            Zoom,
            ZoomIn,
            ZoomOut,
          } = slots;
          return (
            <div className="rpv-toolbar px-4" role="toolbar" aria-orientation="horizontal">
              <div className="rpv-toolbar__left">
                <div className="rpv-core__display--hidden rpv-core__display--block-small">
                  <div className="rpv-toolbar__item">
                    <GoToPreviousPage />
                  </div>
                </div>
                <div className="rpv-toolbar__item">
                  <CurrentPageInput />
                  <span className="rpv-toolbar__label">
                    / <NumberOfPages />
                  </span>
                </div>
                <div className="rpv-core__display--hidden rpv-core__display--block-small">
                  <div className="rpv-toolbar__item">
                    <GoToNextPage />
                  </div>
                </div>
              </div>
              <div className="rpv-toolbar__center">
                <div className="rpv-toolbar__item">
                  <ZoomOut />
                </div>
                <div className="rpv-core__display--hidden rpv-core__display--block-small">
                  <div className="rpv-toolbar__item">
                    <Zoom />
                  </div>
                </div>
                <div className="rpv-toolbar__item">
                  <ZoomIn />
                </div>
              </div>
              <div className="rpv-toolbar__right">
                <div className="rpv-core__display--hidden rpv-core__display--block-medium">
                  <div className="rpv-toolbar__item">
                    <SwitchTheme />
                  </div>
                </div>
                <div className="rpv-core__display--hidden rpv-core__display--block-medium">
                  <div className="rpv-toolbar__item">
                    <EnterFullScreen />
                  </div>
                </div>
                <div className="rpv-core__display--hidden rpv-core__display--block-medium">
                  <div className="rpv-toolbar__item">
                    <Download />
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Toolbar>
    ),
  });

  return (
    <div className="w-full h-max flex flex-col items-start gap-2 p-5 sm:px-10 sm:py-[10vh]">
      {/* top -return - link */}
      <Button variant="link" onClick={() => navigate("/")}>
        <HiOutlineArrowLongLeft /> go to home
      </Button>

      {/* User breadcramp */}
      <Breadcrumb className="">
        <BreadcrumbList className="gap-0!">
          <BreadcrumbItem>
            <BreadcrumbLink>Gaurav Sarkar</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="text-foreground/70">
              Fullstack Developer
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="w-full h-max ">
        {/* title */}
        <h1 className="text-5xl italic mt-4 mb-10">
          Experience & <span className="text-muted">Credentials</span>
        </h1>

        <Navbar />

        {/* description */}
        <div className="mt-3 text-lg leading-relaxed text-foreground/70">
          A summary of my professional experience, technical expertise,
          education, and the technologies I've worked with throughout my journey
          as a Full Stack Developer.
        </div>
      </section>

      {/* Resume pdf section */}
      <div className="pdf-wrapper w-full h-screen border border-border rounded-md overflow-hidden bg-background shadow-md mt-6">
        <Worker workerUrl={pdfjsWorker}>
          <Viewer
            fileUrl={Cvpdf}
            plugins={[defaultLayoutPluginInstance]}

          />
        </Worker>
      </div>
    </div>
  );
};

export default Resume;
