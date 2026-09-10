export const heritageSites = [
  {
    slug: 'hundred-islands',
    name: 'Hundred Islands National Park',
    location: 'Alaminos City, Pangasinan',
    category: 'Natural Heritage',
    image: '/images/hundred-islands.webp',
    shortDescription: 'A celebrated cluster of islands and islets in Lingayen Gulf, known for scenic viewpoints, beaches, and island-hopping activities.',
    description: 'Hundred Islands National Park is one of Pangasinan’s best-known tourism destinations. The showcase presents it as a natural-heritage destination using reusable, accessible components and a static page generated at build time.',
    highlights: ['Island hopping', 'View decks', 'Swimming areas', 'Marine scenery']
  },
  {
    slug: 'bolinao-lighthouse',
    name: 'Cape Bolinao Lighthouse',
    location: 'Bolinao, Pangasinan',
    category: 'Built Heritage',
    image: '/images/bolinao-lighthouse.webp',
    shortDescription: 'A historic lighthouse in Bolinao that serves as a recognizable landmark overlooking the western coast of Pangasinan.',
    description: 'Cape Bolinao Lighthouse represents Pangasinan’s built heritage. Its showcase page emphasizes concise information, semantic structure, keyboard-friendly navigation, and responsive presentation.',
    highlights: ['Historic landmark', 'Coastal views', 'Photography', 'Cultural interest']
  },
  {
    slug: 'balungao-hot-spring',
    name: 'Balungao Hot Spring',
    location: 'Balungao, Pangasinan',
    category: 'Natural Attraction',
    image: '/images/balungao-hot-spring.webp',
    shortDescription: 'A mountain-side leisure destination associated with warm spring water, nature, and outdoor recreation in eastern Pangasinan.',
    description: 'Balungao Hot Spring is presented as a nature and recreation destination. It uses the same reusable template as the other heritage entries, demonstrating maintainability through component-based architecture.',
    highlights: ['Hot spring pools', 'Nature setting', 'Family recreation', 'Mountain views']
  },
  {
    slug: 'tondaligan-beach',
    name: 'Tondaligan Beach',
    location: 'Dagupan City, Pangasinan',
    category: 'Coastal Heritage',
    image: '/images/tondaligan-beach.webp',
    shortDescription: 'A popular public beach and recreational destination in Dagupan City, known for its shoreline, open spaces, and seaside activities.',
    description: 'Tondaligan Beach adds a coastal destination from Dagupan City to the digital showcase. The entry follows the same data-driven detail-page template so new destinations can be added without creating a new page component.',
    highlights: ['Beach recreation', 'Seaside walks', 'Family outings', 'Coastal scenery']
  },
  {
    slug: 'manaoag-church',
    name: 'Manaoag Church',
    location: 'Manaoag, Pangasinan',
    category: 'Cultural Heritage',
    image: '/images/manaoag-church.webp',
    shortDescription: 'A well-known religious and cultural destination in Manaoag that is recognized for its historic church and devotional tradition.',
    description: 'Manaoag Church represents the cultural and religious heritage dimension of Pangasinan. Its page demonstrates how the same accessible content structure can present built and cultural heritage alongside natural attractions.',
    highlights: ['Historic church', 'Religious heritage', 'Cultural tourism', 'Architecture']
  },
  {
    slug: 'san-fabian-beach',
    name: 'San Fabian Beach',
    location: 'San Fabian, Pangasinan',
    category: 'Coastal Heritage',
    image: '/images/san-fabian-beach.webp',
    shortDescription: 'A long sandy coastline in San Fabian offering a scenic seaside setting for swimming, relaxation, and local recreation.',
    description: 'San Fabian Beach expands the showcase to another coastal destination in Pangasinan. Like the other entries, it is represented by structured data and a generated static route for fast delivery.',
    highlights: ['Sandy shoreline', 'Swimming', 'Sunset views', 'Local recreation']
  }
];

export function getHeritageSite(slug) {
  return heritageSites.find((site) => site.slug === slug);
}
