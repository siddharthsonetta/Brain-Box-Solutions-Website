export interface Partner {
  id: string;
  name: string;
  role: string;
}

export const partners: Partner[] = [
  {
    id: "tally",
    name: "Tally Solutions",
    role: "Authorized Cloud Accounting Partner"
  },
  {
    id: "hp",
    name: "HP Enterprise",
    role: "Hardware & Server Partner"
  },
  {
    id: "fortinet",
    name: "Fortinet",
    role: "Cyber Security & Firewall Provider"
  },
  {
    id: "dell",
    name: "Dell Technologies",
    role: "Core Infrastructure Solutions"
  },
  {
    id: "quickheal",
    name: "Quick Heal",
    role: "Endpoint Protection & Security"
  },
  {
    id: "lenovo",
    name: "Lenovo Group",
    role: "Client Compute & Node Systems"
  }
];
