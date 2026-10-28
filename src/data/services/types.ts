export interface RichServiceData {
  slug: string;
  category: "cloud" | "business-apps" | "backup-continuity" | "security-support";
  hero: {
    title: string;
    subtitle: string;
    image: string;
    description: string;
  };
  overview: {
    title: string;
    content: string[];
  };
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  useCases?: {
    title: string;
    description: string;
    icon: string;
  }[];
  diagramImage?: string;
  howItWorks?: {
    step: number;
    title: string;
    description: string;
  }[];
  specifications?: {
    label: string;
    value: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}
