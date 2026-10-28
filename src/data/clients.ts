export interface Client {
  id: string;
  name: string;
  industry: string;
  logo: string | null;
  verified: boolean;
}

export const clients: Client[] = [
  {
    id: "movietime-cinemas",
    name: "MovieTime Cinemas",
    industry: "Entertainment & Multiplex",
    logo: "/images/clients/movietime-cinemas.png",
    verified: true,
  },
  {
    id: "my-cinemas",
    name: "MY CINEMAS",
    industry: "Cinema Exhibition",
    logo: null,
    verified: false,
  },
  {
    id: "amazon-international",
    name: "Amazon International",
    industry: "Trading & Logistics",
    logo: null,
    verified: false,
  },
  {
    id: "vb-valves",
    name: "VB Valves and Automation Pvt. Ltd.",
    industry: "Industrial Manufacturing",
    logo: "/images/clients/vb-valves.png",
    verified: true,
  },
  {
    id: "updeck-creations",
    name: "Updeck Creations",
    industry: "Packaging & Print Solutions",
    logo: "/images/clients/updeck-creations.png",
    verified: true,
  },
  {
    id: "jalaram-kathiyawadi",
    name: "Jalaram Kathiyawadi",
    industry: "Hospitality & Dining",
    logo: null,
    verified: false,
  },
  {
    id: "osmosis-india",
    name: "Osmosis India Pvt. Ltd.",
    industry: "Water Management & Engineering",
    logo: "/images/clients/osmosis-india.png",
    verified: true,
  },
  {
    id: "delmont",
    name: "Delmont",
    industry: "Commercial Enterprise",
    logo: null,
    verified: false,
  },
  {
    id: "jeshra-instruments",
    name: "Jeshra Instruments",
    industry: "Medical & Precision Equipment",
    logo: "/images/clients/jeshra-instruments.png",
    verified: true,
  },
  {
    id: "classic-vision",
    name: "Classic Vision",
    industry: "Luxury Eyewear & Healthcare",
    logo: "/images/clients/classic-vision.png",
    verified: true,
  },
  {
    id: "sdk",
    name: "SDK",
    industry: "Enterprise Services",
    logo: null,
    verified: false,
  },
  {
    id: "anakia-industries",
    name: "Anakia Industries",
    industry: "Industrial Manufacturing",
    logo: null,
    verified: false,
  },
];

