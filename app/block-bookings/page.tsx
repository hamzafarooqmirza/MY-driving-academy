import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Block Bookings - MY Driving Academy",
  description:
    "Book multiple driving lessons in advance at a discounted rate for steady progress and significant savings.",
};

export default function BlockBookingsPage() {
  return (
    <ServicePage
      eyebrow="Premium tuition, exceptional value"
      title="Block Bookings"
      description="Book multiple lessons in advance at a discounted rate. Our most popular option for steady progress and significant savings, designed to provide consistent, high-quality instruction."
      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD0NeKUYtWYOldCDSOjv62z2PTPka7M1a7k34xXUxpYgtgoB5DQWeIM2WUY1jWuYU6AFeZiElUd8p_py9ZRsdvOqJWBdmkdtXteU6x7EcxB5Nf41Mg8ml4SdGqEQEZ3voZbJawlPV8HI15kUryVuoCB1yggGQ_J3_STz-5VVjjlb1JIh3bT0gIE6yGBztN-Bl0Xoc0YXiAiR6Tp3tsoSST_D0j3hjyh6wMAm6BT1t_ns1dyDRsj2tv1Kw"
      imageAlt="A modern driving instructor showing a tablet with a progress chart to a young, focused student."
      features={[
        {
          icon: "savings",
          title: "Discounted Hourly Rate",
          description:
            "Save money compared to individual hourly bookings. Committing to a block ensures you get the best possible value for your investment.",
        },
        {
          icon: "calendar_clock",
          title: "Flexible Scheduling",
          description:
            "Plan your lessons around your busy life. Block bookings offer flexibility to schedule sessions when it's most convenient for you.",
        },
        {
          icon: "event_available",
          title: "Priority Booking Slots",
          description:
            "Jump the queue. Students with block bookings receive priority access to peak time slots, ensuring consistent learning momentum.",
        },
        {
          icon: "trending_up",
          title: "Progress Tracking",
          description:
            "With a structured block, our instructors can effectively map and track your progress against the DVSA syllabus, ensuring comprehensive preparation for your test.",
          wide: true,
        },
        {
          icon: "check_circle",
          title: "Ideal for Regular Learners",
          description:
            "Perfect for students aiming for 1-2 lessons per week to maintain a steady, effective learning curve towards test readiness.",
          tone: "dark",
        },
      ]}
    />
  );
}
