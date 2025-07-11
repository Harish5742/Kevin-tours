
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Package {
  id: string;
  name: string;
  image: string;
  description: string;
  highlights: string[];
  note?: string;
  places: Array<{
    name: string;
    image: string;
    itinerary: string[];
    inclusions: string[];
    exclusions: string[];
  }>;
}

interface PackageCardProps {
  pkg: Package;
}

const PackageCard = ({ pkg }: PackageCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
      <div className="relative">
        <div 
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${pkg.image})` }}
        ></div>
        <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium">
          Premium
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{pkg.name}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{pkg.description}</p>
        
        {pkg.note && (
          <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
              📍 Note: {pkg.note}
            </p>
          </div>
        )}
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Package Highlights:</h4>
          <div className="flex flex-wrap gap-2">
            {pkg.highlights.map((highlight, index) => (
              <span 
                key={index}
                className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm px-3 py-1 rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* View More Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300 mb-4"
        >
          <span className="font-medium text-gray-900 dark:text-white">
            View More
          </span>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Detailed Description:</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {pkg.id === 'ooty-package' 
                  ? "Experience the enchanting beauty of Ooty with our comprehensive package that covers all major attractions. From the misty mountains to the lush tea gardens, enjoy a perfect blend of nature, adventure, and relaxation. Our expertly crafted itinerary ensures you don't miss any of the iconic spots that make Ooty the 'Queen of Hill Stations'."
                  : "Embark on an unforgettable journey through South India's most captivating destinations. Starting from the beautiful hill station of Ooty, explore diverse landscapes, rich cultural heritage, and stunning natural beauty. Each destination offers unique experiences from backwater cruises to wildlife safaris, ancient temples to modern cities."
                }
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Places Included:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.places.map((place, index) => (
                  <div key={index} className="bg-white dark:bg-gray-600 p-3 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div 
                        className="w-12 h-12 bg-cover bg-center rounded-md flex-shrink-0"
                        style={{ backgroundImage: `url(${place.image})` }}
                      ></div>
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                          {place.name}
                        </h5>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          {place.itinerary.slice(0, 2).join(', ')}
                          {place.itinerary.length > 2 && '...'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What's Included:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-sm font-medium text-green-700 dark:text-green-300 mb-2">✓ Inclusions</h5>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Professional guide services</li>
                    <li>• Transportation in AC vehicle</li>
                    <li>• All entry fees to attractions</li>
                    <li>• Accommodation arrangements</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-red-700 dark:text-red-300 mb-2">✗ Exclusions</h5>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Personal expenses</li>
                    <li>• Travel insurance</li>
                    <li>• Additional activities</li>
                    <li>• Meals (unless specified)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <Link 
          to={`/package/${pkg.id}`}
          className="block w-full bg-green-600 hover:bg-green-700 text-white text-center px-6 py-4 rounded-lg font-semibold transition-colors duration-300 text-lg"
        >
          Package Details
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
