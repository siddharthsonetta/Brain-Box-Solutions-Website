export interface ServicePlan {
  name: string;
  price: string;
  features: string[];
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  advantages: { title: string; desc: string }[];
  plans: ServicePlan[];
  accentColor: string;
  category: "cloud" | "business-apps" | "backup-continuity" | "security-support";
  image?: string;
}

export const companyInfo = {
  name: "Brain Box Solutions",
  legalName: "Brain Box Solutions",
  tagline: "Enterprise Cloud Infrastructure & IT Solutions",
  phone: "+91 98202 46622",
  phoneFormatted: "+91 98202 46622",
  email: "info@brainboxsolutions.net",
  supportHours: "Proactive Technical Support",
  address: {
    mall: "LG-13, Xth Central Mall",
    street: "Mahavir Nagar, Kandivali West",
    city: "Mumbai",
    state: "Maharashtra",
    zip: "400067",
    fullAddress: "LG-13, Xth Central Mall, Mahavir Nagar, Kandivali West, Mumbai, Maharashtra 400067",
  },
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8967026725227!2d72.84365737599026!3d19.200762982295627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b738cffffff%3A0xa19bf9cc2b17a1e0!2sXth%20Central%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  whatsappUrl: "https://wa.me/919820246622",
  socials: {
    facebook: "https://www.facebook.com/people/Brain-Box-Solutions/100048065002696/",
  },
  globalSla: "Enterprise Uptime Focus",
};

export const homepageContent = {
  hero: {
    badge: "Enterprise IT & Cloud Hosting",
    title: "The Backbone of Modern Business Infrastructure",
    subheadline: "Secure, scalable, and high-performance cloud infrastructure tailored for ambitious enterprises. Elevate your operations with our premium managed server solutions and seamless business application hosting.",
    primaryCta: "Explore Cloud Offerings",
    secondaryCta: "Consult an Architect",
  },
  stats: [], // Removed fake stats
  whyChooseUs: {
    badge: "The Brain Box Advantage",
    title: "High-Performance Architecture Built for Trust",
    description: "We deliver enterprise-grade cloud environments that bridge the gap between uncompromising security and limitless scalability. Your team focuses on growth while we handle the infrastructure.",
    features: [
      {
        title: "Secure Facilities",
        description: "State-of-the-art data centers providing redundancy, ultra-low latency, and uncompromising physical and digital security for your critical data."
      },
      {
        title: "Enterprise Security",
        description: "Active mitigations, managed firewalls, and isolated virtual networks to protect your most sensitive records."
      },
      {
        title: "Expert Engineering Support",
        description: "Direct access to our systems engineers. No robotic queues—get rapid, decisive responses to keep your business running smoothly."
      },
      {
        title: "Instant Scalability",
        description: "Seamlessly scale compute power, storage, and user allocations to meet fluctuating enterprise demands without downtime."
      },
      {
        title: "Continuous Continuity",
        description: "Automated snapshot scheduling, disaster recovery protocols, and hybrid cloud replication ensuring your business never stops."
      },
      {
        title: "Cost-Optimized IT",
        description: "Eliminate the capital expenditure of on-premise hardware and transition to a predictable, highly efficient operational expense model."
      }
    ]
  },
  ctaSection: {
    badge: "Consultation Desk",
    title: "Architect Your Cloud Future Today",
    description: "Connect with our cloud engineers to design a custom infrastructure solution that accelerates your enterprise.",
  }
};

export const aboutPageContent = {
  badge: "Corporate Profile",
  title: "Empowering Enterprises with Limitless Cloud Infrastructure.",
  overviewCard: {
    title: "Company Overview",
    description: "Brain Box Solutions is a premier IT consulting and enterprise cloud hosting provider. We architect, deploy, and manage sophisticated cloud environments, enabling businesses to operate with unprecedented security and scale."
  },
  missionCard: {
    title: "Our Mission",
    description: "To deliver zero-compromise, reliable cloud hosting and disaster recovery solutions that eliminate IT friction, protect critical records, and allow organizations to focus purely on innovation."
  },
  visionCard: {
    title: "Our Vision",
    description: "To be the definitive standard for enterprise cloud architecture, empowering businesses to access, scale, and secure their digital operations from anywhere, at any time."
  },
  stats: [], // Removed fake stats
  principles: {
    badge: "Why Trust Us",
    title: "Our Core Architecting Principles",
    description: "The foundational standards guiding our engineering, security, and deployment practices.",
    items: [
      {
        title: "Absolute Data Security",
        desc: "Strict firewall rules, hardened database perimeters, and isolated virtual networks forming an impenetrable fortress for your financial records.",
      },
      {
        title: "Uncompromising Performance",
        desc: "Leveraging high-speed SSDs, dedicated compute cores, and redundant uplinks to ensure fast operations.",
      },
      {
        title: "Customized Engineering",
        desc: "We don't do 'one-size-fits-all'. We build custom server topologies and hybrid gateways perfectly aligned with your unique workflows.",
      },
      {
        title: "Dedicated Support",
        desc: "Direct access to qualified cloud architects. We treat your infrastructure as if it were our own.",
      },
    ]
  }
};

export const contactPageContent = {
  badge: "Consultation Desk",
  title: "Connect With Our Cloud Architects",
  description: "Whether you need complex data migration, custom ERP hosting, or enterprise disaster recovery—our engineers are ready to design your solution.",
};

import { services as newServices } from "./services";
export const services = newServices;
