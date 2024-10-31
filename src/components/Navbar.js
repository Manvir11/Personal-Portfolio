import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaStar, FaEnvelope, FaBasketballBall, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdWork, MdSchool } from 'react-icons/md';

export default function Navbar() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="w-64 p-4">
        {/* Profile Image */}
        <div className="flex justify-center">
          {!imageLoaded && (
            <div className="rounded-full w-32 h-32 bg-gray-700 animate-pulse"></div>
          )}
          <img
            className={`rounded-full w-32 h-32 border-solid border-4 border-gray-700 ${imageLoaded ? 'block' : 'hidden'}`}
            src="https://i.ibb.co/1RLYDZG/man.png"
            alt="Profile"
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Navigation */}
        <nav className="mt-8">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#home" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                <FaHome />
                <span>Main Page</span>
              </a>
            </li>
            <li>
              <a href="#Education" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                <MdSchool />
                <span>Education</span>
              </a>
            </li>
            <li>
              <a href="#Testimonials" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                <FaStar />
                <span>Testimonials</span>
              </a>
            </li>
            <li>
              <a href="#Projects" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                <FaUser />
                <span>Projects & Awards</span>
              </a>
            </li>
            <li>
              <a href="#Contact" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
                <FaEnvelope />
                <span>CONTACT</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="my-8 flex justify-center">
          <div className="w-4/5 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>



        {/* Social Media Links */}
        <div className="mt-8">
          <p className="text-center text-s">SOCIALS</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/manvir-dhesi-9b8927238/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-gray-300">
              <FaLinkedin size="24" />
            </a>
            <a href="https://github.com/Manvir11" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-gray-300">
              <FaGithub size="24" />
            </a>
          </div>
        </div>

        {/* Accessibility */}
        <div className="absolute bottom-4 left-4">
          <button aria-label="Adjust font size" className="text-xs p-2 bg-gray-700 rounded hover:bg-gray-600">
            <span>Alt+A</span>
          </button>
        </div>
      </div>
    </div>
  );
}

