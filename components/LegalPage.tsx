type Section = {
  heading: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
};

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <section className="px-4 md:px-10 py-12 md:py-16 max-w-[840px] mx-auto">
      <h1 className="text-4xl font-bold tracking-tight text-primary mb-2">
        {title}
      </h1>
      <p className="text-sm text-on-surface-variant mb-8">
        Last updated: {updated}
      </p>
      <p className="text-lg text-on-surface-variant leading-relaxed mb-10">
        {intro}
      </p>
      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="text-xl font-semibold text-primary mb-3">
              {section.heading}
            </h2>
            {section.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-on-surface-variant leading-relaxed mb-3 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
