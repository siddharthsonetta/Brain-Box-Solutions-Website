import { RichServiceData } from './types';

export const tsprintTsscanService: RichServiceData = {
  slug: "tsprint-tsscan",
  category: "business-apps",
  hero: {
    title: "Remote Desktop TSPrint & TSScan Solutions",
    subtitle: "Experience seamless remote printing and scanning for your organization.",
    image: "/images/cloud_data.jpg",
    description: "Brain Box Solutions provides state-of-the-art TSPrint and TSScan solutions to optimize your remote desktop environment, eliminating frustrating driver issues and improving workflow efficiency."
  },
  overview: {
    title: "Why Choose Our TSPrint & TSScan Solutions?",
    content: [
      "Managing printers and scanners in a remote desktop environment can be incredibly frustrating. Print spooler crashes, missing drivers, and slow transfer times often plague remote users.",
      "With our TSPrint and TSScan solutions, we eliminate these headaches completely. By utilizing advanced virtualization technology, we allow users to print and scan directly from their remote sessions using their local devices, without requiring any driver installations on the terminal server.",
      "Enjoy high-speed, secure, and hassle-free document management tailored to your specific business needs."
    ]
  },
  features: [
    {
      title: "Driverless Printing",
      description: "No need to install or manage printer drivers on your remote servers, ensuring a more stable and crash-free environment.",
      icon: "Printer"
    },
    {
      title: "Seamless Remote Scanning",
      description: "Map your local TWAIN or WIA compliant scanners to the remote desktop seamlessly without complex configurations.",
      icon: "Scan"
    },
    {
      title: "High-Speed Compression",
      description: "Advanced compression algorithms ensure fast print jobs and scan transfers, even over slow or unstable network connections.",
      icon: "Zap"
    },
    {
      title: "Secure Data Transfer",
      description: "All print and scan jobs are securely encrypted between the local client and the remote server.",
      icon: "Shield"
    }
  ],
  benefits: [
    {
      title: "Reduced IT Overhead",
      description: "Say goodbye to endless driver installations, spooler resets, and compatibility troubleshooting."
    },
    {
      title: "Enhanced User Experience",
      description: "Users can print to their default local printers and scan documents just as if they were working locally."
    },
    {
      title: "Wide Compatibility",
      description: "Compatible with any RDP client, supporting diverse hardware across Windows, macOS, and Linux environments."
    }
  ],
  useCases: [
    {
      title: "Healthcare Clinics",
      description: "Scan patient records locally and save them directly to a centralized EMR system running on the remote desktop.",
      icon: "Heart"
    },
    {
      title: "Accounting Firms",
      description: "Print invoices and financial reports directly from remote accounting software to local office printers without lag.",
      icon: "Briefcase"
    }
  ],
  specifications: [
    {
      label: "Client Compatibility",
      value: "Windows, macOS, Linux"
    },
    {
      label: "Scanner Support",
      value: "All TWAIN and WIA compliant scanners"
    },
    {
      label: "Server Requirements",
      value: "Custom Configuration Available"
    },
    {
      label: "Network",
      value: "Optimized for Low-Bandwidth Environments"
    }
  ],
  faq: [
    {
      question: "Do I need to install printer drivers on the remote server?",
      answer: "No, our TSPrint solution is completely driverless on the server side, utilizing your local printer drivers instead."
    },
    {
      question: "Which scanners are supported by TSScan?",
      answer: "TSScan supports all TWAIN and WIA compliant scanners, meaning practically any standard document scanner will work seamlessly."
    },
    {
      question: "Will this slow down my remote desktop session?",
      answer: "Not at all. Our solutions utilize high-ratio compression to ensure fast printing and scanning without degrading your remote desktop performance."
    }
  ],
  cta: {
    title: "Ready to streamline your remote workflows?",
    description: "Contact Brain Box Solutions today to learn how our TSPrint and TSScan solutions can enhance your remote desktop experience.",
    buttonText: "Contact Us Today"
  }
};
