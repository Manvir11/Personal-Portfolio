import React from 'react';
import { FaLinkedin, FaPhone, FaEnvelope, FaGithub } from 'react-icons/fa'; // Importing icons

const profileImageUrl = 'https://itsmanvir.netlify.app/assets/heroImage-7339fb88.png'; // Your profile image
const linkedInUrl = 'https://www.linkedin.com/in/gunvir-dhesi-51218a211/'; // Your LinkedIn profile
const emailAddress = '833991@pdsb.net'; // Your email address

export default function ContactSection() {
  return (
    <div className="bg-gray-800 text-white py-12">
        <div className="my-8 flex justify-center">
          <div className="w-1/2 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
        </div>

      <div className="container mx-auto px-4 text-center">
        <img
          src={profileImageUrl}
          alt="Profile"
          className="mx-auto w-32 h-32 object-cover rounded-full mb-4"
        />
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

        <div className="flex justify-center items-center space-x-6 mb-6">
          <a href={"https://www.linkedin.com/in/manvir-dhesi-9b8927238/"} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400">
            <FaLinkedin size="2em" />
          </a>
          <a href={`mailto:${emailAddress}`} className="text-red-500 hover:text-red-400">
            <FaEnvelope size="2em" />
          </a>
          <a href="https://github.com/Manvir11" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-gray-300">
            <FaGithub size="2em" />
          </a>
        </div>
   




        <div className="text-lg mb-8 w-1/2 mx-auto">
          <p>Embarking on a transformative journey to become an engineer for the greater good of humanity. Follow me on this journey.</p>
        </div>
        
        <footer className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Manvir Singh Dhesi. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
