export const BUSINESS = {
  name: "Parvesh Upholstery Ltd",
  shortName: "Parvesh",
  tagline: "Furniture, reborn in fabric and light.",
  address: "Silvertown Road, Hayes UB3 3BS",
  city: "West London",
  phone: "+44 20 0000 0000",
  phoneHref: "tel:+442000000000",
  whatsapp: "https://wa.me/440000000000",
  email: "hello@parveshupholstery.co.uk",
  emailHref: "mailto:hello@parveshupholstery.co.uk",
  hours: "Mon–Sat · 9:00–18:00",
  reviewsGoogle: "4.9",
  reviewsCount: 87,
  established: 2009,
};

export const NAV_LINKS = [
  { label: "Home", href: "/", exact: true },
  { label: "Services", href: "/services", exact: false },
  { label: "Gallery", href: "/gallery", exact: false },
  { label: "About", href: "/about", exact: false },
  { label: "Reviews", href: "/reviews", exact: false },
  { label: "Blog", href: "/blog", exact: false },
  { label: "Contact", href: "/contact", exact: false },
];

export const STATS = [
  { value: 15, suffix: "+", label: "Years of craft" },
  { value: 2000, suffix: "+", label: "Pieces restored" },
  { value: 48, suffix: "hr", label: "Quote response" },
  { value: 100, suffix: "%", label: "Hand-finished" },
];

export const SERVICES_PREVIEW = [
  {
    title: "Domestic",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=70",
    desc: "Sofas, corner suites, armchairs, dining chairs, headboards, ottomans and antique restoration — all reupholstered by hand.",
    href: "/services#domestic",
  },
  {
    title: "Commercial",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=70",
    desc: "Restaurant banquettes, office seating, hotel headboards, salon waiting areas and FR contract fabrics for high-traffic spaces.",
    href: "/services#commercial",
  },
  {
    title: "Vehicle",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=70",
    desc: "Car seats, taxi fleets, van bench covers, campervan cushions and motorcycle seating — trimmed to fit and built to last.",
    href: "/services#vehicle",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Inspect",
    desc: "We look at the piece, its frame, springs and fabric. Photos or an on-site visit — whatever suits you.",
  },
  {
    step: "02",
    title: "Specify",
    desc: "We guide you through fabric, foam density and finish. A clear quote with no hidden extras.",
  },
  {
    step: "03",
    title: "Restore",
    desc: "Strip-down, recutting, sewing, stapling and finishing — executed in the workshop with care.",
  },
  {
    step: "04",
    title: "Return",
    desc: "Delivered back to you reupholstered, refreshed and ready for another decade of use.",
  },
];

