import { RichServiceData } from './types';

export const instantTechnicalSupportService: RichServiceData = {
  slug: "instant-technical-support",
  category: "security-support",
  hero: {
    title: "Instant Technical Support",
    subtitle: "Rapid resolution for your mission-critical systems",
    image: "/images/server_rack.jpg",
    description: "Experience unparalleled IT support with direct access to experienced engineers. We minimize downtime and keep your business running smoothly, exactly when you need it."
  },
  overview: {
    title: "Why Choose Our Instant Technical Support?",
    content: [
      "In today's fast-paced business environment, every minute of downtime can cost you revenue and customer trust. Brain Box Solutions provides immediate, expert technical support to resolve issues before they escalate.",
      "Our dedicated helpdesk operates with a priority response model, ensuring that you have direct access to senior engineers during business hours, with options for extended coverage."
    ]
  },
  features: [
    {
      title: "Rapid Response Time",
      description: "Get answers and solutions quickly with our guaranteed SLAs and prioritized routing.",
      icon: "Clock"
    },
    {
      title: "Direct Engineer Access",
      description: "Skip the tier-1 runaround and speak directly with certified systems engineers.",
      icon: "Phone"
    },
    {
      title: "Remote Diagnostics",
      description: "Fast and secure remote troubleshooting to resolve most issues without an onsite visit.",
      icon: "Monitor"
    },
    {
      title: "Comprehensive Assistance",
      description: "From simple configuration questions to complex outage resolutions, we've got you covered.",
      icon: "LifeBuoy"
    }
  ],
  benefits: [
    {
      title: "Minimized Downtime",
      description: "Quick resolution means your employees stay productive and your operations remain uninterrupted."
    },
    {
      title: "Cost Efficiency",
      description: "Avoid the high costs of maintaining a full-time, in-house specialized support staff."
    },
    {
      title: "Peace of Mind",
      description: "Rest easy knowing that expert help is always just a call or click away when a crisis hits."
    }
  ],
  useCases: [
    {
      title: "Network Outages",
      description: "Immediate triage and repair of connectivity issues to restore critical communications.",
      icon: "Activity"
    },
    {
      title: "Software Failures",
      description: "Quick fixes for application crashes and environment misconfigurations.",
      icon: "Terminal"
    }
  ],
  howItWorks: [
    {
      step: 1,
      title: "Report an Issue",
      description: "Submit a ticket or call our direct hotline when you experience a technical problem."
    },
    {
      step: 2,
      title: "Immediate Triage",
      description: "Your request is immediately routed to the appropriate engineering team based on priority."
    },
    {
      step: 3,
      title: "Rapid Resolution",
      description: "Our engineers resolve the issue through remote access or on-site intervention if necessary."
    }
  ],
  specifications: [
    {
      label: "Support Tiers",
      value: "Custom Configuration Available"
    },
    {
      label: "Coverage Hours",
      value: "Custom Configuration Available"
    },
    {
      label: "SLA Commitments",
      value: "Custom Configuration Available"
    }
  ],
  faq: [
    {
      question: "How fast can I expect a response?",
      answer: "Response times vary by your chosen SLA tier, but critical issues are typically addressed within minutes."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Standard plans cover business hours, but 24/7 extended coverage is available as a custom configuration."
    },
    {
      question: "Can you help with proprietary software?",
      answer: "Our engineers are experienced in a wide range of enterprise software, and we can coordinate with your software vendors for proprietary platforms."
    }
  ],
  cta: {
    title: "Need Help Right Now?",
    description: "Don't let technical issues stall your business. Connect with our expert support team today.",
    buttonText: "Contact Support"
  }
};
