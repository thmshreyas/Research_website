import React, { useState } from 'react';
import { researchCenters } from '../../researchData';


const MechanicalCenter = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const centerData = researchCenters.find(center => center.slug === 'mechanical-engineering');
  const images = centerData.images;


  const handleHover = (direction) => {
    setCurrentImage(prev => {
      if (direction === 'next') {
        return (prev + 1) % images.length;
      } else {
        return (prev - 1 + images.length) % images.length;
      }
    });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-8">
      {/* Content Section */}
      <div className="lg:w-2/3 pr-8">
        <h1 className="text-4xl font-bold mb-8">Mechanical Engineering Research Center</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <div className="flex gap-8">
            <div className="w-2/3">
              <p className="text-lg text-gray-700 mb-4">
                Our Mechanical Engineering Research Center focuses on innovations in manufacturing, robotics, and thermal systems. We develop cutting-edge solutions for industrial applications and sustainable technologies.
              </p>
            </div>
            <div className="w-1/3">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">Key Facts</th>
                    <th className="p-2 border">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Established</td>
                    <td className="p-2 border">2011</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Faculty</td>
                    <td className="p-2 border">{centerData.keyFacts.faculty}</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Status</td>
                    <td className="p-2 border">
                      <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                        centerData.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {centerData.isOpen ? 'Open' : 'Closed'}
                      </span>
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </section>

        {/* Research Areas Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Research Areas</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Advanced Manufacturing and Robotics</li>
            <li>Thermal and Fluid Systems</li>
            <li>Mechatronics and Control Systems</li>
            <li>Materials Science and Engineering</li>
            <li>Energy Systems and Sustainability</li>
          </ul>
        </section>

        {/* Image Carousel Section */}
        <div className="lg:w-1/3 relative">
          <div 
            className="sticky top-8"
            onMouseEnter={() => handleHover('next')}
          >
            <img 
              src={images[currentImage]} 
              alt="Mechanical Engineering" 
              className="w-full h-auto rounded-lg shadow-lg transition-all duration-500"
            />
            <div className="absolute inset-0 flex justify-between items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={() => handleHover('prev')}
                className="p-2 bg-black/50 text-white rounded-full ml-2"
              >
                {'<'}
              </button>
              <button 
                onClick={() => handleHover('next')}
                className="p-2 bg-black/50 text-white rounded-full mr-2"
              >
                {'>'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicalCenter;
