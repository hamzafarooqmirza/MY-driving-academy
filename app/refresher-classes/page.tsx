import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Refresher Classes - MY Driving Academy",
  description:
    "Targeted sessions for drivers getting back on the road after a break. Patient, judgment-free instruction tailored to rebuild your confidence.",
};

export default function RefresherClassesPage() {
  return (
    <ServicePage
      eyebrow="Get back behind the wheel safely"
      title="Refresher Classes"
      description="Targeted sessions for drivers getting back on the road after a break. Patient, judgment-free instruction tailored to rebuild your confidence at your own pace."
      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCeCZu4zC5y1dGUga8BNp_gHoFM3iPD2asu--H_4knjUb6Kt26fhWgz1m4ewsH6wFsULGmDP1no_6Gc6perbVCuz6xtSBdPWC5BNm_kE81U1iYdqnd-tdEL8rBZTHlYTNfs0sllnhDpUyHo370rCmiMdfH0-E5a4lChFj85_vtJhB9zyPtbl_Ya5tL9DXqLMkmy42ohbER3pxJXdf9DI8nqg6KvKjhmz8nmiHW8cVTKll_ebvKImN4SRA"
      imageAlt="A mature adult driver looking confident and relaxed behind the wheel, accompanied by a calm instructor."
      includedSubtitle="Our refresher courses are designed to address your specific needs, focusing on the areas where you want to regain confidence."
      features={[
        {
          icon: "assignment",
          title: "1. Skills Assessment",
          description:
            "We begin with a low-pressure evaluation to understand your current driving level and identify specific areas that need refreshing, ensuring a personalized lesson plan.",
          wide: true,
        },
        {
          icon: "psychology",
          title: "2. Confidence Rebuilding",
          description:
            "Gradual exposure to challenging traffic situations, focusing on reducing anxiety and building safe, decisive driving habits.",
          tone: "dark",
        },
        {
          icon: "menu_book",
          title: "3. Highway Code Refresh",
          description:
            "A thorough review of recent changes to road laws, signage, and right-of-way rules to ensure you are legally compliant and safe.",
        },
        {
          icon: "schedule",
          title: "4. Flexible Short Sessions",
          description:
            "Book lessons that fit your schedule. We offer shorter, focused sessions designed to prevent fatigue while maximizing learning retention.",
        },
        {
          icon: "handshake",
          title: "5. Patient Instructor",
          description:
            "Learn with highly trained professionals who specialize in nervous or returning drivers, providing a completely judgment-free environment.",
        },
      ]}
    />
  );
}
