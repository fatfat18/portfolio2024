import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { CiMobile1 } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const App = () => {
  const [route, setRoute] = useState<string>("About");

  const handleRoute = (name: string) => {
    setRoute(name);
    localStorage.setItem("route", name);
    console.log(route);
    console.log(localStorage.getItem("route"));
  };

  useEffect(() => {
    let initialRoute = localStorage.getItem("route") ?? "About";
    setRoute(initialRoute);
  }, []);

  useEffect(() => {
    console.log(route);
  }, [route]);

  return (
    <Router>
      <div className="font-outfit bg-zinc-900 min-h-screen flex xl:flex-row flex-col justify-center items-center w-screen">
        <div className="bg-zinc-800 min-h-screen  rounded-xl xl:w-1/4 w-full  flex flex-col items-center " data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">
          <div className="bg-zinc-700 rounded-2xl  w-max h-max mt-10 p-6">
            <img src="/profile.png" className=" xl:h-40 w-20 xl:w-40 h-20 animate-pulse" />
          </div>
          <br />
          <div className="w-full text-center font-semibold text-white xl:text-2xl text-lg tracking-wide " data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800">
            John Patrick Pahunang
          </div>

          <div className="w-3/4 text-center mt-6 xl:text-md text-sm " data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="850">
            <span className="text-white  bg-zinc-700 p-2 px-4 rounded-lg tracking-wide"> Software Engineer</span>
          </div>
          <div className="border-b border-zinc-500 w-5/6">
            <svg height="50" width="300" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="10" x2="250" y2="10" />
            </svg>
          </div>

          <div className="w-3/4 flex items-center justify-center flex-col gap-4 text-white mt-10 xl:text-base text-xs">
            <div
              className="rounded-xl  flex  items-center justify-center w-full bg-zinc-700 p-6 "
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-easing="ease-in-out-back"
            >
              <div className="w-1/4 flex items-center justify-center">
                {" "}
                <IoMailOutline size={30} className="absolute" />
                <IoMailOutline size={25} className="animate-ping" />
              </div>
              <div className="w-3/4 flex items-center justify-start"> test@email.com</div>
            </div>

            <div className="rounded-xl  flex items-center justify-center w-full bg-zinc-700 p-6 " data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1050" data-aos-easing="ease-in-out-back">
              <div className="w-1/4 flex items-center justify-center">
                {" "}
                <CiMobile1 size={30} className="absolute" />
                <CiMobile1 size={25} className="animate-ping" />
              </div>
              <div className="w-3/4 flex items-center justify-start"> 0000-000-0000</div>
            </div>

            <div className="rounded-xl  flex items-center justify-center w-full bg-zinc-700 p-6 " data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1100" data-aos-easing="ease-in-out-back">
              <div className="w-1/4 flex items-center justify-center">
                {" "}
                <CiCalendarDate size={30} className="absolute" />
                <CiCalendarDate size={25} className="animate-ping" />
              </div>
              <div className="w-3/4 flex items-center justify-start"> Birthdate</div>
            </div>

            <div className="rounded-xl  flex items-center justify-center w-full bg-zinc-700 p-6 " data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1150" data-aos-easing="ease-in-out-back">
              <div className="w-1/4 flex items-center justify-center">
                {" "}
                <CiLocationOn size={30} className="absolute" />
                <CiLocationOn size={25} className="animate-ping" />
              </div>
              <div className="w-3/4 flex items-center justify-start"> Cagayan de Oro, Philippines</div>
            </div>
            <div className="w-full flex items-center justify-center my-8 gap-4">
              <FaInstagram size={18} className="cursor-pointer" />
              <FaFacebookF size={18} className="cursor-pointer" />
              <FaXTwitter size={18} className="cursor-pointer" />
              <FaLinkedinIn size={18} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div
          className="bg-zinc-800 relative min-h-screen xl:max-h-screen max-h-max h-max xl:overflow-y-auto overflow-none xl:w-3/4 w-full  rounded-xl flex flex-col  "
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <div className="flex xl:justify-between justify-center  items-center  w-full h-1/6 font-medium  ">
            <div
              className=" xl:pl-10 pl-0 text-white tracking-widest h-full xl:flex hidden items-end justify-end xl:text-2xl text-sm font-semibold "
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-back"
              data-aos-delay="900"
            >
              {route}
            </div>
            <div
              className="flex bg-zinc-700 xl:px-10 px-2 py-4 text-white rounded-bl-xl rounded-tr-xl w-max xl:gap-10 gap-2 xl:text-base text-xs "
              data-aos="fade"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <Link to="/" onClick={() => handleRoute("About")}>
                <div
                  className={`cursor-pointer  px-4 py-2 border-b-2 hover:border-b-2 hover:border-white transition duration-300 ${
                    route === "About" ? "border-white" : "border-zinc-700 hover:border-white"
                  }`}
                >
                  About
                </div>
              </Link>
              <Link to="/resume" onClick={() => handleRoute("Resume")}>
                <div
                  className={`cursor-pointer  px-4 py-2 border-b-2 hover:border-b-2 hover:border-white transition duration-300 ${
                    route === "Resume" ? "border-white" : "border-zinc-700 hover:border-white"
                  }`}
                >
                  Resume
                </div>
              </Link>
              <Link to="/portfolio" onClick={() => handleRoute("Portfolio")}>
                <div
                  className={`cursor-pointer  px-4 py-2 border-b-2 hover:border-b-2 hover:border-white transition duration-300 ${
                    route === "Portfolio" ? "border-white" : "border-zinc-700 hover:border-white"
                  }`}
                >
                  Portfolio
                </div>
              </Link>
              <Link to="/contact" onClick={() => handleRoute("Contact")}>
                <div
                  className={`cursor-pointer  px-4 py-2 border-b-2 hover:border-b-2 hover:border-white transition duration-300 ${
                    route === "Contact" ? "border-white" : "border-zinc-700 hover:border-white"
                  }`}
                >
                  Contact
                </div>
              </Link>
            </div>
          </div>
          <div className="text-white h-5/6 xl:p-10 p-6 pt-5" data-aos="fade" data-aos-duration="1000">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <div className="my-8">
            {" "}
            <div className="w-full text-zinc-400 text-center xl:text-base text-xs">Designed and Developed by John Patrick Pahunang</div>
            <div className="w-full text-zinc-400 text-center xl:text-base text-xs">© Copyrights Reserved 2024 </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
