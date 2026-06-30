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
    name: "Truveler",
    type: "AI-Powered Trip Planner",
    description:
      "An intelligent travel planning platform that generates personalized trip itineraries based on user preferences, budget, and destination. Features secure Google Authentication, AI-powered itinerary generation using the Google Gemini API via OpenRouter, and a modern, responsive interface for effortless travel planning.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JavaScript",
      "Google Authentication",
      "OpenRouter API",
      "Google Gemini",
      "Styled Components",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    liveLink: "https://ai-trip-planner-vert-seven.vercel.app",
    codeLink: "https://github.com/Gaurav007-star/AI-Trip-Planner",
  },
  {
    name: "MARQUVE",
    type: "Digital Marketing Landing Page",
    description:
      "A sleek and conversion-focused landing page designed for modern digital marketing agencies. Showcases services, success stories, client testimonials, pricing, and clear call-to-actions with responsive design, smooth animations, and optimized user experience.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
    liveLink: "https://marqv-landing.vercel.app",
    codeLink: "https://github.com/Gaurav007-star/Marqv-landing",
  },
  {
    name: "Bangla Bijoy Editor",
    type: "AI-Powered Bengali Text Editor",
    description:
      "A modern Bengali editor that converts English phonetic input into accurate Bangla Unicode and seamlessly transforms it into Bijoy encoding for compatibility with Adobe applications and legacy Bangla publishing software. Integrated with ElevenLabs APIs for high-quality text-to-speech and speech-to-text, delivering an intuitive writing and voice-enabled editing experience.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "ElevenLabs Text-to-Speech API",
      "ElevenLabs Speech-to-Text API",
      "Unicode to Bijoy Converter",
    ],
    liveLink: "https://bengali-editor.vercel.app/",
    codeLink: "https://github.com/Gaurav007-star/avro-bijoy",
  },

  {
    name: "Farmeso",
    type: "AgriTech Landing Page",
    description:
      "A modern, conversion-focused landing page crafted for an AgriTech brand to showcase innovative farming solutions, featured services, customer success stories, and compelling calls-to-action. Built with smooth page transitions, immersive scroll interactions using Lenis, and elegant animations powered by Framer Motion to deliver a premium, responsive user experience.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Lenis",
    ],
    liveLink: "https://farmeso.vercel.app",
    codeLink: "https://github.com/Gaurav007-star/Farmeso",
  },
];
