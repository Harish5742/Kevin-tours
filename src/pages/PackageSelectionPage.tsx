
import { useParams, Link } from 'react-router-dom';
import { Heart, Users, UserCheck, Coffee } from 'lucide-react';

const PackageSelectionPage = () => {
  const { id } = useParams();

  const tripTypes = [
    {
      type: 'family',
      title: 'Family Trip',
      icon: <Users className="h-12 w-12" />,
      description: 'Perfect for families with children and elderly members',
      features: ['Kid-friendly activities', 'Comfortable transportation', 'Family rooms', 'Safe environments']
    },
    {
      type: 'honeymoon',
      title: 'Honeymoon',
      icon: <Heart className="h-12 w-12" />,
      description: 'Romantic getaway for couples',
      features: ['Romantic settings', 'Couple activities', 'Private dining', 'Luxury accommodations']
    },
    {
      type: 'friends',
      title: 'Friends Trip',
      icon: <Coffee className="h-12 w-12" />,
      description: 'Adventure and fun with your best friends',
      features: ['Group activities', 'Shared accommodations', 'Adventure sports', 'Nightlife options']
    },
    {
      type: 'solo',
      title: 'Solo Trip',
      icon: <UserCheck className="h-12 w-12" />,
      description: 'Peaceful journey for self-discovery',
      features: ['Flexible itinerary', 'Single occupancy', 'Join-in tours', 'Personal guide']
    }
  ];

  const packageNames = {
    'ooty-package': 'Ooty Hill Station Special',
    'kochi-package': 'Kochi Backwater Experience',
    'munnar-package': 'Munnar Tea Gardens Tour',
    'coorg-package': 'Coorg Coffee Plantation Tour'
  };

  const packageName = packageNames[id as keyof typeof packageNames] || 'Package';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-br from-green-900/70 via-green-800/50 to-green-700/60 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Choose Your Trip Type</h1>
            <p className="text-xl text-white/90 drop-shadow-md">
              Select the perfect experience for {packageName}
            </p>
          </div>
        </div>
      </section>

      {/* Trip Type Selection */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Kind of Trip Are You Planning?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-light">
              We'll customize the package based on your travel companions and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tripTypes.map((trip) => (
              <Link
                key={trip.type}
                to={`/package/${id}/${trip.type}`}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 group-hover:bg-green-200 dark:group-hover:bg-green-700 transition-colors duration-300">
                    {trip.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {trip.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {trip.description}
                </p>
                
                <ul className="text-left space-y-1">
                  {trip.features.map((feature, index) => (
                    <li key={index} className="text-xs text-gray-500 dark:text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium group-hover:bg-green-700 transition-colors duration-300">
                    Select This Option
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageSelectionPage;
