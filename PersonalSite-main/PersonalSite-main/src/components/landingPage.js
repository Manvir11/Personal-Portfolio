import React, { useEffect } from 'react';


export default function LandingPage() {

  const words = ["I am an Aspiring Leader", "I am an Engineer"];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;



  function type() {
    currentWord = words[i];
    if (isDeleting) {
      document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
      j--;
      if (j == 0) {
        isDeleting = false;
        i++;
        if (i == words.length) {
          i = 0;
        }
      }
    } else {
      document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
      j++;
      if (j == currentWord.length) {
        isDeleting = true;
      }
    }
    setTimeout(type, 150);
  }

  


    useEffect(() => {
      type();
    }, []);

  return (
    <>

<div class="mx-auto max-w-screen-xl flex items-center text-white h-5/6">
      


    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-7xl"
      >
        Manvir Singh

        <span class="sm:block"> Dhesi </span>
      </h1>

    {/* AUTO TYPING */}
      <div class="w-full h-full flex justify-center items-center  py-6">
      <h2 id="typewriter" class="text-2xl font-bold absolute md:text-3xl lg:text-4xl"></h2>

      </div>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#Projects"
        >
          Projects
        </a>

        <a
          class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#Contact"
        >
          Contact Me
        </a>
      </div>
    </div>
  </div>
    </>
  )
}
