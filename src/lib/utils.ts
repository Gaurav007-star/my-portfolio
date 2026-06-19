import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface projectInterface {
  name: string;
  type: string;
  description: string;
  techStack: string[];
  liveLink: string;
  codeLink: string;
}

export const projectsData: projectInterface[] = [
  {
    name: "DevConnect",
    type: "Full Stack Social Platform",
    description:
      "A developer-focused social networking platform where users can create profiles, share posts, follow developers, and interact through likes and comments.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveLink: "https://devconnect-demo.vercel.app",
    codeLink: "https://github.com/yourusername/devconnect",
  },
  {
    name: "ShopSphere",
    type: "E-Commerce Application",
    description:
      "A modern e-commerce platform featuring product search, category filtering, shopping cart, secure authentication, and order management.",
    techStack: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    liveLink: "https://shopsphere-demo.vercel.app",
    codeLink: "https://github.com/yourusername/shopsphere",
  },
  {
    name: "TaskFlow",
    type: "Project Management Tool",
    description:
      "A collaborative task management application with drag-and-drop boards, team workspaces, task assignments, and progress tracking.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Clerk",
    ],
    liveLink: "https://taskflow-demo.vercel.app",
    codeLink: "https://github.com/yourusername/taskflow",
  },
  {
    name: "AI Resume Builder",
    type: "SaaS Application",
    description:
      "An AI-powered resume builder that helps users generate professional resumes, customize templates, and export resumes as PDF files.",
    techStack: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "PostgreSQL",
      "Prisma",
      "Shadcn UI",
    ],
    liveLink: "https://airesume-demo.vercel.app",
    codeLink: "https://github.com/yourusername/ai-resume-builder",
  },
];
