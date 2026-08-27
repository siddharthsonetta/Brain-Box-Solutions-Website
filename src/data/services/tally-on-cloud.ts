import { RichServiceData } from './types';

export const tallyOnCloudService: RichServiceData = {
  slug: "tally-on-cloud",
  category: "business-apps",
  hero: {
    title: "Tally on Cloud Solutions",
    subtitle: "Seamless Accounting from Anywhere, Anytime",
    image: "/images/cloud_data.jpg",
    description: "Elevate your business with secure and scalable Tally Prime cloud hosting. Manage your finances, inventory, and compliance from any device without the hassle of maintaining on-premise servers."
  },
  overview: {
    title: "Why Choose Tally on Cloud?",
    content: [
      "Brain Box Solutions provides enterprise-grade Tally on Cloud services tailored for modern businesses. By migrating your Tally ERP 9 or Tally Prime to the cloud, you enable real-time collaboration for your accounting team across multiple branches and locations.",
      "Experience high-performance computing, automated backups, and bank-grade security to protect your sensitive financial data from ransomware and hardware failures. Focus on your business growth while we manage your IT infrastructure."
    ]
  },
  features: [
    {
      title: "Anywhere, Any Device Access",
      description: "Access your Tally data securely from Windows, Mac, Linux, or mobile devices using just a web browser or remote desktop.",
      icon: "Globe"
    },
    {
      title: "Automated Daily Backups",
      description: "Never lose your financial data. We perform automated daily backups with flexible retention policies for disaster recovery.",
      icon: "HardDrive"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Protect your data with end-to-end encryption, robust firewalls, and continuous monitoring against malware and ransomware.",
      icon: "Shield"
    },
    {
      title: "High Performance & Uptime",
      description: "Enjoy ultra-low latency and guaranteed high availability, ensuring your accounting operations never face downtime.",
      icon: "Zap"
    },
    {
      title: "Full TDL Support",
      description: "Seamlessly run all your custom Tally Definition Language (TDL) customizations on our cloud infrastructure.",
      icon: "Cloud"
    },
    {
      title: "Multi-User Collaboration",
      description: "Enable your accountants, auditors, and management to work concurrently on the same company data in real-time.",
      icon: "Users"
    }
  ],
  benefits: [
    {
      title: "Zero IT Maintenance",
      description: "Eliminate the need for expensive local servers, UPS, and IT staff. We handle all server maintenance, updates, and troubleshooting."
    },
    {
      title: "Cost Efficiency",
      description: "Move from a CAPEX model to a flexible OPEX model. Pay only for the resources you need and scale up as your team grows."
    },
    {
      title: "Enhanced Productivity",
      description: "Provide your team with 24/7 access to financial data, accelerating reporting, GST filing, and decision-making processes."
    },
    {
      title: "Data Privacy & Compliance",
      description: "Keep your data localized and compliant with data protection regulations on our highly secure virtual private servers."
    }
  ],
  useCases: [
    {
      title: "Multi-Branch Enterprises",
      description: "Centralize accounting data for companies with multiple offices, retail stores, or warehouses for unified financial reporting.",
      icon: "Server"
    },
    {
      title: "CA Firms & Auditors",
      description: "Allow Chartered Accountants to access client data remotely for real-time auditing and compliance checks.",
      icon: "Lock"
    },
    {
      title: "Remote Workforces",
      description: "Empower your finance and HR teams to work securely from home without compromising data integrity.",
      icon: "Users"
    }
  ],
  howItWorks: [
    {
      step: 1,
      title: "Assessment & Planning",
      description: "We analyze your current Tally setup, user count, and data size to recommend the optimal cloud architecture."
    },
    {
      step: 2,
      title: "Secure Migration",
      description: "Our experts seamlessly migrate your existing Tally data, licenses, and TDLs to our secure cloud servers with zero data loss."
    },
    {
      step: 3,
      title: "Onboarding & Access",
      description: "Users are provided with secure login credentials and guides to start accessing Tally from their preferred devices immediately."
    }
  ],
  specifications: [
    {
      label: "Compute",
      value: "Custom Configuration Available"
    },
    {
      label: "Storage",
      value: "Custom Configuration Available"
    },
    {
      label: "OS Environment",
      value: "Windows Server"
    },
    {
      label: "Backup Frequency",
      value: "Daily Automated"
    }
  ],
  faq: [
    {
      question: "Are Tally on Cloud's TDLs supported?",
      answer: "Yes, our Tally on Cloud supports all custom TDLs. We recommend verifying your specific TDLs with our technical team during migration for seamless integration."
    },
    {
      question: "On my Tally Cloud Server, can I store other data?",
      answer: "Yes, you can store other business files (Excel, Word, PDFs) on virtual private or dedicated servers to keep all your financial documents centralized."
    },
    {
      question: "Is it possible to run Tally on my private cloud?",
      answer: "Absolutely. We offer private cloud infrastructure that provides complete control, enhanced scalability, and seamless integration with your other internal IT systems."
    },
    {
      question: "How does Tally on Cloud boost my business?",
      answer: "It streamlines your financial processes by providing 24/7 remote access for your team. This improves real-time inventory management, faster payment processing, and efficient multi-location collaboration."
    },
    {
      question: "Is my financial data secure in the cloud?",
      answer: "Yes. We implement enterprise-grade security measures including firewalls, anti-virus, anti-ransomware protection, and restricted access protocols to ensure absolute data privacy."
    }
  ],
  cta: {
    title: "Ready to take your accounting to the cloud?",
    description: "Connect with Brain Box Solutions today to get a customized, secure, and high-performance Tally on Cloud setup for your business.",
    buttonText: "Request a Quote"
  }
};
