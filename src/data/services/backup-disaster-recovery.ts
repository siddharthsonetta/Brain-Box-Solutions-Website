import { RichServiceData } from './types';

export const backupDisasterRecoveryService: RichServiceData = {
  slug: "backup-disaster-recovery",
  category: "backup-continuity",
  hero: {
    title: "Backup & Disaster Recovery",
    subtitle: "Enterprise-grade data protection to keep your business running.",
    image: "/images/cybersecurity.jpg",
    description: "Ensure continuous operations with robust backup solutions and rapid disaster recovery plans tailored for modern enterprises."
  },
  overview: {
    title: "Comprehensive Business Continuity",
    content: [
      "In today's digital landscape, data loss is not an option. Brain Box Solutions provides resilient, automated backup strategies and seamless disaster recovery to protect your critical business assets.",
      "Our end-to-end BCDR solutions guarantee minimal data loss and lightning-fast recovery times, empowering you to maintain continuity no matter the disruption."
    ]
  },
  features: [
    {
      title: "Automated Cloud Backups",
      description: "Set-and-forget backup protocols with immutable storage in secure cloud environments.",
      icon: "Cloud"
    },
    {
      title: "Rapid Failover",
      description: "Minimize downtime with instant failover to secondary servers or cloud environments.",
      icon: "Server"
    },
    {
      title: "Ransomware Protection",
      description: "Air-gapped backups and continuous monitoring to thwart encryption attempts and data extortion.",
      icon: "Shield"
    },
    {
      title: "Continuous Data Protection",
      description: "Capture changes in real-time to achieve incredibly low Recovery Point Objectives (RPO).",
      icon: "RefreshCw"
    }
  ],
  benefits: [
    {
      title: "Minimized Downtime",
      description: "Aggressive RTO limits business interruption, keeping your team productive."
    },
    {
      title: "Regulatory Compliance",
      description: "Meet stringent data retention and protection standards with confidence."
    },
    {
      title: "Cost Efficiency",
      description: "Avoid the catastrophic financial impact of data loss with proactive protection."
    }
  ],
  useCases: [
    {
      title: "Financial Institutions",
      description: "Guarantee transaction integrity and immediate recovery of sensitive financial data.",
      icon: "Building"
    },
    {
      title: "Healthcare Providers",
      description: "Maintain uninterrupted access to patient records, ensuring compliance with HIPAA.",
      icon: "Heart"
    }
  ],
  howItWorks: [
    {
      step: 1,
      title: "Assessment",
      description: "We evaluate your current infrastructure to identify critical data and single points of failure."
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Design a customized BCDR architecture that meets your specific RPO and RTO goals."
    },
    {
      step: 3,
      title: "Deployment & Testing",
      description: "Implement the solution and conduct rigorous disaster recovery drills to ensure readiness."
    }
  ],
  specifications: [
    {
      label: "Recovery Point Objective (RPO)",
      value: "Custom Configuration Available"
    },
    {
      label: "Recovery Time Objective (RTO)",
      value: "Custom Configuration Available"
    },
    {
      label: "Storage Architecture",
      value: "Custom Configuration Available"
    }
  ],
  faq: [
    {
      question: "What is the difference between RPO and RTO?",
      answer: "RPO (Recovery Point Objective) is the maximum acceptable amount of data loss measured in time, whereas RTO (Recovery Time Objective) is the targeted duration to restore operations."
    },
    {
      question: "How often should backups be performed?",
      answer: "We recommend a continuous or high-frequency backup schedule based on the criticality of your data. We tailor the frequency to align with your business needs."
    },
    {
      question: "Is my backup data secure?",
      answer: "Yes, all backups are encrypted at rest and in transit, with options for immutable storage to protect against ransomware."
    }
  ],
  cta: {
    title: "Secure Your Future",
    description: "Don't leave your data to chance. Schedule a consultation to build a bulletproof disaster recovery plan.",
    buttonText: "Get Protected"
  }
};
