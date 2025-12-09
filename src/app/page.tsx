import Hero from "@/components/Hero";
import VisionMissionScroll from "@/components/VisionMissionScroll";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT, ERP & Digital Transformation Company in India",
  description: "A leading IT & ERP implementation company in India providing SAP, Oracle, Cloud, AI & Cybersecurity solutions to Manufacturing, BFSI & Healthcare",
  keywords: "IT company India, ERP company, digital transformation India, SAP partner India, best IT services Mumbai",
  alternates: {
    canonical: "https://www.sanjivaniedge.com",
  },
};

export default function Home() {

  return (
    <div className="">
      <Hero />
    </div>
  );
}
