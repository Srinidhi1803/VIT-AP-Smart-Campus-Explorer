// js/data.js
export const CATEGORIES = [
  { id: "academic", label: "Academic" },
  { id: "residential", label: "Residential" },
  { id: "facilities", label: "Facilities" },
  { id: "access", label: "Access" },
];

export const LOCATIONS = [
  // ACCESS
  {
    id: "main-gate",
    name: "Main Gate",
    category: "access",
    short: "Primary entry point to VIT-AP campus.",
    highlights: ["Security checkpoint", "Pickup/drop area", "Campus entry"],
    lat: 16.4971432,
    lng: 80.4987705,
    image: "assets/placeholder-mg.jpg",
    subLocations: [],
  },

  // ACADEMIC
  {
    id: "ab1",
    name: "AB1 – Academic Block 1",
    category: "academic",
    short: "Classrooms, labs, faculty cabins, and key student services.",
    highlights: ["Library", "Health Center", "Labs & classrooms"],
    lat: 16.495617,
    lng: 80.5001534,
    image: "assets/placeholder-ab1.jpg",
    subLocations: [
      {
        id: "library",
        name: "Library",
        note: "Study spaces, books, and digital learning resources.",
        lat: 16.4955216,
        lng: 80.5000787, // optional: used only if you later want a pin
      },
      {
        id: "health-center",
        name: "Health Center",
        note: "Basic on-campus medical support and assistance.",
        lat: 16.495617,
        lng: 80.5001534, // keep same as AB1 for now
      },
      {
        id: "newton-hall",
        name: "Newton Hall",
        note: "Lecture hall used for classes and sessions.",
      },
      {
        id: "einstein-hall",
        name: "Einstein Hall",
        note: "Lecture hall used for classes and sessions.",
      },
    ],
  },
  {
    id: "ab2",
    name: "AB2 – Academic Block 2",
    category: "academic",
    short: "Academic complex with major venues and learning spaces.",
    highlights: ["Auditorium", "Amphitheatre", "Seminar spaces"],
    lat: 16.4948655,
    lng: 80.4975421,
    image: "assets/placeholder-ab2.jpg",
    subLocations: [
      {
        id: "auditorium",
        name: "Auditorium",
        note: "Indoor venue for events, talks, and performances.",
      },
      {
        id: "amphitheatre",
        name: "Amphitheatre",
        note: "Open-air space for cultural programs and gatherings.",
      },
    ],
  },
  {
    id: "cb",
    name: "CB – Central Block",
    category: "academic",
    short: "Central hub for academics and administration with classrooms.",
    highlights: ["Admin offices", "Classrooms", "Student services"],
    lat: 16.4948655,
    lng: 80.4975421,
    image: "assets/placeholder-cb.jpg",
    subLocations: [],
  },

  // RESIDENTIAL
  {
    id: "mens-hostel",
    name: "Mens Hostel",
    category: "residential",
    short: "Residential complex for male students with multiple hostel blocks.",
    highlights: ["Accommodation blocks", "Common areas", "Nearby services"],
    lat: 16.4942502, 
    lng: 80.500046,
    image: "assets/placeholder-mh.jpg",
    subLocations: [
      { id: "mh1", name: "MH1", note: "Mens Hostel Block 1" },
      { id: "mh2", name: "MH2", note: "Mens Hostel Block 2" },
      { id: "mh3", name: "MH3", note: "Mens Hostel Block 3" },
      { id: "mh4", name: "MH4", note: "Mens Hostel Block 4" },
      { id: "mh5", name: "MH5", note: "Mens Hostel Block 5" },
      { id: "mh6", name: "MH6", note: "Mens Hostel Block 6" },
    ],
  },
  {
    id: "ladies-hostel",
    name: "Ladies Hostel",
    category: "residential",
    short: "Residential blocks for female students with shared facilities.",
    highlights: ["Accommodation blocks", "Security", "Common areas"],
    lat: 16.4927734,
    lng: 80.4975582,
    image: "assets/placeholder-lh.jpg",
    subLocations: [
      { id: "lh1", name: "LH1", note: "Ladies Hostel Block 1" },
      { id: "lh2", name: "LH2", note: "Ladies Hostel Block 2" },
      { id: "lh3", name: "LH3", note: "Ladies Hostel Block 3" },
    ],
  },

  // FACILITIES
  {
    id: "sac",
    name: "SAC – Student Activity Center",
    category: "facilities",
    short: "Indoor sports, fitness, and extracurricular activity hub.",
    highlights: ["Indoor courts", "Practice spaces", "Gym & activities"],
    lat: 16.4948428,
    lng: 80.4978577,
    image: "assets/placeholder-sac.jpg",
    subLocations: [],
  },
  {
    id: "food-street",
    name: "Food Street",
    category: "facilities",
    short: "Popular dining stretch for quick meals, snacks, and drinks.",
    highlights: ["Multiple stalls", "Student hangout", "Quick service"],
    lat: 16.4940484,
    lng: 80.4983448,
    image: "assets/placeholder-fs.jpg",
    subLocations: [],
  },
  {
    id: "rock-plaza",
    name: "Rock Plaza",
    category: "facilities",
    short: "Convenience zone for snacks and essential student needs.",
    highlights: ["Snacks & drinks", "Stationery", "Photocopy/Xerox"],
    lat: 16.4948655,
    lng: 80.4975421,
    image: "assets/placeholder-rp.jpg",
    subLocations: [],
  },
  {
    id: "sports-triangle",
    name: "Sports Triangle",
    category: "facilities",
    short: "Outdoor sports and athletics zone for games and practice.",
    highlights: ["Football & cricket", "Courts", "Running/athletics"],
    lat: 16.4938979,
    lng: 80.4967397,
    image: "assets/placeholder-st.jpg",
    subLocations: [],
  },
];
