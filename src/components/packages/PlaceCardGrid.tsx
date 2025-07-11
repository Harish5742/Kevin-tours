import React from 'react';

// This component is now deprecated and no longer used in PackageCard
// Keeping for backward compatibility but it's not imported anywhere

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

interface PlaceCardGridProps {
  pkg: Package;
}

const PlaceCardGrid = ({ pkg }: PlaceCardGridProps) => {
  // Component deprecated - no longer used
  return null;
};

export default PlaceCardGrid;
