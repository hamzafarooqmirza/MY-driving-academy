import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Test Preparation",
  description:
    "Mock practical tests and intensive theory preparation to ensure you are 100% ready for the big day.",
};

export default function TestPrepPage() {
  return (
    <ServicePage
      eyebrow="Enter your test with confidence"
      title="Test Preparation"
      description="Mock practical tests and intensive theory preparation to ensure you are 100% ready for the big day."
      imageUrl="/test-prep.webp"
      imageAlt="A student sitting in a car reading a driving theory book outside a driving test centre."
      includedSubtitle="Comprehensive preparation tailored to help you pass with flying colors."
      features={[
        {
          icon: "speed",
          title: "1. Full Mock Practical Test",
          description:
            "Experience real test conditions to eliminate surprises and gauge your readiness accurately.",
          wide: true,
        },
        {
          icon: "menu_book",
          title: "2. Theory Guidance",
          description:
            "Expert strategies for multiple choice and hazard perception.",
          tone: "accent",
        },
        {
          icon: "route",
          title: "3. Test Route Practice",
          description: "Familiarize yourself with local test center routes.",
        },
        {
          icon: "psychology",
          title: "4. Nerves & Confidence",
          description: "Coaching techniques to stay calm under pressure.",
        },
        {
          icon: "verified",
          title: "5. Final Pre-Test Lesson",
          description: "A warm-up session right before your test.",
          tone: "dark",
        },
      ]}
    />
  );
}
