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
  category: "cloud" | "software";
}

export const companyInfo = {
  name: "Brain Box Solutions",
  legalName: "Brain Box Solutions",
  tagline: "Tally on Cloud & Enterprise Infrastructure Solutions",
  phone: "+91 98202 46622",
  phoneFormatted: "+91 98202 46622",
  email: "info@brainboxsolutions.net",
  supportHours: "24/7/365 Proactive Support",
  address: {
    mall: "LG-20, Xth Central Mall",
    street: "Mahavir Nagar, Kandivali West",
    city: "Mumbai",
    state: "Maharashtra",
    zip: "400067",
    fullAddress: "LG-20, Xth Central Mall, Mahavir Nagar, Kandivali West, Mumbai, Maharashtra 400067",
  },
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8967026725227!2d72.84365737599026!3d19.200762982295627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b738cffffff%3A0xa19bf9cc2b17a1e0!2sXth%20Central%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  whatsappUrl: "https://wa.me/919820246622",
  socials: {
    facebook: "https://www.facebook.com/people/Brain-Box-Solutions/100048065002696/",
    linkedin: "#",
    twitter: "#",
  },
  globalSla: "99.9% - 99.99% Uptime Guarantee",
};

export const homepageContent = {
  hero: {
    badge: "Enterprise IT & Cloud Hosting",
    title: "Host, Secure & Scale Your Business Operations",
    subheadline: "Secure cloud hosting for Tally, Busy, and Marg ERP. Streamline remote teamwork, secure data with automated daily backups, and eliminate local server overhead.",
    primaryCta: "Explore Cloud Offerings",
    secondaryCta: "Request Live Demo",
  },
  stats: [
    { value: 500, suffix: "+", label: "Active Businesses" },
    { value: 99.99, suffix: "%", label: "Uptime SLA" },
    { value: 24, suffix: "/7/365", label: "Security Monitoring" },
    { value: 0, suffix: "", label: "Data Leak Incidents" }
  ],
  whyChooseUs: {
    badge: "Business ROI",
    title: "High-Performance Architecture Built for Trust",
    description: "We bridge the gap between local speed and cloud-scale flexibility, securing systems and managing updates so your team can focus on growth.",
    features: [
      {
        title: "Certified Experts",
        description: "Professional systems engineers design optimized private networks and subnets custom tailored for your ERP load."
      },
      {
        title: "Enterprise Security",
        description: "Advanced firewall layers, active DDoS mitigations, database encryption, and isolated client credentials protect records."
      },
      {
        title: "Rapid Support",
        description: "Direct engineering contact. Get swift response on WhatsApp, Phone, and Email without waiting in robotic queues."
      },
      {
        title: "Scalable Solutions",
        description: "Scale RAM cores, disk storage, database quotas, and user license allocations instantly as your organization grows."
      },
      {
        title: "Proven Reliability",
        description: "Enjoy consistent database speeds with a 99.99% hardware infrastructure uptime guarantee and zero data leaks."
      },
      {
        title: "Cost Effective Infrastructure",
        description: "Eliminate expensive local physical server procurement, electric overheads, hard drive crash risks, and maintenance."
      }
    ]
  },
  ctaSection: {
    badge: "Consultation Desk",
    title: "Speak with an IT Consultant Today",
    description: "Fill out the form below or contact us on WhatsApp to set up a free trial demo.",
  }
};

