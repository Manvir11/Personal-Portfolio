import React, { useState } from 'react';
import Slider from 'react-slick';

// Make sure to install these dependencies
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function getSkillColor(skill) {
  const skillColors = {
    'C++': 'bg-blue-500',
    'Arduino': 'bg-red-500',
    'STM32': 'bg-purple-500',
    'AutoCAD': 'bg-pink-500',
    'Fusion 360': 'bg-pink-500',
    'Research': 'bg-green-500',
    'Circuit Designing': 'bg-orange-500',
    '3D Printing': 'bg-lime-500',
    'Structural Simulation': 'bg-teal-500',
    'Design Process': 'bg-teal-700',
    'Marketing': 'bg-pink-700',
    'Welding': 'bg-yellow-500', 
    'Physics': 'bg-yellow-600',
    'Math': 'bg-yellow-500', 
    'RX/TX Design': 'bg-teal-500',
    'Python': 'bg-indigo-500',
    'ReactJS': 'bg-blue-600',
    'NodeJS': 'bg-green-600',
    'ExpressJS': 'bg-pink-600',
    'VueJS': 'bg-green-700',
    'JavaScript': 'bg-yellow-800',
    'HTML': 'bg-red-600',
    'CSS/SCSS': 'bg-blue-700',
    'Flask': 'bg-black',
    'Django': 'bg-green-800',
    'Swift': 'bg-orange-600',
    'Flutter': 'bg-blue-800',
    'Firebase': 'bg-orange-700',
    'TailwindCSS': 'bg-teal-600',
    'C#': 'bg-purple-700',
    'SQL': 'bg-blue-900',
    'MongoDB': 'bg-green-900',
    'Heroku': 'bg-purple-800',
    'Vercel': 'bg-gray-700',
    'GitHub': 'bg-gray-800',
    'Employee Management': 'bg-indigo-700',
    'Funds Management': 'bg-pink-800',
    'Sponsorship': 'bg-orange-800',
    'Security': 'bg-red-700',
    'Electromagnets': 'bg-blue-300',
    'Battery Building': 'bg-yellow-700',
    'Motor Assembly': 'bg-gray-500',
    'Legal Regulations': 'bg-purple-600',
    'Partnership': 'bg-indigo-600',
    'Metal Work': 'bg-gray-700',
    'Super Capacitor': 'bg-lime-600',
    'Machine Learning': 'bg-teal-800',
    'TensorFlow/PyTorch': 'bg-orange-500',
    'N.E.A.T': 'bg-blue-400',
    'AI Develpment': 'bg-purple-700',
    'OpenCV': 'bg-purple-400',
    'Glass Work': 'bg-teal-700',
    'Wood Work': 'bg-orange-700'
  };


  return skillColors[skill] || 'bg-gray-500';
}




