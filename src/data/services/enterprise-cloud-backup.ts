import { RichServiceData } from './types';

export const enterpriseCloudBackupService: RichServiceData = {
  slug: "enterprise-cloud-backup",
  category: "backup-continuity",
  hero: {
    title: "Enterprise Cloud Backup Solutions",
    subtitle: "Safeguard your data with seamless, automated cloud backups.",
    image: "/images/secure-cloud-backup-journey.png",
    description: "Discover reliable enterprise cloud backup solutions. Ensure business continuity with automated backups, scalable storage, and rapid recovery options tailored to your organizational needs."
  },
  overview: {
    title: "Why File Backup is Critical for Enterprises",
    content: [
      "Data is one of the most valuable assets for an enterprise, and its safety is of the utmost importance. A comprehensive backup strategy acts as a critical contingency plan to recover your data in case of theft, accidental deletion, or corruption.",
      "With Brain Box Solutions' Enterprise Cloud Backup, you avoid business process halts. Our automated cloud storage solutions continuously update any new data across multiple devices seamlessly, keeping your organization resilient and secure."
    ]
  },
  features: [
    {
      title: "Automated Data Protection",
      description: "Set up and forget with automated, continuous backups that protect your critical data without any manual intervention.",
      icon: "Cloud"
    },
    {
      title: "Military-Grade Security",
      description: "Keep your data secure both in transit and at rest with advanced encryption protocols and robust access controls.",
      icon: "Shield"
    },
    {
      title: "Multi-Device Support",
      description: "Effortlessly back up data across servers, workstations, and remote devices into a centralized cloud repository.",
      icon: "HardDrive"
    },
    {
      title: "Rapid Disaster Recovery",
      description: "Minimize downtime with fast restoration capabilities, ensuring you can quickly bounce back from data loss incidents.",
      icon: "Zap"
    }
  ],
  benefits: [
    {
      title: "Business Continuity Assured",
      description: "Prevent catastrophic halts to your operations with a reliable backup strategy that ensures your data is always recoverable."
    },
    {
      title: "Scalable Storage",
      description: "As your enterprise data grows, our cloud backup solutions scale with you, eliminating the need for costly on-premise hardware upgrades."
    },
    {
      title: "Reduced IT Overhead",
      description: "Free up your internal IT team by letting our automated solutions and expert support handle the complexities of daily backups."
    }
  ],
  useCases: [
    {
      title: "Ransomware Recovery",
      description: "Isolate and restore clean versions of your data quickly if your primary systems are compromised by ransomware.",
      icon: "Lock"
    },
    {
      title: "Remote Workforce Protection",
      description: "Ensure that files created by remote employees on their laptops are securely backed up to the corporate cloud automatically.",
      icon: "Globe"
    }
  ],
  diagramImage: "/images/secure-cloud-backup-journey.png",
  howItWorks: [
    {
      step: 1,
      title: "Assessment & Strategy",
      description: "We evaluate your data infrastructure and design a tailored cloud backup strategy that aligns with your business goals."
    },
    {
      step: 2,
      title: "Seamless Integration",
      description: "Our team deploys the backup agents across your devices and servers without disrupting your daily operations."
    },
    {
      step: 3,
      title: "Automated Backups",
      description: "Your data is continuously and securely transmitted to our enterprise cloud vaults."
    },
    {
      step: 4,
      title: "Monitoring & Recovery",
      description: "We proactively monitor backup health and provide rapid restoration tools whenever you need them."
    }
  ],
  specifications: [
    {
      label: "Storage Capacity",
      value: "Custom Configuration Available"
    },
    {
      label: "Encryption Standard",
      value: "AES-256 (In transit and at rest)"
    },
    {
      label: "Data Centers",
      value: "Custom Configuration Available"
    },
    {
      label: "SLA",
      value: "High Availability with Custom Configuration Available"
    }
  ],
  faq: [
    {
      question: "How do I back up my company data?",
      answer: "Your backup strategy involves backing up your company data and ensuring it can be reliably restored. By opting for our Cloud backup solutions, you can automate this entire process. Cloud storage gives you the option to automatically update any new data added across multiple devices."
    },
    {
      question: "Why is file backup critical for enterprises?",
      answer: "Data is one of the most valuable assets for an enterprise and its safety is of the utmost importance. A backup strategy is a contingency plan to recover data in case of theft, deletion, or corruption, avoiding a complete halt of business processes."
    },
    {
      question: "Is my data secure in the cloud?",
      answer: "Absolutely. We utilize state-of-the-art encryption both while your data is being transferred and when it is stored, ensuring unauthorized parties cannot access your sensitive enterprise information."
    }
  ],
  cta: {
    title: "Secure Your Enterprise Data Today",
    description: "Don't wait for a disaster to realize the importance of a robust backup strategy. Contact Brain Box Solutions to deploy your enterprise cloud backup.",
    buttonText: "Get a Backup Consultation"
  }
};
