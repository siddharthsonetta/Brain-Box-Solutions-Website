import { RichServiceData } from './types';

export const linuxDedicatedServersService: RichServiceData = {
  slug: "linux-dedicated-servers",
  category: "cloud",
  hero: {
    title: "Linux Dedicated Servers",
    subtitle: "Enterprise-grade performance, unmatched stability, and absolute control.",
    image: "/images/server_rack.jpg",
    description: "Empower your mission-critical applications with robust, bare-metal Linux dedicated servers. Experience unparalleled customization, enhanced security, and the flexibility of the open-source ecosystem tailored by Brain Box Solutions."
  },
  overview: {
    title: "Why Choose Our Linux Dedicated Servers?",
    content: [
      "When your enterprise demands high computing power and steadfast reliability, our Linux Dedicated Servers deliver.",
      "Benefit from a fully isolated bare-metal environment giving you complete access to CPU, RAM, and storage resources without the noisy neighbor effect. Whether you are hosting high-traffic websites, managing large databases, or running intensive containerized applications, our servers are engineered to perform.",
      "Brain Box Solutions provides enterprise-grade infrastructure with support for major Linux distributions, ensuring maximum compatibility with LAMP/LEMP stacks, Docker, and other leading open-source technologies."
    ]
  },
  features: [
    {
      title: "Root Access & Complete Control",
      description: "Gain full root-level server access to configure your system exactly as your workloads require.",
      icon: "Terminal"
    },
    {
      title: "Bare-Metal Performance",
      description: "Harness 100% of the server's processing power with dedicated CPU, RAM, and ultra-fast NVMe storage.",
      icon: "Cpu"
    },
    {
      title: "Advanced Security Architecture",
      description: "Built-in DDoS protection, custom firewall rules, and hardened OS configurations to keep your data safe.",
      icon: "Shield"
    },
    {
      title: "Developer-Friendly Ecosystem",
      description: "Optimized for modern dev tools, LAMP/LEMP environments, and containerization like Docker and Kubernetes.",
      icon: "Code"
    },
    {
      title: "High Availability Infrastructure",
      description: "Hosted in Tier III/IV data centers with redundant power, cooling, and premium network blending.",
      icon: "Server"
    }
  ],
  benefits: [
    {
      title: "Unmatched Stability",
      description: "Linux is renowned for its reliability. Enjoy maximum uptime for your most critical enterprise applications."
    },
    {
      title: "Cost-Effective Scaling",
      description: "Leverage open-source software to eliminate licensing costs while maintaining enterprise-level performance and support."
    },
    {
      title: "Tailored to Your Needs",
      description: "From hardware selection to OS configuration, every aspect of your server is customizable to your exact specifications."
    }
  ],
  useCases: [
    {
      title: "High-Traffic Web Hosting",
      description: "Host demanding web applications and e-commerce platforms with optimized LAMP or LEMP stacks.",
      icon: "Server"
    },
    {
      title: "Container & Microservices",
      description: "Deploy robust Docker or Kubernetes clusters with the performance of dedicated hardware.",
      icon: "Code"
    },
    {
      title: "Big Data & Database Hosting",
      description: "Run complex MySQL, PostgreSQL, or NoSQL databases requiring high IOPS and large memory footprints.",
      icon: "Cpu"
    }
  ],
  specifications: [
    {
      label: "Operating System",
      value: "Ubuntu, CentOS, Debian, AlmaLinux, Rocky Linux"
    },
    {
      label: "Hardware",
      value: "Custom Configuration Available"
    },
    {
      label: "Bandwidth",
      value: "1Gbps / 10Gbps unmetered options available"
    },
    {
      label: "Storage",
      value: "Enterprise SSD & NVMe Options"
    }
  ],
  faq: [
    {
      question: "Which Linux distributions do you support?",
      answer: "We support a wide range of popular distributions, including Ubuntu, Debian, CentOS, AlmaLinux, and Rocky Linux. If you require a specific OS, we can typically accommodate it."
    },
    {
      question: "Do I get root access to my server?",
      answer: "Yes, all our Linux Dedicated Servers come with full root SSH access, allowing you complete administrative control over the server environment."
    },
    {
      question: "Are these servers managed or unmanaged?",
      answer: "We offer both self-managed (unmanaged) options for teams with in-house sysadmins, and fully managed solutions where Brain Box Solutions handles patching, monitoring, and maintenance."
    },
    {
      question: "Can I run Docker on my dedicated server?",
      answer: "Absolutely. Our bare-metal servers are highly optimized for containerization, making them perfect for Docker and Kubernetes deployments."
    }
  ],
  cta: {
    title: "Deploy Your Linux Dedicated Server Today",
    description: "Get the raw power and extreme flexibility your enterprise applications deserve.",
    buttonText: "Configure Your Server"
  }
};
