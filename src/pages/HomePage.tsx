
import { Link } from 'react-router-dom';
import { Car, Users, MapPin, Clock, CheckCircle, MessageCircle, Shield, Star, Leaf, Trees } from 'lucide-react';
import { useState, useEffect } from 'react';
import ootyImg from './src/images/ooty package.jpg';
const HomePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const whatsappNumber = "919876543210";
  const message = "Hi! I want to know more about Ooty tour packages.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const features = [
    {
      icon: <Car className="h-8 w-8 text-green-700 dark:text-green-300" />,
      title: "Pickup Service", 
      description: "We pick you up from anywhere in South India",
      delay: "0s"
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-700 dark:text-amber-300" />,
      title: "Clean & Safe Rides",
      description: "Well-maintained vehicles with experienced drivers",
      delay: "0.1s"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Trusted Guides",
      description: "Local experts who know Ooty inside out",
      delay: "0.2s"
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
      title: "Flexible Plans",
      description: "Customizable itineraries to suit your needs",
      delay: "0.3s"
    }
  ];

  const topPackages = [
    {
      id: 'ooty-package',
      name: "Ooty Hill Station Special",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Explore the Queen of Hill Stations with its gardens and lakes",
      highlights: ["Botanical Gardens", "Ooty Lake", "Doddabetta Peak"]
    },
    {
      id: 'other-packages',
      name: "Other South India Destinations",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Discover amazing destinations across South India",
      highlights: ["Backwater Cruises", "Tea Plantations", "Historic Sites"]
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Contact Us",
      description: "Reach out via WhatsApp or phone to discuss your requirements"
    },
    {
      number: "2", 
      title: "Custom Plan",
      description: "We create a personalized itinerary based on your preferences"
    },
    {
      number: "3",
      title: "Travel & Enjoy",
      description: "We handle everything while you enjoy your Ooty experience"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section with Ooty Nature Image */}
      <section className="relative h-screen bg-gradient-to-br from-green-900/70 via-green-800/50 to-green-700/60 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)`,
              opacity: imageLoaded ? 1 : 0 
            }}
            onLoad={() => setImageLoaded(true)}
          ></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-gentle-fade">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            Ooty Kevin Tour & Travels
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white font-light drop-shadow-md">
            Your Gateway to the Queen of Hill Stations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-soft-rise" style={{ animationDelay: '0.3s' }}>
            <Link 
              to="/packages"
              className="green-gradient text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 soft-shadow hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-transparent group"
            >
              <span className="group-hover:animate-pulse">View Packages</span>
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <MessageCircle className="h-5 w-5" />
              Contact on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Ooty Kevin Tour & Travels?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-light">
              We provide hassle-free travel experiences with personalized service and attention to detail
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 animate-soft-rise"
                style={{ animationDelay: feature.delay }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-800 hover:bg-green-200 dark:hover:bg-green-700 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-light text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-light">
              Simple steps to plan your perfect Ooty getaway
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-5">
                  <div className="green-gradient text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto hover:scale-110 transition-transform duration-300 shadow-md cursor-pointer">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-light text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Tour Packages
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-light">
              Discover our most loved destinations in South India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {topPackages.map((pkg, index) => (
              <div key={pkg.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-200 dark:border-gray-700 group">
                <div className="relative overflow-hidden">
                  <div 
                    className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" 
                    style={{ backgroundImage: `url(${pkg.image})` }}
                  ></div>
                  <div className="absolute top-3 right-3 bg-green-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-light text-sm">
                    {pkg.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link 
                    to={`/package/${pkg.id}`}
                    className="inline-block green-gradient text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md focus:outline-none focus:ring-4 focus:ring-green-300 w-full text-center text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/packages"
              className="nature-gradient text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-md focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
