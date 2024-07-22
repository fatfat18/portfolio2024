import { LuGraduationCap } from "react-icons/lu";
import { IoBriefcaseOutline } from "react-icons/io5";

const Resume = () => {
  return (
    <div className="h-full pt-4">
      <ol className="relative border-s border-gray-200 mt-5 ">
        <li className="mb-10 ms-4">
          <div className="flex mb-10">
            {" "}
            <div className="absolute w-max  -mt-7  -translate-x-[1.8rem] ">
              <IoBriefcaseOutline size={25} />
            </div>
            <div className="absolute w-max  -mt-8  translate-x-[.5rem] mb-20 text-2xl font-semibold">Work Experience</div>
          </div>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">August 2023 - Present</time>
          <h3 className="text-lg font-semibold text-white ">System Developer</h3>
          <p className="mb-4 text-base font-normal text-gray-500 ">CLIMBS Life and General Insurance Cooparative</p>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">Feb 2023 - May 2023</time>
          <h3 className="text-lg font-semibold text-white ">Fullstack Web Developer Intern</h3>
          <p className="mb-4 text-base font-normal text-gray-500 ">CLIMBS Life and General Insurance Cooparative</p>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">July 2020 - November 2022</time>
          <h3 className="text-lg font-semibold text-white ">Modular Quality Assurance</h3>
          <p className="mb-4 text-base font-normal text-gray-500 ">Remotasks</p>
        </li>
      </ol>
      <br />
      <ol className="relative border-s border-gray-200 mt-2 ">
        <li className="mb-10 ms-4">
          <div className="flex mb-10">
            {" "}
            <div className="absolute w-max -mt-7  -translate-x-[1.9rem] ">
              <LuGraduationCap size={30} />
            </div>
            <div className="absolute w-max -mt-7  translate-x-[.5rem] mb-20 text-2xl font-semibold">Education</div>
          </div>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">June 2019 - August 2023</time>
          <h3 className="text-lg font-semibold text-white ">University of Science and Technology Information Technology</h3>
          <p className="mb-4 text-base font-normal text-gray-500 ">College Education Bachelors Degree</p>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">June 2017 - June 2019</time>
          <h3 className="text-lg font-semibold text-white ">Technical Vocatinal Livelihood - ICT</h3>
          <p className="mb-4 text-base font-normal text-gray-500 ">Senior High School Education</p>
        </li>
      </ol>
    </div>
  );
};

export default Resume;
