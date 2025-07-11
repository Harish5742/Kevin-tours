
import { Award, Users, MapPin, Clock, Shield, Star, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "500+", label: "Happy Customers" },
    { icon: <MapPin className="h-8 w-8" />, number: "50+", label: "Cities Covered" },
    { icon: <Clock className="h-8 w-8" />, number: "5+", label: "Years Experience" },
    { icon: <Star className="h-8 w-8" />, number: "4.8", label: "Customer Rating" }
  ];

  const values = [
    {
      icon: <Shield className="h-12 w-12 text-green-600 dark:text-green-400" />,
      title: "Safety First",
      description: "All our vehicles undergo regular maintenance and safety checks. Our drivers are experienced and licensed."
    },
    {
      icon: <Users className="h-12 w-12 text-green-600 dark:text-green-400" />,
      title: "Customer Focused",
      description: "We prioritize customer satisfaction and go the extra mile to ensure memorable travel experiences."
    },
    {
      icon: <Award className="h-12 w-12 text-green-600 dark:text-green-400" />,
      title: "Quality Service",
      description: "We maintain high standards in our service delivery and continuously strive for excellence."
    },
    {
      icon: <Clock className="h-12 w-12 text-green-600 dark:text-green-400" />,
      title: "Reliability",
      description: "Punctual pickups, adherence to schedules, and dependable service you can count on."
    }
  ];

  const features = [
    "Licensed and experienced drivers",
    "Well-maintained vehicle fleet",
    "24/7 customer support",
    "Flexible itinerary options",
    "Transparent pricing",
    "Local expertise and knowledge",
    "Comprehensive tour packages",
    "Multi-lingual driver support"
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Kevin Tour & Travels</h1>
            <p className="text-xl text-green-100 dark:text-green-200 max-w-3xl mx-auto">
              Your trusted partner for memorable Ooty experiences with comfortable travel from anywhere in South India
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-green-600 dark:text-green-400 mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600 dark:text-gray-300">
            <p className="text-lg leading-relaxed mb-6">
              Kevin Tour & Travels was founded with a simple vision: to make Ooty accessible to everyone across South India 
              through comfortable, reliable, and affordable travel services. What started as a small local transport service 
              has grown into a trusted name in hill station tourism.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              We understand that planning a trip to Ooty can be challenging, especially when it comes to transportation 
              from distant cities. That's why we decided to specialize in long-distance pickups, ensuring that families 
              and travelers from Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, and Telangana can easily access the 
              Queen of Hill Stations.
            </p>
            
            <p className="text-lg leading-relaxed">
              Over the years, we have helped hundreds of families create beautiful memories in Ooty. Our commitment to 
              safety, comfort, and customer satisfaction has earned us a loyal customer base who trust us with their 
              most precious vacation moments.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Customers Trust Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Features and services that set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-green-500 dark:text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Meet Our Team</h2>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8">
            <div className="mb-6">
              <div className="w-24 h-24 bg-green-600 dark:bg-green-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                K
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Kevin</h3>
              <p className="text-green-600 dark:text-green-400 font-medium mb-4">Founder & Travel Specialist</p>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Kevin started this company with a passion for travel and a deep love for Ooty. With over 5 years of 
              experience in the travel industry, he personally ensures that every trip meets our high standards. 
              Kevin believes that travel should be stress-free and memorable, which is why he's committed to 
              providing exceptional service to every customer.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 dark:bg-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Ooty Adventure?</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-8">
            Let us help you create unforgettable memories in the hills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/packages"
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              View Packages
            </a>
            <a
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-gray-900 dark:border-gray-400 dark:hover:bg-gray-400 dark:hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
