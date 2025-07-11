
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Package?</h2>
        <p className="text-xl text-gray-300 mb-8">
          We create personalized itineraries based on your preferences and group size
        </p>
        <Link 
          to="/contact"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 inline-block"
        >
          Create Custom Package
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
