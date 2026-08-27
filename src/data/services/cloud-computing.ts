import { RichServiceData } from './types';

export const cloudComputingService: RichServiceData = {
  slug: "cloud-computing",
  category: "cloud",
  hero: {
    title: "Enterprise Cloud Computing",
    subtitle: "Scalable, Secure, and Accessible Anywhere",
    image: "/images/cloud_data.jpg",
    description: "Transform your business operations with our enterprise-grade cloud computing solutions. From Virtual Private Servers (VPS) to fully managed Private and Hybrid Cloud environments, we deliver infrastructure that scales with your ambition."
  },
  overview: {
    title: "Modernize Your Infrastructure",
    content: [
      "In today's fast-paced digital landscape, relying on on-premise hardware can limit your growth and expose you to unnecessary risks.",
      "Brain Box Solutions provides robust cloud computing architectures designed to reduce local hardware costs, improve accessibility, and ensure your team can work securely from anywhere in the world.",
      "Whether you need a dedicated Private Cloud for compliance, a flexible Hybrid Cloud setup, or powerful VPS hosting, our solutions are tailored to meet your exact business requirements."
    ]
  },
  features: [
    {
      title: "Virtual Private Servers (VPS)",
      description: "Dedicated resources and complete control without the overhead of physical hardware maintenance.",
      icon: "Server"
    },
    {
      title: "Private & Hybrid Cloud",
      description: "Custom cloud architectures combining the security of private infrastructure with the flexibility of public clouds.",
      icon: "Cloud"
    },
    {
      title: "Anywhere Access",
      description: "Empower your remote and distributed teams with secure, high-speed access to company resources globally.",
      icon: "Globe"
    },
    {
      title: "Infinite Scalability",
      description: "Instantly scale your compute, storage, and memory up or down based on real-time business demands.",
      icon: "Maximize"
    }
  ],
  benefits: [
    {
      title: "Reduced Hardware Costs",
      description: "Eliminate expensive upfront capital expenditures on physical servers and reduce ongoing maintenance costs."
    },
    {
      title: "Enhanced Reliability",
      description: "Benefit from enterprise-grade redundancy and 99.9% uptime guarantees for your critical workloads."
    },
    {
      title: "Streamlined Management",
      description: "Focus on your core business while our experts manage, monitor, and optimize your cloud infrastructure."
    }
  ],
  useCases: [
    {
      title: "Application Hosting",
      description: "Deploy business-critical applications in a high-performance environment.",
      icon: "AppWindow"
    },
    {
      title: "Data Storage & Processing",
      description: "Handle massive datasets with scalable storage and powerful compute instances.",
      icon: "Database"
    },
    {
      title: "Disaster Recovery",
      description: "Maintain off-site replicas of your infrastructure for rapid failover.",
      icon: "Shield"
    }
  ],
  specifications: [
    {
      label: "Architecture",
      value: "Private, Public, & Hybrid Cloud"
    },
    {
      label: "Compute & Storage",
      value: "Custom Configuration Available"
    },
    {
      label: "Network Security",
      value: "Enterprise Firewalls & DDoS Protection"
    },
    {
      label: "Uptime SLA",
      value: "99.9% Guaranteed"
    }
  ],
  faq: [
    {
      question: "What is the difference between Private and Hybrid Cloud?",
      answer: "A Private Cloud is dedicated exclusively to your business, offering maximum security and control. A Hybrid Cloud combines your private infrastructure with public cloud resources, allowing you to scale dynamically when demand spikes."
    },
    {
      question: "How does cloud computing reduce costs?",
      answer: "By migrating to the cloud, you eliminate the need to purchase, power, and maintain expensive local servers. You shift from a capital expense model to an operational expense model, paying only for the resources you use."
    },
    {
      question: "Is our data secure in the cloud?",
      answer: "Absolutely. We implement enterprise-grade encryption, advanced firewalls, and rigorous access controls to ensure your data is significantly more secure than typical on-premise solutions."
    }
  ],
  cta: {
    title: "Ready to Move to the Cloud?",
    description: "Contact our cloud architects today to design an infrastructure that perfectly aligns with your business goals.",
    buttonText: "Schedule a Consultation"
  }
};
