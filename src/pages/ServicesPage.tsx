
import { Car, MapPin, Shield, Clock, Users, CheckCircle, MessageCircle, Plane } from 'lucide-react';

const ServicesPage = () => {
  const whatsappNumber = "919876543210";
  const message = "Hi! I need a pickup quote for my Ooty trip.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const pickupStates = [
    { state: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Salem", "Trichy"] },
    { state: "Karnataka", cities: ["Bangalore", "Mysore", "Hassan", "Mandya"] },
    { state: "Kerala", cities: ["Kochi", "Calicut", "Thrissur", "Palakkad"] },
    { state: "Andhra Pradesh", cities: ["Hyderabad", "Vijayawada", "Visakhapatnam"] },
    { state: "Telangana", cities: ["Hyderabad", "Warangal", "Nizamabad"] }
  ];

  const airportPickups = [
    { airport: "Chennai Airport (MAA)", distance: "550 km to Ooty", duration: "9-10 hours" },
    { airport: "Bangalore Airport (BLR)", distance: "280 km to Ooty", duration: "5-6 hours" },
    { airport: "Coimbatore Airport (CJB)", distance: "85 km to Ooty", duration: "2.5 hours" },
    { airport: "Kochi Airport (COK)", distance: "290 km to Ooty", duration: "6-7 hours" },
    { airport: "Mysore Airport (MYQ)", distance: "125 km to Ooty", duration: "3-4 hours" }
  ];

  const vehicles = [
    {
      type: "Sedan",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      capacity: "4 Passengers",
      luggage: "2-3 Bags",
      suitable: "Couples, Small families",
      features: ["AC", "Comfortable seating", "Music system"]
    },
    {
      type: "SUV",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      capacity: "6-7 Passengers", 
      luggage: "4-5 Bags",
      suitable: "Families, Small groups",
      features: ["AC", "Spacious interior", "High ground clearance"]
    },
    {
      type: "Tempo Traveller",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      capacity: "12+ Passengers",
      luggage: "Large luggage space",
      suitable: "Large groups, Corporate tours",
      features: ["AC", "Push-back seats", "Entertainment system"]
    }
  ];

  const processSteps = [
    {
      icon: <MessageCircle className="h-12 w-12 text-green-600 dark:text-green-400" />,
      title: "Contact Us",
      description: "Reach out via WhatsApp or phone with your pickup location and travel dates"
    },
    {
      icon: <Car className="h-12 w-12 text-green-600 dark:text-green-400" />,
      title: "Vehicle Assignment",
      description: "We assign the best suitable vehicle and experienced driver for your journey"
    },
    {
      icon: <MapPin className="h-12 w-12 text-green-600 dark:text-green-400" />,
      title: "Pickup & Travel",
      description: "We pick you up from your doorstep or airport and ensure a comfortable journey to Ooty"
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600 dark:text-green-400" />,
      title: "Safe Return",
      description: "After your Ooty experience, we safely drop you back to your original location"
    }
  ];

  const features = [
    "Door-to-door pickup and drop service",
    "Airport pickup and drop facility",
    "Experienced and licensed drivers",
    "Well-maintained and clean vehicles",
    "24/7 customer support during travel",
    "Flexible timing and route options",
    "Competitive and transparent pricing",
    "Flight delay accommodation"
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Services</h1>
            <p className="text-xl text-green-100 dark:text-green-200 max-w-3xl mx-auto mb-8">
              We provide comfortable and reliable transportation from anywhere in South India to Ooty, including airport pickups
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-green-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 flex items-center mx-auto"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Get Pickup Quote
            </button>
          </div>
        </div>
      </section>

      {/* Airport Pickup Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Plane className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Airport Pickup Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Direct pickup from major airports across South India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airportPickups.map((airport, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{airport.airport}</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-300 flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-green-500" />
                    {airport.distance}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-orange-500" />
                    {airport.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">Flight arriving at a different airport?</p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Contact us for custom airport pickup
            </button>
          </div>
        </div>
      </section>

      {/* Pickup Coverage */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">South India Pickup Coverage</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We provide pickup services from major cities across South India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pickupStates.map((region, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                  {region.state}
                </h3>
                <ul className="space-y-2">
                  {region.cities.map((city, cityIndex) => (
                    <li key={cityIndex} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">Don't see your city listed?</p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Contact us for custom pickup
            </button>
          </div>
        </div>
      </section>

      {/* Vehicle Options */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Vehicle Options</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choose the perfect vehicle for your group size and comfort needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${vehicle.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{vehicle.type}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600 dark:text-gray-300 flex items-center">
                      <Users className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />
                      {vehicle.capacity}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Luggage:</strong> {vehicle.luggage}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Best for:</strong> {vehicle.suitable}
                    </p>
                  </div>
                  <div className="border-t dark:border-gray-600 pt-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {vehicle.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 dark:text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How Our Service Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Simple and hassle-free process from booking to drop-off
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Our Travel Service?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-500 dark:text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 dark:bg-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Ooty Trip?</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-8">
            Get a personalized quote for pickup from your location or airport
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 flex items-center mx-auto"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Get Your Quote Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
