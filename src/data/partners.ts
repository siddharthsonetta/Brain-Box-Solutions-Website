export interface Partner {
  id: string;
  name: string;
  role: string;
  extension?: string;
}

export const partners: Partner[] = [
  {
    id: "microsoft",
    name: "Microsoft",
    role: "Cloud & OS Partner",
    extension: "svg"
  },
  {
    id: "tally",
    name: "Tally Solutions",
    role: "Authorized Cloud Accounting Partner"
  },
  {
    id: "lenovo",
    name: "Lenovo Group",
    role: "Client Compute & Node Systems"
  }
];