export const aboutPageContent = {
  badge: "Corporate Profile",
  title: "Enterprise Cloud Systems for Modern Businesses.",
  overviewCard: {
    title: "Company Overview",
    description: "Brain Box Solutions is a premier IT consulting and cloud hosting provider serving clients in Mumbai, Dubai, and globally. We migrate legacy offline workflows (Tally, Busy, Marg ERP) to optimized, secure cloud networks."
  },
  missionCard: {
    title: "Our Mission",
    description: "To deliver reliable, secure, and lightning-fast virtual private hosting that boosts collaboration, protects records with automated daily backups, and eliminates local hardware overhead."
  },
  visionCard: {
    title: "Our Vision",
    description: "To lead enterprise cloud accounting and software infrastructure, empowering businesses to access critical financial databases from anywhere, anytime, on any device."
  },
  stats: [
    { value: 500, suffix: "+", label: "Servers Migrated" },
    { value: 99.99, suffix: "%", label: "Infrastructure Uptime" },
    { value: 15, suffix: "+ Yrs", label: "Expert IT Experience" },
    { value: 0, suffix: "", label: "Data Recovery Failures" },
  ],
  principles: {
    badge: "Why Trust Us",
    title: "Our Core Architecting Principles",
    description: "How we approach hosting, networking, and support compliance for corporate structures.",
    items: [
      {
        title: "Data Security",
        desc: "We enforce strict firewall rules, restricted database logins, and isolated virtual networks to protect financial records.",
      },
      {
        title: "Performance Uptime",
        desc: "Our servers leverage next-gen SSD drives, guaranteed CPU cycles, and redundant network uplinks for fast systems.",
      },
      {
        title: "Custom Engineering",
        desc: "We build custom server configurations, hybrid local-to-cloud gateways, and ERP logic aligned with your workflows.",
      },
      {
        title: "Direct Support",
        desc: "Skip automated robotic queues. Get direct access to qualified systems engineers available over Phone and WhatsApp.",
      },
    ]
  }
};

export const contactPageContent = {
  badge: "Consultation desk",
  title: "Connect With Our Cloud Architects",
  description: "Have questions about server specs, multi-user cloud environments, data migrations, or pricing? Complete the form below.",
};

