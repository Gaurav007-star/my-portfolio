import { Fragment } from "react";
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
import { projectsData, type projectInterface } from "@/lib/utils";
import { Globe , Hammer} from "lucide-react";
import { BsFillCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";




const Project = () => {
  const navigate = useNavigate();
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
          Building <span className="text-muted">Products</span>, Not Just
          Projects
        </h1>

        <Navbar />

        {/* description */}
        <div className="mt-3 text-lg leading-relaxed text-foreground/70">
          Projects I've built to solve real problems, explore new technologies,
          and turn ideas into working products. From AI-powered tools to
          full-stack web applications, each project represents a step in my
          journey as a builder.
        </div>
      </section>

      {/* projects - section */}
      <section className="w-full h-max mt-10">
        <h1 className="text-2xl mb-5 flex items-center gap-1 italic">Selected Work </h1>

        <div className="project-wrapper w-full h-max flex flex-col gap-10">
          {projectsData.map((item: projectInterface, index: number) => {
            return (
              <div
                className="products w-full h-max flex flex-col gap-3 bg-secondary/20 text-foreground/60 p-4 rounded-md"
                key={index}
              >
                <div className="top-section w-full h-max flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Hammer className="size-4 " />
                    <span className="font-medium text-lg">{item.name}</span>
                  </div>
                  <span className="text-foreground/60 text-sm tracking-wide">
                    {item.type}
                  </span>
                </div>

                <p className="w-full">{item.description}</p>

                <div className="bottom-section mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <Breadcrumb className="">
                    <BreadcrumbList className="gap-0!">
                      {item.techStack.map((tech: string, index: number) => (
                        <Fragment key={index}>
                          <BreadcrumbItem>
                            <BreadcrumbLink className="text-foreground/60">{tech}</BreadcrumbLink>
                          </BreadcrumbItem>
                          {index < item.techStack.length - 1 && (
                            <BsFillCircleFill className="size-1 text-primary/60 mx-2" />
                          )}
                        </Fragment>
                      ))}
                    </BreadcrumbList>
                  </Breadcrumb>

                  <div className="button-links flex items-center justify-center mt-5 sm:mt-0">
                    <Button variant="link" className="text-primary/50 mx-0!" onClick={() => window.open(item.liveLink, '_blank')}>
                      Live <Globe />
                    </Button>
                    <Button variant="link" className="text-foreground/60 mx-0!" onClick={() => window.open(item.codeLink, '_blank')}>
                      Git <FaGithub />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Project;
