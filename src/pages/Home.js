import React from 'react';
import Navbar from "./../components/Navbar";
import LandingPage from "./../components/landingPage";
import Education from '../components/education';
import Testimonials from '../components/testimony';
import ProjectsSection from '../components/projects';
import ContactSection from '../components/contact';

const Home = () => {
  return (
    <div class="text-slate-100">






      <div class="flex flex-row justify-center lg:justify-start ">
        {/* MAIN LEFT SIDE OF WEBSITE */}
        <div class="fixed lg:block hidden w-0 w-64 ">
          <Navbar />
        </div>

        
        <div class="w-0 lg:w-64"></div> {/* Place Holder */}

        {/* MAIN RIGHT SIDE OF WEBSITE */}
        <div class=" sm:w-full "> 
          {/* class add --> flex-auto */}
          <div id="home"><LandingPage /></div>
          {/* Sleek breaker/divider */}
        </div>

        {/* Start of background effect */}
        <div class="area bg-gradient-to-b  from-gray-900 from-30% to-gray-800 to-80%">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        {/* end of background effect */}

      </div>



      {/* MAIN RIGHT SIDE OF WEBSITE */}

      <div class="flex">
        <div class="w-0  lg:w-64"></div> {/* Place Holder */}
        <div class="flex-grow">
          <div id="Education"><Education /></div>
          <div id="Testimonials"><Testimonials/></div>
          <div id="Projects"><ProjectsSection/></div>
          <div id="Contact"><ContactSection /></div>
        </div>
      </div>
   
      



    </div>
  );
}

export default Home;