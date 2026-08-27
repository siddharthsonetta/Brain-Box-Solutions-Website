import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud & Technology Solutions | Brain Box Solutions",
  description: "Explore our comprehensive suite of enterprise cloud hosting, dedicated servers, business applications like Tally on Cloud, and robust backup and security solutions.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
