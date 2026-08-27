import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Brain Box Solutions",
  description: "We are a technology solutions company specializing in Cloud Computing, Cloud Backup, and Tally on Cloud services. Our mission is to help businesses work securely, efficiently, and from anywhere.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
