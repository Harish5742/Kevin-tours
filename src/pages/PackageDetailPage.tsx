
import { useParams, Link } from 'react-router-dom';
import { MapPin, Check, X, Star, Calendar, Users } from 'lucide-react';

const PackageDetailPage = () => {
  const { id } = useParams();

  // Enhanced package data with additional days and detailed content
  const packageData = {
    'ooty-package': {
      name: "Ooty Package",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      description: "Experience the Queen of Hill Stations with its pristine beauty, lush gardens, and serene lakes.",
      additionalDays: "Can be extended to 4-7 days with custom itinerary",
      rating: 4.8,
      totalReviews: 245,
      locations: [
        { 
          name: "Ooty", 
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          itinerary: ["Rose Garden visit", "Government Museum", "Charring Cross shopping", "Local cuisine tasting", "Botanical Gardens tour", "Ooty Lake boating"]
        },
        { 
          name: "Coonoor", 
          image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          itinerary: ["Sim's Park", "Lamb's Rock viewpoint", "Tea factory visit", "Toy train ride", "Dolphin's Nose", "Hidden Valley exploration"]
        },
        { 
          name: "Pykara", 
          image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          itinerary: ["Pykara Falls", "Boat house activities", "Nature photography", "Picnic spots", "Pykara Lake", "Shooting Point"]
        },
        { 
          name: "Mudumalai", 
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          itinerary: ["Wildlife safari", "Elephant camp visit", "Nature walks", "Bird watching", "Theppakadu Elephant Camp", "Jungle trekking"]
        },
        { 
          name: "Avalanche", 
          image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          itinerary: ["Lake boating", "Trout fishing", "Mountain trekking", "Scenic viewpoints", "Avalanche Lake", "Silent Valley views"]
        },
        { 
          name: "Kodanad", 
          image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          itinerary: ["Viewpoint sightseeing", "Valley photography", "Tea plantation walk", "Sunset viewing", "Kodanad View Point", "Catherine Falls"]
        }
      ]
    },
    'other-packages': {
      name: "Other Packages",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      description: "Discover amazing destinations across South India starting from Ooty.",
      note: "All trips start from Ooty. Beginning location cannot be customized.",
      additionalDays: "Flexible 2-10 day packages available based on destinations",
      rating: 4.6,
      totalReviews: 189,
      locations: [
        { 
          name: "Kochi", 
          image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          itinerary: ["Chinese Fishing Nets", "Fort Kochi walk", "Spice market tour", "Backwater cruise", "Mattancherry Palace", "Marine Drive"]
        },
        { 
          name: "Munnar", 
          image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          itinerary: ["Tea plantation visit", "Eravikulam National Park", "Top Station viewpoint", "Mattupetty Dam", "Echo Point", "Anamudi Peak"]
        },
        { 
          name: "Coorg", 
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          itinerary: ["Coffee plantation tour", "Abbey Falls", "Raja's Seat", "Dubare Elephant Camp", "Talacauvery", "Brahmagiri Hills"]
        },
        { 
          name: "Mysore", 
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          itinerary: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens", "Local market visit", "St. Philomena's Church", "Karanji Lake"]
        },
        { 
          name: "Bangalore", 
          image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          itinerary: ["Lalbagh Gardens", "Bangalore Palace", "Commercial Street shopping", "Ulsoor Lake", "Cubbon Park", "Vidhana Soudha"]
        },
        { 
          name: "Wayanad", 
          image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          itinerary: ["Edakkal Caves", "Banasura Sagar Dam", "Chembra Peak trek", "Spice plantation visit", "Soochipara Falls", "Pookode Lake"]
        }
      ]
    }
  };

  const currentPackage = packageData[id as keyof typeof packageData];
  
  if (!currentPackage) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Package not found</h1>
          <Link to="/packages" className="text-green-600 hover:text-green-700">
            Return to packages
          </Link>
        </div>
      </div>
    );
  }

  const inclusions = [
    "Accommodation as per itinerary",
    "Daily breakfast",
    "All sightseeing as mentioned",
    "Transportation in AC vehicle",
    "Professional guide services",
    "All entry fees included",
    "Pick up and drop from nearest station",
    "All applicable taxes"
  ];

  const exclusions = [
    "Lunch and dinner (unless specified)",
    "Personal expenses and shopping",
    "Travel insurance",
    "Camera fees at monuments",
    "Tips and gratuities",
    "Extra activities not in itinerary",
    "Emergency expenses"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Enhanced Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${currentPackage.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="flex items-center mb-6">
              <Link to="/packages" className="text-white/80 hover:text-white transition-colors mr-2 text-sm">
                Packages
              </Link>
              <span className="text-white/60 mx-2">/</span>
              <span className="text-white font-medium text-sm">{currentPackage.name}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl leading-tight">
              {currentPackage.name}
            </h1>
            
            <p className="text-xl text-white/90 mb-6 max-w-2xl drop-shadow-md leading-relaxed">
              {currentPackage.description}
            </p>
            
            {/* Rating and Reviews */}
            <div className="flex items-center mb-6">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mr-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                <span className="font-semibold mr-1">{currentPackage.rating}</span>
                <span className="text-white/80 text-sm">({currentPackage.totalReviews} reviews)</span>
              </div>
              <div className="flex items-center bg-green-600/80 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Group Friendly</span>
              </div>
            </div>
            
            {/* Additional Days Info */}
            <div className="bg-blue-600/80 backdrop-blur-sm rounded-xl p-4 max-w-2xl">
              <div className="flex items-center mb-2">
                <Calendar className="h-5 w-5 mr-2 text-blue-200" />
                <h3 className="font-semibold text-lg">Flexible Duration</h3>
              </div>
              <p className="text-blue-100 text-sm">{currentPackage.additionalDays}</p>
            </div>
            
            {'note' in currentPackage && currentPackage.note && (
              <div className="mt-4 p-4 bg-amber-600/80 backdrop-blur-sm rounded-xl max-w-2xl">
                <p className="text-amber-100 font-medium text-sm">
                  📍 Note: {currentPackage.note}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Package Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Places You'll Visit */}
            <section className="mb-12">
              <div className="flex items-center mb-8">
                <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Places You'll Visit</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentPackage.locations.map((location, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div 
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${location.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-xl font-bold text-white drop-shadow-lg">{location.name}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-lg">Key Attractions:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {location.itinerary.map((item, idx) => (
                          <div key={idx} className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                            <MapPin className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Info Card */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg mb-6 border border-green-200 dark:border-gray-600">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Package Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Star className="h-5 w-5 mr-3 text-yellow-500" />
                  <span className="text-sm">Highly Rated Experience</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Users className="h-5 w-5 mr-3 text-blue-500" />
                  <span className="text-sm">Expert Local Guides</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Calendar className="h-5 w-5 mr-3 text-green-500" />
                  <span className="text-sm">Flexible Scheduling</span>
                </div>
              </div>
            </div>

            {/* Inclusions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-600" />
                What's Included
              </h3>
              <ul className="space-y-3">
                {inclusions.map((inclusion, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                    <Check className="h-4 w-4 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{inclusion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <X className="h-5 w-5 mr-2 text-red-600" />
                Not Included
              </h3>
              <ul className="space-y-3">
                {exclusions.map((exclusion, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                    <X className="h-4 w-4 mr-3 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{exclusion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Book Now */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl p-6 text-center shadow-lg">
              <h3 className="text-xl font-bold mb-2">Ready to Book?</h3>
              <p className="mb-6 text-green-100">Contact us to customize this package according to your needs</p>
              <Link 
                to="/contact"
                className="block bg-white text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-green-50 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPage;
