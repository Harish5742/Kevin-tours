
import React from 'react';

const PackageHero = () => {
  return (
    <section className="relative h-[70vh] bg-gradient-to-br from-green-900/90 via-green-800/70 to-green-700/80 text-white overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-green-900/40 to-black/60"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-6 opacity-80">
            <span className="text-white/80">Home</span>
            <span className="text-white/60 mx-2">/</span>
            <span className="text-white font-medium">Tour Packages</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-2xl leading-tight">
            <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              Ooty Tour Packages
            </span>
          </h1>
          
          {/* Enhanced Description Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-10 py-8 inline-block mb-8 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-3"></div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Choose Your Perfect Adventure
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-green-400 rounded-full ml-3"></div>
            </div>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              Discover the beauty of South India with our carefully crafted packages designed to create unforgettable memories in nature's paradise
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-green-600/30 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2">
              <span className="text-sm font-medium">Expert Local Guides</span>
            </div>
            <div className="bg-blue-600/30 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2">
              <span className="text-sm font-medium">Comfortable Transport</span>
            </div>
            <div className="bg-purple-600/30 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2">
              <span className="text-sm font-medium">Custom Itineraries</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageHero;
