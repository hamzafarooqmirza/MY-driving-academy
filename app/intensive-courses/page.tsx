import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Intensive Courses - MY Driving Academy",
  description:
    "Concentrated daily driving programs (3/5/7/10-day options) for rapid skill gain and quicker test dates.",
};

export default function IntensiveCoursesPage() {
  return (
    <ServicePage
      eyebrow="Fast-track your driving success"
      title="Intensive Courses"
      description="Concentrated daily driving programs (3/5/7/10-day options) for rapid skill gain and quicker test dates. Perfect for those who need their license fast."
      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuANuN3aPe2Bw5NlMntw7QHyl0sm4Ax7tjLtYcX7_sl16V3OFwfSt9Ceq2BwYZzn7VMfDYHYYB27Wyu4hvPAMZO-RZJLa4aMrt41VbzD7BzJjbnYYG1mjso4Bz-FdRlstYfBueRFT5AtIrBSbrpWrVF4IsKoQp7wLGtLDvCiBraLQgUflfIAvNO6qZp0kwQG9zR4EA7AZNJga5U7VvK6srHwoGw_9_LlO4PFsYrXaJNcM40TZvYFaPh8FQ"
      imageAlt="A driving instructor explaining a maneuver to a young adult student inside a modern car."
      includedSubtitle="Everything you need to succeed, packed into a focused timeframe."
      features={[
        {
          icon: "calendar_month",
          title: "Flexible Durations",
          description:
            "Choice of 3, 5, 7 or 10-day courses tailored to your current experience level.",
        },
        {
          icon: "directions_car",
          title: "Daily Lessons",
          description:
            "Structured daily driving lessons to build muscle memory and confidence rapidly.",
        },
        {
          icon: "verified_user",
          title: "Expert Instruction",
          description:
            "Learn from a patient, DVSA-qualified instructor committed to your success.",
        },
        {
          icon: "fact_check",
          title: "Mock Test Included",
          description:
            "A realistic practice run to prepare you mentally and practically for the real thing.",
        },
        {
          icon: "event_available",
          title: "Booking Assistance",
          description:
            "We assist with fast-tracking your practical test booking to align with your course end date.",
        },
      ]}
    />
  );
}