export const services: Service[] = [
  {
    slug: "tally-on-cloud",
    title: "Tally on Cloud",
    tagline: "Secure, flexible, and lightning-fast cloud accounting for TallyPrime.",
    shortDescription: "Access your offline Tally software from anywhere, anytime, on any device. Easy, low maintenance, and highly secure.",
    description: "Deploy your offline Tally ERP 9 or TallyPrime to secure cloud servers. Allow your accountants, remote teams, and managers to access real-time financial records from any device, anywhere, with zero configuration overhead and automatic backups.",
    accentColor: "blue",
    category: "cloud",
    advantages: [
      {
        title: "Work Anywhere",
        desc: "Just connect to the internet and access your system from anywhere, anytime, on any device (Windows, Mac, iOS, Android)."
      },
      {
        title: "Increase ROI",
        desc: "Boost your business's ROI by enabling instant financial updates and team collaboration."
      },
      {
        title: "Zero Server Cost",
        desc: "Save budget by relying on our professionals to handle server maintenance, updates, and optimization."
      },
      {
        title: "Automated Daily Backups",
        desc: "Reduce operational risk with consistent daily backup plans and premium database encryption."
      }
    ],
    plans: [
      {
        name: "Basic",
        price: "₹800 / month",
        features: ["10GB SSD Space", "Up to 3 Users", "Daily Automated Backups", "Standard Firewall Protection", "99.9% Uptime Guarantee"]
      },
      {
        name: "Standard",
        price: "₹1400 / month",
        features: ["20GB SSD Space", "Up to 8 Users", "Daily Automated Backups", "Advanced Firewall + DDoS Protection", "99.95% Uptime SLA", "Email & Phone Support"]
      },
      {
        name: "Business",
        price: "₹2400 / month",
        features: ["40GB SSD Space", "Unlimited Users", "Dual Server Backups", "Custom Firewall Configurations", "99.99% Dedicated SLA", "24/7 Priority Support"]
      }
    ]
  },
  {
    slug: "busy-on-cloud",
    title: "Busy on Cloud",
    tagline: "Access your Busy Accounting software anywhere, removing geographical hurdles.",
    shortDescription: "A cloud-based accounting platform used for maintaining accounting, inventory, and statutory data with zero downtime.",
    description: "Host your Busy accounting platform on high-performance virtual systems. Access inventory, purchases, sales, POS, and statutory tax compliance documents from home or office simultaneously with zero downtime.",
    accentColor: "indigo",
    category: "cloud",
    advantages: [
      {
        title: "Work From Anywhere",
        desc: "Access your accounting files from home, office, or client sites, using any desktop or mobile device."
      },
      {
        title: "Real-Time Sync",
        desc: "Continuous cloud synchronization ensures your entire team works on the latest financial logs."
      },
      {
        title: "POS & Inventory Access",
        desc: "Manage complex Point of Sale (POS) and inventory workflows in a secure centralized environment."
      },
      {
        title: "Automatic Updates",
        desc: "Never worry about manual software updates or patches; the cloud system handles everything seamlessly."
      }
    ],
    plans: [
      {
        name: "Basic",
        price: "₹800 / month",
        features: ["10GB SSD Space", "Up to 3 Users", "Daily Cloud Sync", "Standard Support", "99.9% Uptime Guarantee"]
      },
      {
        name: "Standard",
        price: "₹1400 / month",
        features: ["20GB SSD Space", "Up to 8 Users", "Daily Backups", "Dedicated RAM/CPU Core", "99.95% Uptime SLA", "Priority Support"]
      },
      {
        name: "Business",
        price: "₹2400 / month",
        features: ["40GB SSD Space", "Unlimited Users", "Hourly Sync Options", "Dedicated IP Address", "99.99% Uptime SLA", "24/7 Direct Call Support"]
      }
    ]
  },
  {
    slug: "marg-on-cloud",
    title: "Marg on Cloud",
    tagline: "Cloud-powered traditional accounting software integrated with modern cloud technology.",
    shortDescription: "Modernize your Marg ERP software with cloud computing to boost efficiency and safeguard server corruption.",
    description: "Bring Marg ERP to a secure cloud database. Enable pharmacies, billing counters, and retail operations across multiple locations to sync inventories in real-time, preventing server crash data losses.",
    accentColor: "sky",
    category: "cloud",
    advantages: [
      {
        title: "Prevent Data Loss",
        desc: "Avoid the risk of losing valuable business data due to local server corruption or system crashes."
      },
      {
        title: "Role-Based Access",
        desc: "Manage access controls to permit specific users to monitor or modify records while hiding sensitive files."
      },
      {
        title: "Multi-Location Sync",
        desc: "Connect multiple retail branches or warehouse databases to a single, secure central server."
      },
      {
        title: "High Performance",
        desc: "Enjoy consistent database speeds even during peak business traffic and sales transactions."
      }
    ],
    plans: [
      {
        name: "Basic",
        price: "₹800 / month",
        features: ["10GB Storage", "Up to 2 Users", "Daily Backup", "99.9% Uptime SLA"]
      },
      {
        name: "Standard",
        price: "₹1400 / month",
        features: ["20GB Storage", "Up to 6 Users", "Daily Backup", "99.95% Uptime SLA", "Email & Chat Support"]
      },
      {
        name: "Business",
        price: "₹2400 / month",
        features: ["40GB Storage", "Unlimited Users", "Real-Time Sync", "99.99% Uptime SLA", "Dedicated Account Manager"]
      }
    ]
  },
  {
    slug: "database-hosting",
    title: "Database Hosting",
    tagline: "Secure and accessible managed database environments for ERP and CRM applications.",
    shortDescription: "Protect and scale your business's most valuable asset—your data—with managed database hosting.",
    description: "Fully-managed secure database nodes designed for high-load platforms like ERP and CRM systems. Features 24/7 security monitoring, custom query optimization, and zero memory latency to prevent slowdowns.",
    accentColor: "cyan",
    category: "cloud",
    advantages: [
      {
        title: "High Availability",
        desc: "Secure, monitored database partitions ensure your business critical systems are always accessible."
      },
      {
        title: "Optimized for High Loads",
        desc: "Designed to handle applications like ERP and CRM that consume massive RAM and require fast query execution."
      },
      {
        title: "Custom Technologies",
        desc: "Choose from major database systems such as MySQL, Microsoft SQL Server, PostgreSQL, and Oracle."
      },
      {
        title: "Continuous Backups",
        desc: "Automated incremental backups protect your database from corruption or accidental deletion."
      }
    ],
    plans: [
      {
        name: "Basic",
        price: "₹800 / month",
        features: ["10GB Storage", "Shared Server Environment", "20 MySQL Databases", "Daily Backups"]
      },
      {
        name: "Standard",
        price: "₹1400 / month",
        features: ["20GB Storage", "Semi-Dedicated Resources", "Unlimited Databases", "Daily Backups + Snapshots", "99.95% SLA"]
      },
      {
        name: "Business",
        price: "₹2400 / month",
        features: ["50GB Storage", "Fully Dedicated Resources", "High Availability Cluster", "Hourly Backup Option", "99.99% Uptime SLA"]
      }
    ]
  },
  {
    slug: "virtual-server",
    title: "Virtual Server",
    tagline: "Dedicated virtualized resources partitioned on top-tier physical hardware.",
    shortDescription: "Get dedicated CPU, RAM, and SSD storage on a virtual private server, completely isolated from other users.",
    description: "Get isolated virtual private servers with dedicated RAM, SSD storage, and CPU cores. Take full control with root access and custom firewall setups without sharing hardware resources.",
    accentColor: "blue",
    category: "cloud",
    advantages: [
      {
        title: "Isolated Resources",
        desc: "You won't have to share your RAM, CPU, or storage with other websites, giving you consistent speed."
      },
      {
        title: "Full Root Access",
        desc: "Configure the operating system, customize firewall policies, and deploy specialized software environments."
      },
      {
        title: "Cost Efficiency",
        desc: "Get the advantages of a dedicated server (isolated resources, custom configs) at a fraction of the cost."
      },
      {
        title: "Enterprise Firewalls",
        desc: "Secure your VPS partitions with customizable rules, anti-DDoS blocks, and private subnets."
      }
    ],
    plans: [
      {
        name: "V1 Core",
        price: "₹800 / month",
        features: ["1 vCPU Core", "2GB RAM", "40GB SSD Space", "1TB Bandwidth", "Root Access", "99.9% Uptime SLA"]
      },
      {
        name: "V2 Core",
        price: "₹1400 / month",
        features: ["2 vCPU Cores", "4GB RAM", "80GB SSD Space", "3TB Bandwidth", "Root Access", "99.95% Uptime SLA"]
      },
      {
        name: "V4 Core",
        price: "₹2400 / month",
        features: ["4 vCPU Cores", "8GB RAM", "160GB SSD Space", "5TB Bandwidth", "Dedicated IP", "99.99% Uptime SLA"]
      }
    ]
  },
  {
    slug: "dedicated-machine",
    title: "Dedicated Machine",
    tagline: "Full, exclusive physical server access with raw compute and maximum performance.",
    shortDescription: "The ultimate hosting option for large websites, e-commerce stores, and high-traffic applications.",
    description: "Lease a physical server dedicated entirely to your company. Ideal for high-traffic websites, large ERP hubs, and complex databases requiring raw processing power and absolute control.",
    accentColor: "indigo",
    category: "cloud",
    advantages: [
      {
        title: "Exclusive Hardware",
        desc: "Zero resource sharing. The entire processing power of the physical CPU and RAM is dedicated to your code."
      },
      {
        title: "Total Configuration Control",
        desc: "Complete control to customize hardware configurations, select operating systems, and add hardware firewalls."
      },
      {
        title: "High-Traffic Capacity",
        desc: "Equipped to handle hundreds of thousands of simultaneous requests, such as large e-commerce stores."
      },
      {
        title: "Anti-DDoS Shielding",
        desc: "Mitigate malicious bandwidth spikes with advanced security filtering on dedicated data lines."
      }
    ],
    plans: [
      {
        name: "Entry Dedicated",
        price: "₹800 / month",
        features: ["4 Cores / 8 Threads", "16GB DDR4 RAM", "480GB SSD Storage", "Unmetered Bandwidth", "1 Dedicated IP", "24/7 Support"]
      },
      {
        name: "Enterprise Core",
        price: "₹1400 / month",
        features: ["8 Cores / 16 Threads", "32GB DDR4 RAM", "960GB SSD Storage", "1Gbps Unmetered Port", "3 Dedicated IPs", "Managed OS & Backups"]
      },
      {
        name: "Ultimate High-Load",
        price: "₹2400 / month",
        features: ["16 Cores / 32 Threads", "64GB DDR4 RAM", "2x 1TB SSD RAID", "10Gbps Uplink Port", "5 Dedicated IPs", "24/7 Priority SLA Response"]
      }
    ]
  },
  {
    slug: "cloud-on-premise",
    title: "Cloud On-Premise",
    tagline: "Bring the power, flexibility, and interface of the cloud into your local office hardware.",
    shortDescription: "Combine local hardware security with the access and features of cloud computing at your location.",
    description: "Deploy web-based cloud environments directly onto your physical office servers. Fulfills strict local data compliance mandates while providing remote-access flexibility.",
    accentColor: "sky",
    category: "cloud",
    advantages: [
      {
        title: "Physical Control",
        desc: "Keep hardware related to cloud services physically located inside your company's building."
      },
      {
        title: "Strict Compliance",
        desc: "Comply with regulatory security rules that forbid hosting financial records outside your local network."
      },
      {
        title: "Ultra Low Latency",
        desc: "Access databases at local gigabit speeds, bypassing web connectivity bandwidth limits."
      },
      {
        title: "Hybrid Backup Sync",
        desc: "Replicate database records to off-site cloud mirrors for complete disaster recovery capability."
      }
    ],
    plans: [
      {
        name: "Standard Setup",
        price: "₹800 / month",
        features: ["Local Server Virtualization Setup", "Secure Local Gateway", "Basic Network Configuration", "Standard Backup Script"]
      },
      {
        name: "Enterprise Hybrid",
        price: "₹1400 / month",
        features: ["High-Availability Local Cluster Setup", "Failover to BrainBox Cloud Hosting", "Active-Directory Integration", "Managed Backups"]
      },
      {
        name: "Custom Datacenter",
        price: "₹2400 / month",
        features: ["Full Private Cloud Deployment", "Hardware Procurement & Setup", "Continuous On-Site Maintenance SLA", "24/7 SOC Setup"]
      }
    ]
  },
  {
    slug: "customized-erp",
    title: "Customized ERP",
    tagline: "Tailored enterprise resource planning software aligned with your unique business workflows.",
    shortDescription: "Integrate and streamline product development, human resources, supply chain, and sales.",
    description: "Custom-built enterprise resource planning systems matching your business workflows. Streamline product design, supply chains, payroll, and warehouse operations under a unified portal.",
    accentColor: "blue",
    category: "software",
    advantages: [
      {
        title: "Perfect Business Alignment",
        desc: "Incorporate features unique to how your business operates, rather than changing processes for software."
      },
      {
        title: "Unified Database",
        desc: "Combine human resources, inventory, supply chain, finance, and client management into one centralized database."
      },
      {
        title: "Custom Modules",
        desc: "Build customized modules for specific industry logic (manufacturing bills, pharmacy batches, tax compliances)."
      },
      {
        title: "Real-Time Reports",
        desc: "View and filter real-time analytics across all departments to support fast decision making."
      }
    ],
    plans: [
      {
        name: "Basic Module",
        price: "₹800 / month",
        features: ["Core Inventory & Sales Module", "Single Location Deployment", "Up to 5 Users", "Standard Updates & Support"]
      },
      {
        name: "Business ERP",
        price: "₹1400 / month",
        features: ["Sales, Inventory, HR, & Accounting Modules", "Multi-Branch Sync", "Up to 25 Users", "Custom Report Dashboards", "Priority Support"]
      },
      {
        name: "Enterprise Suite",
        price: "₹2400 / month",
        features: ["Full ERP Custom Blueprint Development", "Unlimited Users", "API & Third-Party System Integrations", "Dedicated Hosting Environment", "24/7 SLA Support"]
      }
    ]
  }
];
