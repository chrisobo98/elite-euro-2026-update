export const business = {
  name: 'Elite Euro Motors',
  tagline: 'European Car Care. No Guesswork. No Pressure.',
  domain: 'eliteeuromotors.com',
  url: 'https://eliteeuromotors.com',
  phoneDisplay: '(321) 527-1563',
  phoneHref: 'tel:+13215271563',
  email: 'service@eliteeuromotors.com',
  address: {
    street: '505 Roper Pkwy',
    city: 'Ocoee',
    state: 'FL',
    zip: '34761',
    full: '505 Roper Pkwy, Ocoee, FL 34761',
  },
  serviceArea: ['Ocoee', 'Winter Garden', 'West Orange County', 'western Orlando'],
  primaryBrands: ['BMW', 'Mercedes-Benz'],
  hours: [
    { day: 'Monday', time: '8:00 AM – 5:00 PM' },
    { day: 'Tuesday', time: '8:00 AM – 5:00 PM' },
    { day: 'Wednesday', time: '8:00 AM – 5:00 PM' },
    { day: 'Thursday', time: '8:00 AM – 5:00 PM' },
    { day: 'Friday', time: '8:00 AM – 5:00 PM' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' },
  ],
  shopmonkeyUrl:
    'https://app.shopmonkey.cloud/public/quote-request/19ee1675-94fe-441b-ad71-094d436b55b2',
  ga4Id: 'G-X1SSD7Q4G7',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=505+Roper+Pkwy+Ocoee+FL+34761',
  googleMapsEmbed:
    'https://www.google.com/maps?q=505+Roper+Pkwy,+Ocoee,+FL+34761&output=embed',
} as const;

export type ServiceCategory = {
  slug: string;
  title: string;
  short: string;
  description: string;
  points: string[];
  image: string;
};

export const services: ServiceCategory[] = [
  {
    slug: 'diagnostics',
    title: 'European Vehicle Diagnostics',
    short: 'Advanced scan tools and brand-specific diagnostics for BMW & Mercedes-Benz.',
    description:
      'Modern European vehicles report a tremendous amount of information through their onboard systems. We use brand-specific diagnostic equipment to read those signals accurately, so the next step is based on evidence rather than a guess.',
    points: [
      'Engine, transmission, and chassis fault codes',
      'Battery and electrical system testing',
      'Drivability and warning-light investigation',
      'Clear written explanation of findings',
    ],
    image:
      'https://images.pexels.com/photos/4116172/pexels-photo-4116172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'bmw',
    title: 'BMW Service & Repair',
    short: 'Specialized maintenance and repair for BMW cars and SAVs.',
    description:
      'From scheduled maintenance to more involved repairs, we help BMW owners keep their vehicles running the way they should — without the dealership service counter. Familiar with common BMW concerns across multiple model lines.',
    points: [
      'Oil service and condition-based service items',
      'Brake, rotor, and pad replacement',
      'Cooling system and gasket repairs',
      'Suspension, steering, and chassis components',
    ],
    image:
      'https://images.pexels.com/photos/13058788/pexels-photo-13058788.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'mercedes-benz',
    title: 'Mercedes-Benz Service & Repair',
    short: 'Maintenance and repair for Mercedes-Benz cars and SUVs.',
    description:
      'Mercedes-Benz vehicles reward consistent, attentive maintenance. We help owners stay ahead of service items and address concerns as they arise, with clear explanations of what is happening and why.',
    points: [
      'Service A and Service B items',
      'Brake components and fluid service',
      'Electrical and warning-light diagnosis',
      'Suspension and ride-quality concerns',
    ],
    image:
      'https://images.pexels.com/photos/12066299/pexels-photo-12066299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'factory-maintenance',
    title: 'Factory-Scheduled Maintenance',
    short: 'Stay on top of your vehicle’s recommended service intervals.',
    description:
      'European vehicles are built around a maintenance schedule. We help you follow the schedule that applies to your vehicle and driving habits, and we keep clear records so nothing falls through the cracks.',
    points: [
      'Interval-based service planning',
      'Fluid and filter services',
      'Inspection items by mileage',
      'Personalized maintenance timeline',
    ],
    image:
      'https://images.pexels.com/photos/8985452/pexels-photo-8985452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'brake-repair',
    title: 'Brake Repair',
    short: 'Pads, rotors, fluids, and brake diagnostics for European vehicles.',
    description:
      'Brake performance matters on any vehicle, and European braking systems have specific service requirements. We inspect, explain, and repair — and we are clear about what is urgent versus what can be planned for.',
    points: [
      'Pad and rotor replacement',
      'Brake fluid flush and service',
      'Brake warning diagnosis',
      'Honest priority guidance',
    ],
    image:
      'https://images.pexels.com/photos/6870300/pexels-photo-6870300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'engine-diagnostics',
    title: 'Engine Diagnostics',
    short: 'Find the real cause of check-engine and drivability concerns.',
    description:
      'A warning light can mean many things. We test before we recommend, then explain what we found in plain language so you can decide with confidence.',
    points: [
      'Misfire and rough-running diagnosis',
      'Sensor and emission-system testing',
      'Oil leak identification',
      'Plain-language findings report',
    ],
    image:
      'https://images.pexels.com/photos/4116207/pexels-photo-4116207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'oil-fluid-services',
    title: 'Oil & Fluid Services',
    short: 'Quality fluids and correct intervals for European engines.',
    description:
      'European engines have specific oil and fluid specifications. We use products that meet those specifications and follow appropriate intervals — not a one-size-fits-all approach.',
    points: [
      'Engine oil and filter service',
      'Coolant, brake, and transmission fluids',
      'Correct specification products',
      'Interval tracking',
    ],
    image:
      'https://images.pexels.com/photos/8985465/pexels-photo-8985465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'suspension-steering',
    title: 'Suspension & Steering',
    short: 'Ride, handling, and steering concerns diagnosed and repaired.',
    description:
      'European vehicles are known for how they drive. When the ride or steering changes, we identify the source — worn bushings, components, or alignment-related issues — and explain your options.',
    points: [
      'Suspension component inspection',
      'Steering and handling diagnosis',
      'Bushing and link replacement',
      'Alignment referral when needed',
    ],
    image:
      'https://images.pexels.com/photos/34337558/pexels-photo-34337558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export type ArticleSummary = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
};

export const articles: ArticleSummary[] = [
  {
    slug: 'bmw-maintenance-as-your-vehicle-ages',
    title: 'BMW Maintenance: What to Expect as Your Vehicle Ages',
    excerpt:
      'A practical look at the maintenance items BMW owners tend to encounter over time, and how planning ahead helps you avoid surprises.',
    category: 'Maintenance',
    readTime: '6 min read',
    date: '2026-09-12',
  },
  {
    slug: 'independent-repair-vs-dealership',
    title: 'European Auto Repair vs. Dealership Service: What Should You Consider?',
    excerpt:
      'Factors worth weighing when choosing between an independent specialist and the dealership — and why the right answer depends on your situation.',
    category: 'Buying Guide',
    readTime: '7 min read',
    date: '2026-09-28',
  },
  {
    slug: 'understanding-your-inspection-report',
    title: 'Understanding Your Vehicle’s Inspection Report: What Needs Attention Now?',
    excerpt:
      'How to read an inspection report with confidence, including the difference between urgent repairs and items that can be planned for.',
    category: 'Ownership',
    readTime: '5 min read',
    date: '2026-10-10',
  },
];
