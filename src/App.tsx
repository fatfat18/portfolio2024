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

const App = () => {
  const [route, setRoute] = useState("About");

  const handleRoute = (name: string) => {
    setRoute(name);
    localStorage.setItem("route", name);
  };

  useEffect(() => {
    let initialRoute = localStorage.getItem("route") ?? "";
    setRoute(initialRoute);
  }, []);

  return (
    <Router>
      <div className="font-outfit bg-zinc-900 min-h-screen flex justify-center items-center p-8 gap-4">
        <div className="bg-zinc-800 min-h-screen  rounded-xl w-1/4 flex flex-col items-center " data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">
          <div className="bg-zinc-700 rounded-2xl  w-max h-max mt-10 p-6">
            <img src="src/assets/profile.png" className=" h-40 w-40 animate-pulse" />
          </div>
          <br />
          <div className="w-full text-center  text-white text-2xl tracking-wide " data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800">
            John Patrick Pahunang
          </div>
          <br />
          <div className="w-3/4 text-center " data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="850">
            <span className="text-white text-md bg-zinc-700 p-2 px-4 rounded-lg tracking-wide"> Software Engineer</span>
          </div>
          <div className="border-b border-zinc-500 w-5/6">
            <svg height="50" width="300" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="10" x2="250" y2="10" />
            </svg>
          </div>

          <div className="w-3/4 flex items-center justify-center flex-col gap-4 text-white mt-10">
            <div
              className="rounded-xl  flex  items-center justify-center w-full bg-zinc-700 p-6 "
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-easing="ease-in-out-back"
            >
              <div className="w-1/4 flex items-center justify-center">
                {" "}
                <IoMailOutline size={30} />
              </div>
              <div className="w-3/4 flex items-center justify-start"> Something</div>
            </div>

            <div className="rounded-xl  flex items-center justify-center w-full bg-zinc-700 p-6 " data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1050" data-aos-easing="ease-in-out-back">
              <div className="w-1/4 flex items-center justify-center">
                {" "}
                <CiMobile1 size={30} />
              </div>
              <div className="w-3/4 flex items-center justify-start"> Something</div>
            </div>

            <div className="rounded-xl  flex items-center justify-center w-full bg-zinc-700 p-6 " data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1100" data-aos-easing="ease-in-out-back">
              <div className="w-1/4 flex items-center justify-center">
                {" "}
                <CiCalendarDate size={30} />
              </div>
              <div className="w-3/4 flex items-center justify-start"> Something</div>
            </div>

            <div className="rounded-xl  flex items-center justify-center w-full bg-zinc-700 p-6 " data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1150" data-aos-easing="ease-in-out-back">
              <div className="w-1/4 flex items-center justify-center">
                {" "}
                <CiLocationOn size={30} />
              </div>
              <div className="w-3/4 flex items-center justify-start"> Something</div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-800 relative min-h-screen max-h-screen overflow-y-auto w-3/4 rounded-xl flex flex-col " data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
          <div className="flex justify-between  items-center  w-full h-1/6 font-medium ">
            <div
              className=" pl-10 text-white tracking-widest h-full flex items-end justify-end text-2xl font-semibold"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-back"
              data-aos-delay="900"
            >
              {route}
            </div>
            <div className="flex bg-zinc-700 px-10 py-4 text-white rounded-bl-xl rounded-tr-xl w-max gap-10 " data-aos="fade" data-aos-duration="1000" data-aos-delay="1000">
              <Link to="/" onClick={() => handleRoute("About")}>
                <div className={`cursor-pointer  px-4 py-2 border-b-2 hover:border-b-2 border-zinc-700 hover:border-white transition duration-300 ${route === "About" ? "border-white " : ""}`}>
                  About
                </div>
              </Link>
              <Link to="/resume" onClick={() => handleRoute("Resume")}>
                <div className={`cursor-pointer  px-4 py-2 border-b-2 hover:border-b-2 border-zinc-700 hover:border-white transition duration-300 ${route === "Resume" ? "border-white " : ""}`}>
                  Resume
                </div>
              </Link>
              <Link to="/portfolio" onClick={() => handleRoute("Portfolio")}>
                <div className={`cursor-pointer  px-4 py-2 border-b-2 hover:border-b-2 border-zinc-700 hover:border-white transition duration-300 ${route === "Portfolio" ? "border-white " : ""}`}>
                  Portfolio
                </div>
              </Link>
              <Link to="/contact" onClick={() => handleRoute("Contact")}>
                <div className={`cursor-pointer  px-4 py-2 border-b-2 hover:border-b-2 border-zinc-700 hover:border-white transition duration-300 ${route === "Contact" ? "border-white " : ""}`}>
                  Contact
                </div>
              </Link>
            </div>
          </div>
          <div className="text-white h-5/6 p-10 pt-5" data-aos="fade" data-aos-duration="1000">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
