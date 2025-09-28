import React, { useState } from 'react';

const testimonials = [
    {
      name: "Ms. Ferreras",
      readTime: "1 min read",
      title: "Club Coordinator and Teacher",
      imageUrl: "https://i.ibb.co/ZJjbj0G/1713487710369.jpg", // Replace with the path to your image file
      testimonial: "It is my pleasure to write this referral for Manvir, a dedicated and driven student who I had the pleasure of teaching when he was in the sixth grade. From the start, he demonstrated a genuine eagerness to learn and a thirst for knowledge. He consistently sought ways to challenge himself academically and showed consistent growth in his learning skills. His proactive nature, coupled with his strong work ethic, made him stand out from the crowd.One of the most impressive examples of Manvir's initiative was when he took it upon himself to create and run a coding club for his fellow grade 6 students. Even this year he is running a programing club along with teaching coding in Counting On You. This not only showcased his leadership and passion for technology but also his desire to help others learn and grow. I have no doubt that Manvir will thrive in any program he pursues, as he has proven himself to be a dedicated learner with the drive to succeed in whatever he sets his mind to."
    },
    {
      name: "Ms. Norbert",
      readTime: "2 min read",
      title: "Teacher and Master of Music",
      imageUrl: "https://i.ibb.co/Tt04T6Q/1670801371481.jpg", // Replace with the path to your image file
      testimonial: "I was Manvir's Class Teacher in Grade 7 during the school year 2023-24. Throughout that year, he impressed me with his respectful demeanour at all times, an avid desire to learn more about concepts, and dedication to his academics. Manvir always keeps himself interested in learning more about the core subjects as well as general discussions going on in the class. One of the highlights was the Shark Tank-style pitch assignment to the principal, and boy, did he impress her with his confidence, clarity, and creativity! He had the principal just clapping and clapping for him. It was at this time that I really saw his communication skills and innovative thinking. Beyond academics, Manvir worked diligently to achieve excellent grades and put significant effort into extracurricular activities. His eagerness to initiate different clubs and participate in sports showed how involved he was in school life, and I remember him proudly bringing in small robotic projects he worked on at home-a sure sign of curiosity and creativity. I hereby wish Manvir the very best in his future academic career and am confident that he will remain successful."
    },
    {
      name: "Mr. Bailey",
      readTime: "1 min read",
      title: "Behavioral Assistant",
      imageUrl: "https://i.ibb.co/MM0P0rF/image-123650291.jpg", // Replace with the path to your image file
      testimonial: "Manvir has been a great addition to Fletcher’s Creek Ps. He’s taken on many leadership opportunities such as school ambassador. The ambassadors program focussed on Student voice,  student choice. Manvir and his peers brought awareness to the things they wanted to see and experience throughout the school year. Manvir effectively helped run school wide assemblies, was a great stage management assistant and continuously showed excitement when it came to being a helping hand around the school. His presence will be greatly missed, but will be an awesome addition at his new high school. "
    }
  ];

export default function TestimonialSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  return (
    <div className="bg-gray-800 text-white py-12">
      
    <div className="my-8 flex justify-center">
      <div className="w-1/2 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
    </div>

    <h2 className="text-3xl font-extrabold text-center text-transparent bg-gradient-to-r from-green-400 via-green-500 to-blue-600 bg-clip-text sm:text-5xl mb-8">
        Testimonials
    </h2>


      <div className="container mx-auto px-4">
        {/* Change from flex-col on small screens to flex-row on medium screens */}
        <div className="flex flex-col md:flex-row justify-around items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
          {testimonials.map((testimonial, index) => (
            <div key={index} onClick={() => setSelectedTestimonial(testimonial)} className="  flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-lg">
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-64 h-64 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <p className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">{testimonial.name}</p>
                <p className="text-gray-400 text-md">{testimonial.readTime}</p>
                <p className="mt-2 text-md">{testimonial.title}</p>
              </div>
              <div onClick={() => setSelectedTestimonial(testimonial)}>
                <button className=" mt-4 bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg active:bg-purple-800 inline-block font-bold py-2 px-6 rounded transition duration-300 ease-in-out" >Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm flex justify-center items-center p-4 ">
          <div className="bg-white text-gray-800 rounded p-6 max-w-lg w-full overflow-scroll">
            <h3 className="font-bold text-xl mb-4">{selectedTestimonial.title}</h3>
            <p className="text-lg">{selectedTestimonial.testimonial}</p>
            <button
              className="mt-6 bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-600 focus:outline-none focus:ring"
              onClick={() => setSelectedTestimonial(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}











