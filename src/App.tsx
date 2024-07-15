import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="flex justify-center items-center gap-2 w-screen font-bold">
          <div className="bg-zinc-100 hover:bg-zinc-50 p-4 rounded-md cursor-pointer">
            <Link to="/">Home</Link>
          </div>
          <div className="bg-zinc-100 hover:bg-zinc-50 p-4 rounded-md cursor-pointer">
            <Link to="/about">About</Link>
          </div>
          <div className="bg-zinc-100 hover:bg-zinc-50 p-4 rounded-md cursor-pointer">
            <Link to="/resume">Resume</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
