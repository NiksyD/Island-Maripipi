export type Destination = {
  slug: string
  name: string
  description: string
  image: string
  heroImage: string
  entranceFee: string
  thingsToDo: string[]
  whatToBring: string[]
  travelTime: string
  directions: string
  gallery: {
    src: string
    alt: string
  }[]
}

const destinations: Destination[] = [
  {
    slug: "sambawan",
    name: "Sambawan Island",
    description: "A stunning island with a picturesque view, crystal clear waters, and powdery white sand beaches.",
    image: "/images/sambawan.jpg",
    heroImage: "/images/sambawan-hero.jpg",
    entranceFee: " PHP 80 + PHP 20 for environmental fee",
    thingsToDo: ["Snorkeling and diving", "Island hopping", "Camping", "Photography", "Hiking to the viewpoint"],
    whatToBring: [
      "Sunscreen",
      "Drinking water",
      "Snacks and food",
      "Snorkeling gear",
      "Camera",
      "Cash (no ATMs available)",
    ],
    travelTime: "Approximately 1 to 2 hours by boat from Maripipi main port",
    directions:
      "From Maripipi main port, hire a boat to Sambawan Island. The journey takes about 1 to 2 hours depending on sea conditions. It's recommended to arrange transportation in advance.",
    gallery: [
      {
        src: "/images/sambawan-gallery-1.jpg",
        alt: "Aerial view of Sambawan Island",
      },
      {
        src: "/images/sambawan-gallery-2.jpg",
        alt: "Sunset at Sambawan Island",
      },
      {
        src: "/images/sambawan-gallery-3.jpg",
        alt: "Snorkeling spot at Sambawan Island",
      },
    ],
  },
  {
    slug: "viga",
    name: "Viga Spring",
    description: "A serene beach with calm waters, perfect for swimming and relaxation away from the crowds.",
    image: "/images/viga.jpg",
    heroImage: "/images/viga-hero.jpg",
    entranceFee: "Free",
    thingsToDo: ["Swimming", "Beach picnics", "Sunset watching", "Beachcombing", "Relaxation"],
    whatToBring: ["Beach towel", "Sunscreen", "Drinking water", "Picnic supplies", "Swimwear", "Insect repellent"],
    travelTime: "30 minutes by tricycle from Maripipi town center",
    directions:
      "From Maripipi town center, hire a tricycle to Viga Spring. The journey takes about 30 minutes on mostly paved roads. Tricycles are readily available in the town center.",
    gallery: [
      {
        src: "/images/viga-gallery-1.jpg",
        alt: "Sunset at Viga Spring",
      },
      {
        src: "/images/viga-gallery-2.jpg",
        alt: "Palm trees along Viga Spring",
      },
      {
        src: "/images/viga-gallery-3.jpg",
        alt: "Crystal clear waters at Viga Spring",
      },
    ],
  },
  {
    slug: "napo",
    name: "Napo Beach",
    description:
      "A hidden gem with volcanic black sand and stunning rock formations, offering a unique beach experience.",
    image: "/images/napo.jpeg",
    heroImage: "/images/napo-hero.jpeg",
    entranceFee: "PHP 50 per person",
    thingsToDo: ["Swimming", "Rock climbing", "Photography", "Exploring tide pools", "Watching local fishermen"],
    whatToBring: ["Sturdy footwear", "Sunscreen", "Drinking water", "Snacks", "Camera", "First aid kit"],
    travelTime: "45 minutes by motorcycle or tricycle from Maripipi town center",
    directions:
      "From Maripipi town center, hire a motorcycle or tricycle to Napo Beach. The journey takes about 45 minutes on partially rough roads. It's advisable to hire a local guide familiar with the area.",
    gallery: [
      {
        src: "/images/napo-gallery-1.jpg",
        alt: "Swimming Pool at Napo Beach",
      },
      {
        src: "/images/napo-gallery-2.jpg",
        alt: "Rooms at Napo Beach",
      },
      {
        src: "/images/napo-gallery-3.jpg",
        alt: "Entrance ofNapo Beach",
      },
    ],
  },
  {
    slug: "candol",
    name: "Candol Point",
    description:
      "A scenic viewpoint offering panoramic views of the surrounding islands and the perfect spot for sunrise watching.",
    image: "/images/candol.jpg",
    heroImage: "/images/candol-hero.jpg",
    entranceFee: "Free",
    thingsToDo: ["Sunrise watching", "Bird watching", "Photography", "Hiking", "Picnicking"],
    whatToBring: [
      "Hiking shoes",
      "Binoculars",
      "Camera",
      "Drinking water",
      "Light snacks",
      "Light jacket (for early morning visits)",
    ],
    travelTime: "10-15 minutes by a motorcycle",
    directions:
      "From Maripipi town center, follow the trail to Candol Point. The hike takes about 1 hour on a moderately difficult trail. It's recommended to start early in the morning to catch the sunrise and avoid the midday heat.",
    gallery: [
      {
        src: "/images/candol-gallery-1.jpg",
        alt: "Beach view at Candol Point",
      },
      {
        src: "/images/candol-gallery-2.jpg",
        alt: "Sunrise from Candol Point",
      },
      {
        src: "/images/candol-gallery-3.jpg",
        alt: "Hiking trail to Candol Point",
      },
    ],
  },
]

export function getAllDestinations(): Destination[] {
  return destinations
}

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug)
}
