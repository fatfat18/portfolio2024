import { GoFileCode } from "react-icons/go";
import { TbTools } from "react-icons/tb";
import { VscTools } from "react-icons/vsc";
import { TbDeviceMobileCode } from "react-icons/tb";
const About = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-4">
        {" "}
        <div>
          My interest is building, creating, and improving software systems and applications. I am a committed software engineer. I have a solid background in engineering and computer information
          systems, and my areas of expertise are developing reliable system architectures, troubleshooting intricate programs, and designing effective code. I work in a variety of fields, including as
          enterprise software, mobile applications, and web development. I enjoy working collaboratively with stakeholders, other engineers, and developers to comprehend needs and provide scalable,
          high-quality solutions.
        </div>
        <div>
          I'm dedicated to lifelong learning and development, therefore I keep up with the newest innovations in technology and business practices to keep my contributions at the forefront of the
          field.
        </div>
      </div>
      <div className="mt-14 flex gap-2 flex-col">
        <div className="font-semibold text-2xl">What I'm Doing</div>

        <div className="w-full flex flex-col items-center justify-center gap-4 mt-4">
          <div className="flex justify-center items-center w-full gap-4 h-full">
            {" "}
            <div className="w-1/2 h-60 flex items-center justify-center bg-zinc-700 border-zinc-600 border rounded-xl">
              <div className="flex items-start justify-center  flex-col px-10 gap-4">
                <span className=" flex gap-2 items-center justify-center text-xl font-semibold ">
                  {" "}
                  <GoFileCode size="28" /> Web App Development
                </span>
                <span className="flex items-center justify-center  text-sm text-justify  text-zinc-400">
                  {" "}
                  Specializes in combining Vue or React with TypeScript to create dynamic and responsive online apps. Using Laravel and MySQL, I have a strong background in backend development and can
                  construct effective full-stack solutions. Creating scalable front-end architectures, streamlining database interactions, and guaranteeing top performance and user-friendly interfaces
                  are among my areas of competence.
                </span>
              </div>
            </div>
            <div className="w-1/2 h-60 flex items-center justify-center bg-zinc-700 border-zinc-600 border rounded-xl">
              <div className="flex items-start justify-center  flex-col px-10 gap-4">
                <span className=" flex gap-2 items-center justify-center text-xl font-semibold ">
                  {" "}
                  <TbDeviceMobileCode size="32" /> Mobile App Development
                </span>
                <span className="flex items-center justify-center  text-sm text-justify  text-zinc-400">
                  {" "}
                  Developing cross-platform mobile application with a focus on utilizing Ionic-React and Tailwind CSS to create mobile applications that are responsive and performant. My areas of
                  expertise are delivering flawless mobile experiences across several platforms, streamlining app performance, and designing user-friendly user interfaces.
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full gap-4 h-full">
            {" "}
            <div className="w-1/2 h-60 flex items-center justify-center bg-zinc-700 border-zinc-600 border rounded-xl">
              <div className="flex items-start justify-center  flex-col px-10 gap-4">
                <span className=" flex gap-2 items-center justify-center text-xl font-semibold ">
                  {" "}
                  <TbTools size="28" /> Create and Design UI
                </span>
                <span className="flex items-center justify-center  text-sm text-justify  text-zinc-400">
                  {" "}
                  Engages UI/UX developer and designer who specializes in developing and designing user interfaces for tablet, desktop, and mobile apps. I'm great at creating designs that are visually
                  appealing, responsive, and intuitive so that users can interact with them seamlessly on any device.
                </span>
              </div>
            </div>
            <div className="w-1/2 h-60 flex items-center justify-center bg-zinc-700 border-zinc-600 border rounded-xl">
              <div className="flex items-start justify-center  flex-col px-10 gap-4">
                <span className=" flex gap-2 items-center justify-center text-xl font-semibold ">
                  {" "}
                  <VscTools size="28" /> Troubleshoot - Fix - Maintain
                </span>
                <span className="flex items-center justify-center  text-sm text-justify  text-zinc-400">
                  {" "}
                  Competent with a wealth of knowledge in debugging, repairing, and maintaining programs on applications. My experience makes sure that programs function properly, quickly, and
                  consistently, giving users a dependable, excellent experience.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 flex gap-2 flex-col">
        <div className="font-semibold text-2xl">Clients</div>

        <div className="w-full flex flex-col items-center justify-center gap-4 mt-4">
          <div className="flex justify-center items-center w-full gap-4 h-full">
            {" "}
            <div className="w-1/4 h-60 flex flex-col gap-2 items-center justify-center  bg-zinc-700  border-zinc-600 border rounded-xl ">
              <img src="src/assets/react.svg" className="h-32 w-32 animate-spin-slow " />
              Company
            </div>
            <div className="w-1/4 h-60 flex flex-col gap-2 items-center justify-center  bg-zinc-700  border-zinc-600 border rounded-xl ">
              <img src="src/assets/react.svg" className="h-32 w-32 animate-spin-slow " />
              Company
            </div>
            <div className="w-1/4 h-60 flex flex-col gap-2 items-center justify-center  bg-zinc-700  border-zinc-600 border rounded-xl ">
              <img src="src/assets/react.svg" className="h-32 w-32 animate-spin-slow " />
              Company
            </div>
            <div className="w-1/4 h-60 flex flex-col gap-2 items-center justify-center  bg-zinc-700  border-zinc-600 border rounded-xl ">
              <img src="src/assets/react.svg" className="h-32 w-32 animate-spin-slow " />
              Company
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