const projects = [
  {
    id: 0,
    title: 'My old portfolio website  ',
    type: 'Project',
    website: 'itsmanvir.netlify.app',
    skills: [
      'ReactJS',
      'ExpressJS',
      'NodeJS',
      'Design Process',
      'GitHub',
      'Research'
  ],
    description: 'This project took over 8 hours to make, working for 4 days. This project was made to learn the latest languages for website development by building a portfolio.',
    images: [
      'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjB4cXRsYzduNjJmemU5MDFremtiZW85dHpud3EwdHJtbHptMHB2biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/w4h8qUSUAgbgucmC6o/giphy.gif'
    ],

    documentationLink: 'https://docs.google.com/document/d/1dC8zbiMPgMlWTLRu3BNwyuPRkUP-buGYwB-YgWwjnsQ/edit',
    presentationLink: 'https://docs.google.com/presentation/d/1IM775wLAwZbe4HVxWJb7Cz_V9-9pgnbqZoIW7kUkzQc/edit',
  },
  {
    id: 1,
    title: 'Machine learning program',
    type: 'Project',
    skills: [
      'Machine Learning',
      'Python',
      'TensorFlow/PyTorch',
      'N.E.A.T',
      'Design Process',
      'GitHub',
      'AI Develpment',
      'Research'
  ],
    description: "This project was made to learn the ways of machine learning using advanced Python with 3rd party libraries such as NEAT. I needed this information for a bigger project😉.",
    images: [
      'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDBidGtyY3Z0M2FldGdhNHB1MnVrbmM5N3R1ZHB2cXF4djM3bWczOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cDFMIX39sPOhrperKe/giphy.gif'
    ],

    documentationLink: 'https://docs.google.com/document/d/1dC8zbiMPgMlWTLRu3BNwyuPRkUP-buGYwB-YgWwjnsQ/edit?usp=sharing',
    presentationLink: 'https://docs.google.com/presentation/d/1IM775wLAwZbe4HVxWJb7Cz_V9-9pgnbqZoIW7kUkzQc/edit',
  },
 
  {
    id: 2,
    title: 'Mathematica',
    type: 'Award',
    skills: [
      'Math'  
  ],
    description: "I took the grade 8 Mathematica contest while I was in grade 7 and got the award of distinction.",
    images: [
      'https://i.ibb.co/ZWw1SCD/image.png'
    ],

    documentationLink: 'https://docs.google.com/document/d/1dC8zbiMPgMlWTLRu3BNwyuPRkUP-buGYwB-YgWwjnsQ/edit',
    presentationLink: 'https://docs.google.com/presentation/d/1IM775wLAwZbe4HVxWJb7Cz_V9-9pgnbqZoIW7kUkzQc/edit',
  },
  {
    id: 3,
    website:'Site4u.ca',
    title: 'Site4u.ca',
    type: 'Volunteer',
    skills: [
      'Python',
      'ReactJS',
      'NodeJS',
      'ExpressJS',
      'JavaScript',
      'HTML',
      'CSS/SCSS',
      'Firebase',
      'C#',
      'SQL',
      'Vercel',
      'GitHub'
  ],
    description: "I work as software engineer in the team of Site4U. Site4U is a non profit orgaization that helps people with small startups or buisnesses to build their website. I am currently working on a shopify like website.",
    images: [
     'https://media.giphy.com/media/SSLH8ExkypjzGZFerf/giphy-downsized-large.gif'
    ],

    documentationLink: '',
    presentationLink: '',
  },
  {
    id: 4,
    title: 'Obsicle Avoiding/Self Driving Robot',
    type: 'Project',
    skills: [
      'C++',
      'Arduino',
      'AutoCAD',
      '3D Printing',
      'Circuit Designing',
      'Research',
      'Design Process'
  ],
    description: 'This is a project made to learn the fundamentals of Arduino and robotics.',
    images: [
     ''
    ],

    documentationLink: '',
    presentationLink: '',
  },
  {
    id: 5,
    type: 'Project',
    skills: [
      'C++',
      'RX/TX Design',
      'Arduino',
      'Fusion 360',
      '3D Printing',
      'Circuit Designing',
      'Structural Simulation',
      'Research',
      'Design Process',
      'Math',
      'Python',
      'N.E.A.T',
      'GitHub',
      'TensorFlow/PyTorch',
      'Machine Learning',
      'OpenCV',
      'AI Develpment'
  ],
    title: 'Autonomous go-kart with integrated mapping using machine learning',
    description: 'This has been my biggest project yet! This project has been in the making for the past 2 years. I have made smaller mini project to help me understand the differrent concepts that have been used in this project',
    images: [
     'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjB4cXRsYzduNjJmemU5MDFremtiZW85dHpud3EwdHJtbHptMHB2biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/w4h8qUSUAgbgucmC6o/giphy.gif'
    ],

    documentationLink: '',
    presentationLink: '',
  },
  {
    id: 6,
    title: 'Nerf Projectile Launcher',
    type: 'Project',
    skills: [
      'C++',
      'Arduino',
      'Fusion 360',
      '3D Printing',
      'Circuit Designing',
      'Research',
      'Design Process'
  ],
    description: "This was a project to 3D print a projectile launcher that can launch nerf darts at high speeds. This project so far is only a protype and the full laucher is not yet 3D printed but the actual mechanism that is going to launch the dart is already built while the 3D model of the nerf launcher is done.",
    images: [
      'https://itsmanvir.netlify.app/assets/nerf-6695ea05.png'
    ],

    documentationLink: '',
    presentationLink: '',
  },
 
  {
    id: 7,
    skill:[
      'Employee Management',
      'Funds Management'
    ],
    type: 'Sports',
    title: 'Lifeguarding',
    website: 'www.lifesavingsociety.com/swimming-lifesaving/lifesaving/bronze-medallion.aspx',
    description: "As a sportsman I have always been exeptional in swimming so I tried out lifegaurding and I got my Bronze Star certificate at the age of 11. Because I had sucess in bronze Star, I tried Bronze Medallion and I completed it successfuly along side ",
    images: [
      'https://i.ibb.co/b21VVSc/Whats-App-Image-2024-08-21-at-14-10-57.jpg',
      
    ],

    documentationLink: '',
    presentationLink: '',
  },
  {
    type: 'Club',
    skills: [
      'Math',
      'Python'
  ],
    title: 'Learn N Share',
    description: "I initiated and have been operating the Learn N Share club in my school as president of the club, for the years 2022-23 and 2023-24. It is a space where students can come together to learn and share their knowledge and experiences. The club is open to all students and is a great way to meet new people and learn new things. We offer help with homework.",
    images: [
      'https://i.ibb.co/5Fqk0GP/Screenshot-2024-10-06-183218.png'
      
    ],

    documentationLink: '',
    presentationLink: '',
  },
  {
    id: 9,
    type: 'Sports',
    title: 'Provincal level Competitive Swimming',
    website: 'www.ymcagta.org/activity/51867',
    description: "I am in a provincal team for swimming which is barracuda and I have been swimming competitively for 3 years. I have competed in many competitions with my team and we have managed to make it to the provincials.",
    images: [
      'https://i.ibb.co/crTp3kR/Whats-App-Image-2024-08-21-at-14-10-45.jpg',
      'https://i.ibb.co/b21VVSc/Whats-App-Image-2024-08-21-at-14-10-57.jpg',
      
    ],

    documentationLink: '',
    presentationLink: '',
  },
  {
    id: 10,
    type: 'Sports',
    title: 'Reginal Badminton',
    description: "I had the oppurtunity to play in the school regional badminton tournament in grade 7 and I was able to make it to 3rd place.",
    images: [
      '',
    ],

    documentationLink: '',
    presentationLink: '',
  },
  {
    type: 'Award',
    title: 'Sea Cadets',
    description: "I have achieved the rank of Leading Cadet in sea cadets. Sea Cadets is a program that teaches young people about the sea and how to be a good citizen. I have been a member of the Sea Cadets from 2023-2024 and I have learned a lot about how the Navy operate and how to be a good citizen. I have also been able to make many friends and have a lot of fun.",
    images: [
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejhrN3FkY2Jmb3c4cGV6MGg4cnI2OHA0dDltb2dsazZueGJ3YTdtbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l9gNopPvlJyZTaahVU/giphy.gif'
      
    ],

    documentationLink: '',
    presentationLink: '',
  },
  {
    id: 11,
    type: 'Sports',
    title: 'Cross counrty',
    description: "I have been participating in the Region competition for its cross-country race when I was in grade 7.",
    images: [
      ''
    ],

    documentationLink: '',
    presentationLink: '',
  },
  {
    id: 12,
    title: 'Programming Club',
    type: 'Club',
    skills: [
      'Python',
      'Math'
    ],
    description: "I initiated and have been operating a coding club in my school as president of the club, for the years 2022-23 and 2023-24. We foocused on teaching fellow students how to code in the language Python and how to think like a programmer. We had mini in school tournaments where fellow students could compete against each other to solve problems and the winner got a prize.",
    images: [
      ''
    ],

    documentationLink: '',
    presentationLink: '',
  },
  {
    id: 13,
    title: 'Public Speaking club',
    type: 'Club',
    description: "I have been a member of a public speaking club called Toastmasters. Throughout the 3 years I have been a member in this club, I have won many awards such as winning best evauluator in my club severl times and winning 3rd best speaker in my division.",
    images: [
      ''
    ],

    documentationLink: '',
    presentationLink: '',
  },
  {
    id: 14,
    type: 'Volunteer',
    title: 'I have over 100 hours of volunteer hours',
    description: "I have over 100 hours of volunteer hours. I have volunteered at my local Gurdwara which is my holy temple and with my Site4U team.",
    images: [
      ''
    ],

    documentationLink: '',
    presentationLink: '',
  },
  {
    id: 15,
    title: 'Self Opening Outdoor Tardis Bookshelf  ',
    type: 'Project',
    skills: [
      'C++',
      'Arduino',
      'AutoCAD',
      '3D Printing',
      'Circuit Designing',
      'Research',
      'Design Process',
      'Sponsorship',
      'Funds Management',
      'Wood Work'
  ],
    description: 'This project took over 8 hours to make, working for 4 days. This project was made to learn the latest languages for website development by building a portfolio.',
    images: [
      'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjB4cXRsYzduNjJmemU5MDFremtiZW85dHpud3EwdHJtbHptMHB2biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/w4h8qUSUAgbgucmC6o/giphy.gif'
    ],

    documentationLink: '',
    presentationLink: '',
  }
///more projects here i guess
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoaded = (id) => {
    setImageLoaded(prevState => ({ ...prevState, [id]: true }));
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, 
    centerPadding: '60px', 
    autoplay: true, 
    autoplaySpeed: 2000, 
  };

 
  const imageHeight = "h-64"; 

  // Button styling
  const buttonBaseStyles = "inline-block font-bold py-2 px-6 rounded transition duration-300 ease-in-out";
  const buttonPrimaryStyles = "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg active:bg-blue-800";
  const buttonSecondaryStyles = "bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg active:bg-purple-800";



  return (
    <div className="bg-gray-800 min-h-screen text-white py-12 px-4">

        <div className="my-8 flex justify-center">
          <div className="w-1/2 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
        </div>



      <h2 className="text-3xl font-extrabold text-center text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text sm:text-5xl mb-8">
        Projects/ Awards/ Experiences
      </h2>




      <div className="container mx-auto px-4">
        {/* ... existing code for the title ... */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-lg shadow-lg p-4 cursor-pointer">
              {/* Project image */}
              {project.images.length > 0 && (
                <>
                  {!imageLoaded[project.id] && (
                  <div className="animate-pulse rounded-lg bg-gray-700 h-64"></div>
                  )}
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className={`rounded-lg mb-4 ${imageLoaded[project.id] ? 'block' : 'hidden'}`}
                    onLoad={() => handleImageLoaded(project.id)}
                  />
              </>
              )}
              {/* Project title */}
              <h3 className={`text-lg font-bold`}>{project.title}</h3>
              {/* Project type label */}
              <p className="text-xs uppercase my-2">{project.type}</p>

              
              {/* Skills list */}
              {(project.skills==null) ? <div></div> :
                <>
                  <p className="text-xs uppercase mt-4 mr-2 py-1 pr-2 font-bold">Skills I Used:</p>
                  <div className="flex flex-wrap my-2">
                    {project.skills && project.skills.map((skill, index) => (
                      <p key={index} className={`text-xs uppercase mx-1 my-1 py-1 px-2 ${getSkillColor(skill)} rounded-full px-2`}>{skill}</p>
                    ))}
                  </div>
                </>
              }
              {/* Button to view project details */}
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:from-blue-400 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/50"
              >
                View Details
              </button>
              {project.website && (
                <a
                  href={`https://${project.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:from-red-400 hover:to-orange-500 hover:shadow-lg hover:shadow-orange-500/50"
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}


          
        </div>
      </div>

      {/* Modal for selected project */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-50">
          <div className="bg-white text-gray-800 rounded-lg p-6 max-w-lg w-grow z-50">
            <Slider {...settings}>
              {selectedProject.images.map((image, index) => (
                <div key={index} className="px-2">
                  <img src={image} alt={`Slide ${index}`} className={`w-grow ${imageHeight} object-cover rounded-lg`}  />
                </div>
              ))}
            </Slider>
            <div className="text-center mt-8">
              <h3 className="font-bold text-xl mb-4">{selectedProject.title}</h3>
              <p className="text-md mb-6">{selectedProject.description}</p>
              {(selectedProject.documentationLink==null) ? <></> :
                <a target="_blank"  href={selectedProject.documentationLink} className={`${buttonBaseStyles} ${buttonPrimaryStyles} mr-2`}>View Documentation</a>
              }
              {(selectedProject.presentationLink==null) ? <></> :
                <a target="_blank"  href={selectedProject.presentationLink} className={`${buttonBaseStyles} ${buttonSecondaryStyles}`}>View Presentation</a>
              }
              </div>
            <button
              className="mt-4 bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-600 focus:outline-none focus:ring"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}