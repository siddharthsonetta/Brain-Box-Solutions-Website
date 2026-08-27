import { RichServiceData } from './types';

export const securityServicesService: RichServiceData = {
  slug: "security-services",
  category: "security-support",
  hero: {
    title: "Enterprise Security Services",
    subtitle: "Comprehensive managed security solutions to protect your organization.",
    image: "/images/cybersecurity.jpg",
    description: "Comprehensive managed security solutions to protect your organization's digital assets, data, and infrastructure from evolving cyber threats."
  },
  overview: {
    title: "Proactive Defense",
    content: [
      "In today's complex threat landscape, a reactive security posture is no longer sufficient. Our Enterprise Security Services provide proactive, multi-layered protection for your entire IT ecosystem.",
      "From managed firewalls and zero-trust access implementation to continuous intrusion detection and 24/7 monitoring, Brain Box Solutions delivers the peace of mind you need to focus on your core business."
    ]
  },
  features: [
    {
      title: "Managed Firewalls & Network Security",
      description: "Advanced Next-Generation Firewalls (NGFW) deployed and continuously managed.",
      icon: "Shield"
    },
    {
      title: "Intrusion Detection & Prevention (IDS/IPS)",
      description: "Real-time monitoring of network traffic to detect and block anomalous activities.",
      icon: "Eye"
    },
    {
      title: "Zero Trust Secure Access",
      description: "Implementation of strict identity verification and least-privilege access controls.",
      icon: "Lock"
    }
  ],
  benefits: [
    {
      title: "Minimize Risk",
      description: "Minimize the risk of data breaches and costly downtime."
    },
    {
      title: "Compliance",
      description: "Ensure compliance with industry-specific data protection regulations."
    },
    {
      title: "Visibility",
      description: "Gain visibility and control over your entire network environment."
    }
  ],
  specifications: [
    {
      label: "Monitoring",
      value: "24x7x365 SOC Support"
    },
    {
      label: "Configuration",
      value: "Custom Configuration Available"
    }
  ],
  faq: [
    {
      question: "How do you handle security incident responses?",
      answer: "Our dedicated Security Operations Center (SOC) team immediately investigates any detected anomalies."
    }
  ],
  cta: {
    title: "Secure Your Business Today",
    description: "Get in touch to assess your current security posture.",
    buttonText: "Request Security Audit"
  }
};
