import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Driving Lessons - MY Driving Academy",
  description:
    "Standard weekly driving lessons tailored to your pace with a DVSA-qualified instructor in a fully dual-controlled car across Leicester.",
};

export default function DrivingLessonsPage() {
  return (
    <ServicePage
      eyebrow="Learn at your own pace"
      title="Driving Lessons"
      description="Standard weekly lessons tailored to your specific learning pace and comfort level. DVSA-qualified instructor builds a plan matching your learning style and confidence in a fully dual-controlled car across Leicester."
      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBgHwUuaGmEm_B7gLs3GkzKF9WXQQMHLW86Jj1i5-vOQvWJW0MI57vaHbsmxLk_xJFswuvLxWJ-LRkQb5fjdSwjjNvCTC-0mLuJuf-BPIVPgo-w1XUjLzDTeJtaRi42qrvPOm1rT1t-5hRfCFJlAQD-7cDnvC7Oe1Xa2wl_umDZFA5i5_SwPS-oQw8Ba63vGIm1Qcgl_luYQnFBYQnDA9d7ztkhtUO-NmSu7musymgOOBYp1K36HHmbVA"
      imageAlt="A modern, pristine white dual-control driving school car parked on a quiet, sunny suburban street in Leicester."
      features={[
        {
          icon: "schedule",
          title: "Flexible Slots",
          description:
            "Flexible 1-hour or 1.5-hour slots available 7AM–11PM, 7 days a week.",
          wide: true,
        },
        {
          icon: "workspace_premium",
          title: "Expert Instructor",
          description: "DVSA-qualified, patient instructor.",
        },
        {
          icon: "directions_car",
          title: "Modern Vehicle",
          description: "Learn in a modern dual-control car.",
        },
        {
          icon: "location_on",
          title: "Service Area",
          description:
            "Providing comprehensive driving lessons across Leicester and surrounding areas.",
          wide: true,
        },
      ]}
    />
  );
}
