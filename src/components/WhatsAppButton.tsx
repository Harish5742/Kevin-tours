
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = "919876543210";
  const message = "Hi! I'm interested in Ooty tour packages. Can you help me?";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-full p-4 nature-shadow transition-all duration-300 hover:scale-110 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      
      {/* Tooltip */}
      <div className={`absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg whitespace-nowrap transition-all duration-300 ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}>
        Chat with us on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
      </div>
    </button>
  );
};

export default WhatsAppButton;
