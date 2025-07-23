// components/Footer.jsx
import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        <div>
          <h3 className="text-xl font-bold text-indigo-400 mb-3">
            MyWeatherApp
          </h3>
          <p className="text-sm text-gray-100">
            Stay ahead of the weather! Get real-time forecasts, air quality
            updates, and sunrise/sunset timings — all in one clean and
            responsive interface.
          </p>
        </div>

        {/* <div className="space-y-2">
          <h4 className="text-md font-semibold text-gray-800">Quick Links</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><Link to="/" className="hover:text-indigo-500 transition">Home</Link></li>
            <li><Link to="/password-generator" className="hover:text-indigo-500 transition">Password Generator</Link></li>
            <li><Link to={"/about"} className="hover:text-indigo-500 transition">About</Link></li>
          </ul>
        </div> */}

        <div>
          <h4 className="text-md font-semibold text-white mb-2">
            Let's Connect
          </h4>
          <div className="flex space-x-4 ">
            <a
              href="https://github.com/satyendragautam901"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-600 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/satyendra-gautam-525220244/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-600 text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/SatyendraG20577"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-600 text-xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className=" text-center py-4 text-sm text-gray-200 font-bold">
        © {new Date().getFullYear()} MyWeatherApp. Built by Satyendra Gautam 💙
      </div>
    </footer>
  );
};

export default Footer;
