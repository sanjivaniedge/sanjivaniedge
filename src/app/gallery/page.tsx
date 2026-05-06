import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Gallery | Sanjivani Edge",
  description: "Explore our gallery showcasing our team, culture, and events.",
};

export default function GalleryPage() {
  notFound();
}