export const SERVICE_CATEGORIES = [
  {
    id: "domestic",
    title: "Domestic",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=70",
    intro:
      "Give your home a second life. Every domestic piece is stripped, rebuilt and reupholstered in our Hayes workshop.",
    items: [
      "Sofa & corner unit recovering",
      "Armchair & wingback restoration",
      "Dining chair seat upholstery",
      "Headboards & bed frames",
      "Ottomans, benches & footstools",
      "Foam replacement & cushion refill",
      "Spring & frame repair",
      "Leather cleaning & colour restoration",
      "Antique & vintage recovery",
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=70",
    intro:
      "Contract-grade upholstery for restaurants, offices, hotels and clinics — durable fabrics that survive heavy use and still look premium.",
    items: [
      "Restaurant chairs & banquettes",
      "Booths & seating clusters",
      "Office & reception seating",
      "Hotel headboards & beds",
      "Salon & clinic waiting areas",
      "FR contract fabrics (UK fire rated)",
      "Bespoke bar & lounge seating",
      "On-site reupholstery for large runs",
    ],
  },
  {
    id: "vehicle",
    title: "Vehicle",
    intro:
      "Passenger and utility seating re-trimmed to OEM quality. Perfect for taxi fleets, trades and enthusiasts alike.",
    items: [
      "Car seats & upholstery",
      "Taxi & private-hire fleets",
      "Van bench seat covers",
      "Van partition & carpet trim",
      "Motorcycle seat re-trim",
      "Campervan & motorhome cushions",
      "Boat & caravan seating",
    ],
  },
  {
    id: "workshop",
    title: "Workshop",
    intro:
      "Our full-service Hayes workshop handles everything from a single armchair to complete hotel fits — under one roof.",
    items: [
      "Full strip-down & rebuild",
      "Rigorous frame & spring inspection",
      "Precision fabric cutting & sewing",
      "Stapling, piping & buttoning",
      "Foam sculpting & density fitting",
      "Final inspection & QC check",
    ],
  },
  {
    id: "onsite",
    title: "On-site",
    intro:
      "For larger commercial projects, our team comes to you. Commercial-grade furniture is reupholstered in place with minimal disruption.",
    items: [
      "Commercial site surveys & measuring",
      "Booth & banquette fitting on-site",
      "Wall panel upholstery",
      "Project-managed multi-site fit-outs",
      "Zero-disruption working hours",
    ],
  },
];

export const GALLERY_ITEMS = [
  {
    title: "Corner sofa recovery",
    category: "Domestic",
    tag: "Velvet · Hayes",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=70",
    wide: true,
  },
  {
    title: "Dining set seats",
    category: "Domestic",
    tag: "Linen · Southall",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=70",
    wide: false,
  },
  {
    title: "Made-to-measure headboard",
    category: "Domestic",
    tag: "Bouclé · Uxbridge",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=70",
    wide: false,
  },
  {
    title: "Restaurant banquette",
    category: "Commercial",
    tag: "FR fabric · Hounslow",
    image:
      "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=800&q=70",
    wide: true,
  },
  {
    title: "Taxi seat re-trim",
    category: "Vehicle",
    tag: "Commercial vinyl · Hayes",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=70",
    wide: false,
  },
  {
    title: "Lounge seating refresh",
    category: "Commercial",
    tag: "Wool blend · Ealing",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=70",
    wide: false,
  },
  {
    title: "Antique wingback restore",
    category: "Domestic",
    tag: "Heritage linen · Wembley",
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800&q=70",
    wide: false,
  },
  {
    title: "Office chair re-trim",
    category: "Commercial",
    tag: "Contract mesh · Slough",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=70",
    wide: false,
  },
];

export const GALLERY_FILTERS = ["All", "Domestic", "Commercial", "Vehicle"];

export const TESTIMONIALS = [
  {
    name: "Priya S.",
    area: "Hayes",
    service: "Sofa recovering",
    rating: 5,
    text: "Sent a photo on WhatsApp, got a quote the same afternoon. The sofa came back better than the day we bought it. Genuinely beautiful work.",
    date: "Aug 2026",
  },
  {
    name: "Daniel M.",
    area: "Hounslow",
    service: "Restaurant banquettes",
    rating: 5,
    text: "They reupholstered 24 booth seats for our restaurant over a weekend. Zero disruption, immaculate finish, and the FR fabric passed inspection first time.",
    date: "Jul 2026",
  },
  {
    name: "Ayesha K.",
    area: "Uxbridge",
    service: "Headboard",
    rating: 5,
    text: "The attention to detail is exceptional. They talked me through fabric choices patiently and the finished headboard looks like it cost triple what we paid.",
    date: "Jun 2026",
  },
  {
    name: "Tom R.",
    area: "Ealing",
    service: "Taxi seat re-trim",
    rating: 5,
    text: "My taxi fleet gets heavy daily use. These seats have been re-trimmed twice with Parvesh and they always come back tough and tidy. Reliable.",
    date: "Jun 2026",
  },
  {
    name: "Fatima B.",
    area: "Southall",
    service: "Antique armchair",
    rating: 4,
    text: "Restored my grandmother's armchair frame and all. They respected the original character while making it feel brand new. Delighted with the result.",
    date: "May 2026",
  },
  {
    name: "James W.",
    area: "Wembley",
    service: "Office seating",
    rating: 5,
    text: "Twenty office chairs re-upholstered in-house while we kept working. Professional, punctual, and the finish is superb. Highly recommend.",
    date: "Apr 2026",
  },
];

export const BLOG_POSTS = [
  {
    title: "Velvet vs. bouclé: choosing fabric that lasts",
    category: "Tips",
    date: "Aug 2026",
    excerpt:
      "Sofa fabric is a balance of feel, durability and upkeep. Here's how to pick between the two most popular premium choices of the moment.",
    readTime: "5 min",
  },
  {
    title: "Five signs your sofa needs reupholstering (not replacing)",
    category: "Industry",
    date: "Jul 2026",
    excerpt:
      "Reupholstery is often a fraction of the cost of a new piece — and better for the planet. Learn the tell-tale signs your frame is worth saving.",
    readTime: "4 min",
  },
  {
    title: "From the workshop bench: a day in the Hayes atelier",
    category: "Workshop",
    date: "Jun 2026",
    excerpt:
      "What actually happens when your sofa arrives at the workshop? We walk through strip-down, rebuild and finish, hour by hour.",
    readTime: "7 min",
  },
  {
    title: "Foam density explained: nobody benefits from squishy",
    category: "Tips",
    date: "May 2026",
    excerpt:
      "That brand-new 'super soft' sofa sags within a year. Why foam density and high-resilience fill matter more than aesthetics.",
    readTime: "6 min",
  },
];

export const COVERAGE_AREAS = [
  "Hayes",
  "Southall",
  "Hounslow",
  "Uxbridge",
  "West Drayton",
  "Slough",
  "Ealing",
  "Wembley",
  "Greenford",
  "Northolt",
  "Ickenham",
  "Wider West London",
];
