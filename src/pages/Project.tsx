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
import { Globe, ArrowUpRight, Hammer } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-max flex flex-col items-start gap-2 p-5 sm:px-10 sm:py-[10vh]">
      {/* top - return link */}
      <Button
        variant="link"
        onClick={() => navigate("/")}
        className="hover:text-foreground transition-colors duration-200 group px-0"
      >
        <HiOutlineArrowLongLeft className="group-hover:-translate-x-0.5 transition-transform duration-200" />
        go to home
      </Button>

      {/* User breadcrumb */}
      <Breadcrumb>
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

      <section className="w-full h-max">
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

        {/* section heading — flush with page content */}
        <div className="flex w-full h-max items-baseline justify-between mb-6 pr-5 ">
          <h2 className="text-2xl italic text-foreground/80">Selected Work</h2>
          <span className="text-xs font-mono text-foreground/30 tabular-nums">
            ({projectsData.length})
          </span>
        </div>

        <div className="project-wrapper w-full flex flex-col">
          {projectsData.map((item: projectInterface, index: number) => {
            return (
              <div
                key={index}
                className="group w-full flex flex-col gap-3 py-6 border-b border-border/40 last:border-0 transition-colors duration-200 hover:bg-secondary/20 rounded-md px-3 -mx-3"
              >
                {/* row 1: name + type + number */}
                <div className="flex items-baseline justify-between gap-4 ">
                  <div className="flex items-baseline gap-2.5 flex-wrap min-w-0">
                    <span className="font-semibold flex items-center gap-1 text-base text-foreground/65 leading-tight group-hover:text-foreground transition-colors duration-200 shrink-0">
                      <Hammer className="size-5"/>{item.name}
                    </span>
                    <span className="text-sm text-foreground/35 italic truncate">
                      — {item.type}
                    </span>
                  </div>
                  <span className="text-xs text-foreground/20 font-mono tabular-nums shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* row 2: description */}
                <p className="text-foreground/50 leading-relaxed text-[16px]">
                  {item.description}
                </p>

                {/* row 3: tech + links — bottom-aligned */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 py-4">
                  <p className="text-foreground/28 text-sm leading-relaxed sm:w-[72%] ">
                    {item.techStack.join("  ·  ")}
                  </p>

                  <div className="flex items-center shrink-0 -mr-3">
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => window.open(item.liveLink, "_blank")}
                      className="group/live text-foreground/40 hover:text-foreground transition-colors duration-200 gap-1"
                    >
                      <Globe className="size-3 group-hover/live:rotate-12 transition-transform duration-200" />
                      Live
                      <ArrowUpRight className="size-3 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform duration-200" />
                    </Button>

                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => window.open(item.codeLink, "_blank")}
                      className="group/code text-foreground/40 hover:text-foreground transition-colors duration-200 gap-1"
                    >
                      <FaGithub className="size-3 group-hover/code:scale-110 transition-transform duration-200" />
                      Code
                      <ArrowUpRight className="size-3 group-hover/code:translate-x-0.5 group-hover/code:-translate-y-0.5 transition-transform duration-200" />
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
