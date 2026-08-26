import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Test Preparation - MY Driving Academy",
  description:
    "Mock practical tests and intensive theory preparation to ensure you are 100% ready for the big day.",
};

export default function TestPrepPage() {
  return (
    <ServicePage
      eyebrow="Enter your test with confidence"
      title="Test Preparation"
      description="Mock practical tests and intensive theory preparation to ensure you are 100% ready for the big day."
      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuChCRQHbfA3_pJEsX7DjvMp-68qoxxlo-rlD5EcrBMUc55ssd2cxdFz86bDx8UlGumYX2clnR3HzYhf8_e4fzalMRt4MTTHohp4rKtyDLR7AI56qAZ75gjHTKt2-fEzgVWJIXo1zPBjBfrDy2BLZhbPNFohZOsSgyXPWZwa2Wj_7o1XeDGkTzdpWocTsF-P5T7mmxbeY7FzFzSUbqz3f2yz5y5CsDeQU041i3s5gyy8mz6OjikT5vdjHg"
      imageAlt="A confident young student driver smiling behind the wheel, accompanied by a calm instructor with a clipboard."
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
