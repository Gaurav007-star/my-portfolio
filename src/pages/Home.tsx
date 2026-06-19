import UserProfileImage from "@/assets/user-image.png";
import Navbar from "@/components/custom/Navbar";
import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaRegCheckCircle,
} from "react-icons/fa";
import { toast } from "sonner";

const Home = () => {
  // Handler to copy email
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sarkargaurav59@gmail.com");
      toast(
        <span className="flex items-center justify-center w-max gap-2">
          <FaRegCheckCircle className="mt-1" /> Email copied successfully
        </span>,
        { id: "email-copied" },
      );
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="w-full h-max flex flex-col gap-2 p-5 sm:px-10 sm:py-8">
      {/* user image section */}
      <div className="image-section w-15 h-15 rounded-lg overflow-hidden shadow-md">
        <img
          src={UserProfileImage}
          alt="user/profile"
          className="object-cover object-center"
        />
      </div>

      {/* User details section */}
      <div className="user-details-section w-full h-max">
        <section className="w-full h-max flex flex-col gap-1">
          <div className="w-max h-max flex flex-col justify-center items-start mb-2">
            <h1 className="font-semibold text-lg">Gaurav Sarkar</h1>
            <span className="w-[50%] sm:w-full text-foreground/70 font-normal text-wrap">
              Full Stack Developer · Next.js · React · Node.js · TypeScript
            </span>
          </div>
          <div className="w-max h-max flex items-center gap-1 sm:gap-2">
            <span className="w-max py-1 px-3 text-green-600 border border-green-100 text-[10px] bg-green-50 rounded-sm uppercase ">
              Open to work
            </span>
            <span className="w-max py-1 px-3 text-primary text-[10px] border border-primary/10 bg-primary/5 rounded-md uppercase ">
              10 month's of Experience
            </span>
            <FaGoogle
              className="size-5 cursor-pointer hover:scale-105 transition-transform duration-300 hover:text-primary sm:mx-1"
              onClick={copyEmail}
            />
            <a
              href="https://github.com/Gaurav007-star"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="size-5 cursor-pointer hover:scale-105 transition-transform duration-300 hover:text-primary sm:mx-1" />
            </a>

            <a
              href="https://www.linkedin.com/in/gaurav-sarkar-69319a241"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="size-5 cursor-pointer hover:scale-105 transition-transform duration-300 hover:text-primary sm:mx-1" />
            </a>
          </div>
        </section>
      </div>

      {/* hero-section */}
      <h1 className=" text-xl sm:text-5xl italic my-4">
        <span className="flex items-center gap-1 group">
          Building modern
          <span className="text-muted flex items-center gap-1 group-hover:text-primary transition-all duration-300 cursor-pointer">
            web applications{" "}
            <ArrowUpRight className="size-5 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-all duration-300" />
          </span>
          &
        </span>
        <span className="flex items-center gap-1 group">
          AI-powered products &
          <span className="text-muted flex items-center gap-1 group-hover:text-primary transition-all duration-300 cursor-pointer ">
            software.
            <ArrowUpRight className="size-5 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-all duration-300" />
          </span>
        </span>
      </h1>

      {/* navigate-section */}
      <Navbar />

      {/* description-section */}
      <section className="flex flex-col gap-2 text-lg leading-relaxed text-foreground/70">
        <span>
          Hey, I'm Gaurav. I'm a Full Stack Developer focused on building modern
          web products with Next.js, React, Node.js, and MongoDB. I enjoy
          creating applications from scratch, shipping features quickly, and
          solving problems that matter.
        </span>
        <span>
          Over the last year, I've worked on full-stack projects ranging from
          AI-integrated platforms to business applications, gaining experience
          across frontend development, backend architecture, APIs,
          authentication, databases, and deployment.
        </span>
        <span>
          Currently, I'm exploring TypeScript, PostgreSQL, and scalable SaaS
          architecture while seeking Full Stack Developer opportunities. I'm
          most excited by ambitious teams, fast-moving startups, and products
          that push technology forward.
        </span>
      </section>
    </div>
  );
};

export default Home;
