import React, {useState} from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool } from 'react-icons/fa';


import HighSchool from './../images/ching.jpg';
import MiddleSchool from './../images/centennial.JPG';
import SOM from './../images/som.png';

// Dummy data for the timeline
const educationData = [
  {
    year: '2024 - Present',
    degree: 'Grade 8',
    school: "Fletcher's Creek Sr. Public School",
    imageUrl: "https://i.ibb.co/FxP9vcB/PXL-20241030-183514483-1.jpg",
    extracurriculars: [
      'President of Programing club',
      'President of Sihk Association',
      'Running/Teaching Counting On You(COY) for Coding',
      'Member of School Student Ambassadors',
      'Sea Cadets, Leading Cadet Dhesi - 139 ILLUSTRIOUS, ROYAL CANADIAN SEA CADET CORPS',
      'Member of Competitive Swimming Team - Barracuda',
      'Vice President of Education in Toast Master - Public Speaking club',
    ],
  },
  {
    year: '2023 - 2024',
    degree: 'Grade 7',
    school: "Fletcher's Creek Sr. Public School",
    imageUrl: "https://i.ibb.co/L8WYQ0V/F459-FA2-A-A10-A-45-A2-9-EE0-393684-F1-EECF-2.jpg",
    extracurriculars: [
      'President of Programing club',
      'President of Sihk Association',
      'Member of School Student Ambassadors',
      'Joined Sea Cadets and Promoted to Leading Cadet - 139 ILLUSTRIOUS, ROYAL CANADIAN SEA CADET CORPS',
      'Member of Competitive Swimming Team - Barracuda',
      'Member of Badminton Team',
      'Member of Cross-Country Team',
      'Member of Toast Master - Public Speaking club',
    ],
  },
  {
    year: '2022 - 2023',
    degree: 'Grade 6',
    school: "Fletcher's Creek Sr. Public School",
    imageUrl: "https://i.ibb.co/cr0zJ6G/PXL-20241008-180022608.jpg",
    extracurriculars: [
      'President of Learn N Share', 
      'President of Programing club',
      'President of Sihk Association',
      'Member of Student Council',
      'Joined Sea Cadets - 139 ILLUSTRIOUS, ROYAL CANADIAN SEA CADET CORPS',
      'Member of Competitive Swimming Team - Barracuda',
      'Member of Toast Master - Public Speaking club',
    ],
  }
];

export default function EducationTimeline() {
  const [selectedEdu, setSelectedEdu] = useState(null);

  return (
    <div className="bg-gray-800 text-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Education Timeline</h2>
      
      <VerticalTimeline>
        {educationData.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            date={edu.year}
            iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
            contentStyle={{ background: 'rgb(75, 85, 99)', color: '#fff', borderRadius: '10px' }} 
            contentArrowStyle={{ borderRight: '7px solid  rgb(75, 85, 99)' }}
            icon={<FaSchool />}
          >
            <div className="text-center">
              <h3 className="vertical-timeline-element-title font-semibold text-xl mb-2">{edu.degree}</h3>
              <h4 className="vertical-timeline-element-subtitle font-medium text-lg mb-4">{edu.school}</h4>
              <img 
                src={edu.imageUrl}
                alt={`${edu.degree} at ${edu.school}`}
                className="mx-auto w-full h-auto object-cover rounded-lg my-4"
                style={{ maxHeight: '250px' }}
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedEdu(edu)}
              >
                Learn More
              </button>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {selectedEdu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white text-gray-800 rounded-lg p-6 max-w-md w-full">
            <h3 className="font-bold text-xl mb-4">{selectedEdu.school} - Extracurriculars</h3>
            <ul>
              {selectedEdu.extracurriculars.map((activity, idx) => (
                <li key={idx} className="mb-2">{activity}</li>
              ))}
            </ul>
            <button
              className="mt-4 bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-600"
              onClick={() => setSelectedEdu(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}