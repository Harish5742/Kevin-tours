
import React from 'react';
import { MapPin } from 'lucide-react';

interface Place {
  name: string;
  image: string;
  itinerary: string[];
  inclusions: string[];
  exclusions: string[];
}

interface PlaceModalProps {
  place: Place;
  modalId: string;
  onWhatsAppClick: (placeName: string) => void;
}

const PlaceModal = ({ place, modalId, onWhatsAppClick }: PlaceModalProps) => {
  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box max-w-4xl bg-white dark:bg-gray-800">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">✕</button>
        </form>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img 
              src={place.image} 
              alt={place.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{place.name}</h3>
            
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Itinerary:</h4>
              <ul className="space-y-1">
                {place.itinerary.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                    <MapPin className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2 text-sm">✓ Inclusions</h4>
                <ul className="space-y-1">
                  {place.inclusions.map((item, idx) => (
                    <li key={idx} className="text-xs text-green-700 dark:text-green-400">{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2 text-sm">✗ Exclusions</h4>
                <ul className="space-y-1">
                  {place.exclusions.map((item, idx) => (
                    <li key={idx} className="text-xs text-red-700 dark:text-red-400">{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => onWhatsAppClick(place.name)}
              className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Contact us on WhatsApp
            </button>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default PlaceModal;
