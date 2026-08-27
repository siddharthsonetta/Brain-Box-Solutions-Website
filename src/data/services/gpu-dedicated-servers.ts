import { RichServiceData } from './types';

export const gpuDedicatedServersService: RichServiceData = {
  slug: "gpu-dedicated-servers",
  category: "cloud",
  hero: {
    title: "GPU Dedicated Servers",
    subtitle: "High-Performance Compute for AI, ML, and Rendering",
    image: "/images/server_rack.jpg",
    description: "Accelerate your most demanding workloads with our state-of-the-art GPU dedicated servers. Powered by cutting-edge technology, these servers are engineered for parallel processing and compute-intensive tasks."
  },
  overview: {
    title: "Unleash Unmatched Computing Power",
    content: [
      "Brain Box Solutions offers robust GPU dedicated servers tailored for businesses that require immense computational power. Whether you are running complex artificial intelligence models, rendering high-resolution graphics, or crunching large datasets, our GPU servers deliver exceptional performance and reliability.",
      "Built on an enterprise-grade infrastructure, our servers ensure maximum uptime, low latency, and secure processing, all fully customizable to meet your specific business requirements."
    ]
  },
  features: [
    {
      title: "High-End GPUs",
      description: "Equipped with the latest GPU technology for rapid data processing and rendering.",
      icon: "Cpu"
    },
    {
      title: "Root Access & Control",
      description: "Gain complete administrative control over your server environment to customize it fully.",
      icon: "Lock"
    },
    {
      title: "Robust Security",
      description: "Advanced security protocols, including DDoS protection and firewalls, to safeguard your workloads.",
      icon: "Shield"
    },
    {
      title: "Seamless Scalability",
      description: "Easily upgrade your server resources as your computational needs grow.",
      icon: "Layers"
    },
    {
      title: "Ultra-Fast Storage",
      description: "NVMe and SSD storage options ensuring fast data retrieval and high throughput.",
      icon: "HardDrive"
    },
    {
      title: "24/7 Monitoring",
      description: "Proactive server monitoring and maintenance for near 100% uptime.",
      icon: "Zap"
    }
  ],
  benefits: [
    {
      title: "Accelerated Workloads",
      description: "Reduce processing times for machine learning, deep learning, and video rendering significantly."
    },
    {
      title: "Enhanced Security",
      description: "Enterprise-grade protection keeps your sensitive data safe from external threats and cyberattacks."
    },
    {
      title: "Customizable Architecture",
      description: "Tailor your server hardware and software configurations to perfectly align with your specific use case."
    },
    {
      title: "Cost-Effective Performance",
      description: "Achieve superior processing capabilities without the massive overhead of managing an on-premise data center."
    }
  ],
  useCases: [
    {
      title: "Artificial Intelligence & ML",
      description: "Train complex machine learning and AI models faster with parallel processing.",
      icon: "Cpu"
    },
    {
      title: "3D Rendering & Animation",
      description: "Render high-resolution graphics, VFX, and animations smoothly and efficiently.",
      icon: "Video"
    },
    {
      title: "Big Data Analytics",
      description: "Process and analyze massive datasets in real-time to drive business insights.",
      icon: "Globe"
    }
  ],
  specifications: [
    {
      label: "Processor",
      value: "Custom Configuration Available"
    },
    {
      label: "GPU Model",
      value: "Custom Configuration Available"
    },
    {
      label: "RAM",
      value: "Custom Configuration Available"
    },
    {
      label: "Storage",
      value: "Custom Configuration Available"
    },
    {
      label: "Bandwidth",
      value: "Custom Configuration Available"
    },
    {
      label: "Operating System",
      value: "Linux, Windows, Ubuntu, CentOS, Custom"
    }
  ],
  faq: [
    {
      question: "What are the advantages of choosing Brain Box Solutions for GPU servers?",
      answer: "Our infrastructure ensures you get the best security, frequent backups, instant tech support, and cutting-edge technology customized to give your business an edge."
    },
    {
      question: "Can these servers host multiple applications?",
      answer: "Yes, you can host multiple applications and allocate server resources precisely according to your business needs."
    },
    {
      question: "Do I have full control over my dedicated server?",
      answer: "You are completely free to customize and configure your dedicated server. We offer complete root access and administrative control so you can manage all commands and files."
    },
    {
      question: "Can I customize my own configuration?",
      answer: "Absolutely. We provide pre-configured options, but they can be fully customized by our technical team or your in-house team to meet your exact specifications."
    },
    {
      question: "What security features are included?",
      answer: "Our plans include uncompromising security features like DDoS protection, robust firewalls, and continuous monitoring to ensure your data is always secure."
    }
  ],
  cta: {
    title: "Supercharge Your Workloads",
    description: "Ready to harness the power of GPU dedicated servers? Contact our experts to customize the perfect solution for your business.",
    buttonText: "Contact Us Today"
  }
};
