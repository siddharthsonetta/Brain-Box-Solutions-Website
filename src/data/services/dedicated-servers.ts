import { RichServiceData } from './types';

export const dedicatedServersService: RichServiceData = {
  slug: "dedicated-servers",
  category: "cloud",
  hero: {
    title: "Dedicated Servers",
    subtitle: "Enterprise-Grade Performance and Control",
    image: "/images/server_rack.jpg",
    description: "Experience unparalleled power, security, and flexibility with our bare-metal dedicated servers. Built for business-critical applications, high-traffic websites, and intensive databases."
  },
  overview: {
    title: "Why Choose Our Dedicated Servers?",
    content: [
      "Brain Box Solutions provides state-of-the-art dedicated server hosting that delivers ultimate performance and complete isolation for your most demanding workloads.",
      "With exclusive access to all server resources, you never have to worry about noisy neighbors. Enjoy root access, custom configurations, and seamless scalability to match your business growth."
    ]
  },
  features: [
    {
      title: "Dedicated Resources",
      description: "100% dedicated CPU, RAM, and storage. No resource sharing, ensuring maximum performance for your applications.",
      icon: "Cpu"
    },
    {
      title: "NVMe Storage",
      description: "Lightning-fast NVMe RAID storage for rapid data access and reduced latency.",
      icon: "HardDrive"
    },
    {
      title: "High Bandwidth",
      description: "Generous bandwidth allowances to handle high-traffic spikes without compromising speed.",
      icon: "Zap"
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade security measures to protect your infrastructure from unauthorized access and DDoS attacks.",
      icon: "Shield"
    },
    {
      title: "OS Flexibility",
      description: "Full support for a wide range of operating systems including various distributions of Linux and Windows Server.",
      icon: "Server"
    },
    {
      title: "24/7 Technical Assistance",
      description: "Our expert support team is available around the clock to ensure your server runs smoothly at all times.",
      icon: "Globe"
    }
  ],
  benefits: [
    {
      title: "Maximum Performance",
      description: "Run intensive applications without bottlenecks thanks to completely isolated hardware resources."
    },
    {
      title: "Complete Control",
      description: "Full root/administrator access allows you to configure the server exactly to your specific requirements."
    },
    {
      title: "Reliability",
      description: "Built on enterprise-grade hardware designed for continuous operation and maximum uptime."
    }
  ],
  useCases: [
    {
      title: "Business-Critical ERP Systems",
      description: "Host complex Enterprise Resource Planning (ERP) software that requires high compute power and strict data isolation.",
      icon: "Server"
    },
    {
      title: "High-Traffic Websites",
      description: "Ensure your e-commerce platform or media site remains fast and responsive during massive traffic surges.",
      icon: "Globe"
    },
    {
      title: "Large-Scale Databases",
      description: "Manage extensive databases with lightning-fast query responses utilizing dedicated NVMe storage.",
      icon: "HardDrive"
    }
  ],
  specifications: [
    {
      label: "Processor",
      value: "Custom Configuration Available"
    },
    {
      label: "Memory (RAM)",
      value: "Custom Configuration Available"
    },
    {
      label: "Storage",
      value: "NVMe SSD (Custom Configuration Available)"
    },
    {
      label: "Bandwidth",
      value: "High Capacity / Unmetered Options Available"
    },
    {
      label: "Operating System",
      value: "Linux (CentOS, Ubuntu, Debian) & Windows Server"
    }
  ],
  faq: [
    {
      question: "What is a dedicated server?",
      answer: "A dedicated server is a type of hosting where an entire physical server is leased to a single client. Unlike shared hosting or VPS, you don't share processing power, memory, or storage with anyone else."
    },
    {
      question: "Can I upgrade my server hardware later?",
      answer: "Yes, our dedicated servers offer custom configurations, and you can request hardware upgrades such as additional RAM or storage as your business needs grow."
    },
    {
      question: "Do you provide managed support for dedicated servers?",
      answer: "We offer 24/7 technical assistance to help ensure your infrastructure remains online and performs optimally."
    },
    {
      question: "Which operating systems are supported?",
      answer: "We support a wide variety of operating systems, including multiple Linux distributions and Windows Server editions. You also have the flexibility to install custom software."
    }
  ],
  cta: {
    title: "Ready to scale your infrastructure?",
    description: "Contact our team to design a custom dedicated server solution tailored to your exact business requirements.",
    buttonText: "Get a Quote"
  }
};
