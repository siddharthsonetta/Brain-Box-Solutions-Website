import { RichServiceData } from './types';

export const windowsDedicatedServersService: RichServiceData = {
  slug: "windows-dedicated-servers",
  category: "cloud",
  hero: {
    title: "Windows Dedicated Servers",
    subtitle: "Enterprise-grade performance in a trusted Microsoft ecosystem.",
    image: "/images/server_rack.jpg",
    description: "Empower your business with fully customizable, high-performance Windows Dedicated Servers. Seamlessly integrate with Active Directory, Microsoft SQL Server, and IIS for your most demanding enterprise workloads."
  },
  overview: {
    title: "Uncompromising Power & Control",
    content: [
      "Our Windows Dedicated Servers offer you the ultimate in computing power and administrative control. Whether you're running complex web applications, managing large-scale databases, or hosting remote workspaces, a dedicated Windows environment ensures optimal performance without the \"noisy neighbor\" effect of shared hosting.",
      "Backed by the latest Intel and AMD processors and configured to your exact specifications, Brain Box Solutions provides the reliability, security, and scalability that modern enterprises demand."
    ]
  },
  features: [
    {
      title: "Full Administrator Access",
      description: "Gain complete control over your server environment with full Remote Desktop (RDP) and Administrator privileges.",
      icon: "MonitorPlay"
    },
    {
      title: "Microsoft Ecosystem Integration",
      description: "Native support for IIS, MS SQL Server, ASP.NET, and seamless Active Directory integration for simplified identity management.",
      icon: "Server"
    },
    {
      title: "Enterprise-Grade Hardware",
      description: "Custom Configuration Available for CPUs, RAM, and NVMe SSD storage to meet your precise workload requirements.",
      icon: "Cpu"
    },
    {
      title: "Advanced Security",
      description: "Protect your data with Windows Server's built-in security features, hardware firewalls, and isolated network environments.",
      icon: "Shield"
    }
  ],
  benefits: [
    {
      title: "Unmatched Performance",
      description: "Dedicated resources guarantee consistent high performance and minimal latency for mission-critical applications."
    },
    {
      title: "Ultimate Flexibility",
      description: "Install custom software, configure bespoke security policies, and manage server roles tailored to your exact business needs."
    },
    {
      title: "Enhanced Reliability",
      description: "Enterprise hardware and redundant network infrastructure provide maximum uptime and stability for your operations."
    }
  ],
  useCases: [
    {
      title: "Database Hosting",
      description: "Host resource-intensive MS SQL Server databases with high-speed I/O and dedicated processing power.",
      icon: "HardDrive"
    },
    {
      title: "Enterprise Web Hosting",
      description: "Deploy large-scale ASP.NET applications and corporate websites using IIS on a dedicated infrastructure.",
      icon: "MonitorPlay"
    },
    {
      title: "Remote Desktop Services",
      description: "Provide secure, high-performance virtual desktops for your remote workforce through Windows RDS.",
      icon: "Users"
    }
  ],
  specifications: [
    {
      label: "Processor",
      value: "Custom Configuration Available"
    },
    {
      label: "RAM",
      value: "Custom Configuration Available"
    },
    {
      label: "Storage",
      value: "Custom Configuration Available (NVMe/SSD/HDD)"
    },
    {
      label: "Operating System",
      value: "Windows Server (2019, 2022)"
    }
  ],
  faq: [
    {
      question: "What level of access do I have to the server?",
      answer: "You receive full Administrator access via Remote Desktop (RDP), allowing you complete control to install software, configure settings, and manage security."
    },
    {
      question: "Can I upgrade my server resources later?",
      answer: "Yes, our Windows Dedicated Servers offer scalable options. You can upgrade RAM, storage, and even processing power as your business requirements grow."
    },
    {
      question: "Is licensing for Windows Server included?",
      answer: "We provide comprehensive options for Windows Server licensing. We can include it with your server package or assist you with bringing your own valid licenses."
    }
  ],
  cta: {
    title: "Ready to deploy your Windows Dedicated Server?",
    description: "Contact our enterprise specialists today to architect a custom server configuration tailored to your specific workloads.",
    buttonText: "Request a Custom Quote"
  }
};
