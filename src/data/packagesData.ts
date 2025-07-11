
export const mainPackages = [
  {
    id: 'ooty-package',
    name: "Ooty Package",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Explore the Queen of Hill Stations with its beautiful gardens, serene lakes, and misty mountains",
    highlights: ["Botanical Gardens", "Ooty Lake", "Doddabetta Peak", "Tea Gardens"],
    places: [
      {
        name: "Ooty",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        itinerary: ["Rose Garden visit", "Government Museum", "Charring Cross shopping", "Local cuisine tasting"],
        inclusions: [
          "Accommodation for 2 nights in 3-star hotel",
          "Daily breakfast and dinner", 
          "All sightseeing as per itinerary",
          "Transportation in AC vehicle",
          "Professional guide services",
          "All entry fees to attractions"
        ],
        exclusions: [
          "Lunch (available at extra cost)",
          "Personal expenses and shopping",
          "Travel insurance coverage", 
          "Camera fees at certain monuments"
        ]
      },
      {
        name: "Coonoor",
        image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        itinerary: ["Sim's Park", "Lamb's Rock viewpoint", "Tea factory visit", "Toy train ride"],
        inclusions: [
          "Tea factory guided tour",
          "Toy train tickets included",
          "Viewpoint access fees",
          "Local transportation"
        ],
        exclusions: [
          "Personal shopping",
          "Additional train rides",
          "Premium tea purchases"
        ]
      },
      {
        name: "Pykara",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        itinerary: ["Pykara Falls", "Boat house activities", "Nature photography", "Picnic spots"],
        inclusions: [
          "Boat house entry fees",
          "Nature guide services",
          "Photography assistance",
          "Picnic arrangements"
        ],
        exclusions: [
          "Boat rides (extra charges)",
          "Professional photography",
          "Food and beverages"
        ]
      },
      {
        name: "Mudumalai",
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        itinerary: ["Wildlife safari", "Elephant camp visit", "Nature walks", "Bird watching"],
        inclusions: [
          "Safari vehicle charges",
          "Forest entry permits",
          "Elephant camp visit",
          "Bird watching guide"
        ],
        exclusions: [
          "Safari photography charges",
          "Elephant ride fees",
          "Binocular rental"
        ]
      },
      {
        name: "Avalanche",
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        itinerary: ["Lake boating", "Trout fishing", "Mountain trekking", "Scenic viewpoints"],
        inclusions: [
          "Lake access permits",
          "Boating equipment",
          "Trekking guide",
          "Safety equipment"
        ],
        exclusions: [
          "Fishing equipment rental",
          "Trout fishing permits",
          "Advanced trekking gear"
        ]
      },
      {
        name: "Kodanad",
        image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        itinerary: ["Viewpoint sightseeing", "Valley photography", "Tea plantation walk", "Sunset viewing"],
        inclusions: [
          "Viewpoint access",
          "Photography guide",
          "Tea plantation tour",
          "Sunset point access"
        ],
        exclusions: [
          "Professional photography",
          "Tea tasting charges",
          "Refreshments"
        ]
      }
    ]
  },
  {
    id: 'other-packages',
    name: "Other Packages",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Discover amazing destinations across South India starting from Ooty",
    highlights: ["South India Tours", "Cultural Heritage", "Nature Escapes", "Historic Sites"],
    note: "All trips start from Ooty. Beginning location cannot be customized for other packages.",
    places: [
      {
        name: "Kochi",
        image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        itinerary: ["Chinese Fishing Nets", "Fort Kochi walk", "Spice market tour", "Backwater cruise"],
        inclusions: [
          "Transportation from Ooty to Kochi",
          "Backwater cruise tickets",
          "Spice market guided tour",
          "Fort Kochi heritage walk"
        ],
        exclusions: [
          "Accommodation in Kochi",
          "Meals during travel",
          "Shopping expenses",
          "Return transportation"
        ]
      },
      {
        name: "Munnar",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        itinerary: ["Tea plantation visit", "Eravikulam National Park", "Top Station viewpoint", "Mattupetty Dam"],
        inclusions: [
          "Transportation from Ooty to Munnar",
          "Tea plantation guided tour",
          "National park entry fees",
          "Viewpoint access"
        ],
        exclusions: [
          "Accommodation in Munnar", 
          "Meals during travel",
          "Tea purchasing",
          "Return transportation"
        ]
      },
      {
        name: "Coorg",
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        itinerary: ["Coffee plantation tour", "Abbey Falls", "Raja's Seat", "Dubare Elephant Camp"],
        inclusions: [
          "Transportation from Ooty to Coorg",
          "Coffee plantation tour",
          "Abbey Falls entry",
          "Elephant camp visit"
        ],
        exclusions: [
          "Accommodation in Coorg",
          "Meals during travel", 
          "Coffee purchases",
          "Elephant activities fees"
        ]
      },
      {
        name: "Mysore",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        itinerary: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens", "Local market visit"],
        inclusions: [
          "Transportation from Ooty to Mysore",
          "Palace entry tickets",
          "Chamundi Hills access",
          "Garden entry fees"
        ],
        exclusions: [
          "Accommodation in Mysore",
          "Meals during travel",
          "Shopping expenses",
          "Audio guide rentals"
        ]
      },
      {
        name: "Bangalore",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        itinerary: ["Lalbagh Gardens", "Bangalore Palace", "Commercial Street shopping", "Ulsoor Lake"],
        inclusions: [
          "Transportation from Ooty to Bangalore",
          "Garden entry fees",
          "Palace visit tickets",
          "City tour guide"
        ],
        exclusions: [
          "Accommodation in Bangalore",
          "Meals during travel",
          "Shopping expenses",
          "Airport transfers"
        ]
      },
      {
        name: "Wayanad",
        image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        itinerary: ["Edakkal Caves", "Banasura Sagar Dam", "Chembra Peak trek", "Spice plantation visit"],
        inclusions: [
          "Transportation from Ooty to Wayanad",
          "Cave entry permits",
          "Dam visit access",
          "Spice plantation tour"
        ],
        exclusions: [
          "Accommodation in Wayanad",
          "Trekking equipment",
          "Meals during travel",
          "Advanced trek permits"
        ]
      }
    ]
  }
];
