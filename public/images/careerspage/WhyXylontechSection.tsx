import SectionTitle from "@/components/SectionTitle"
import { Heart, Compass, Users } from "lucide-react"

const pillars = [
  {
    icon: Heart,
    title: "Meaningful Work",
    description:
      "Contribute to digital products and systems that help organizations, communities, and mission-driven initiatives create measurable environmental and social impact.",
    color: "var(--primary2)",
  },
  {
    icon: Compass,
    title: "Real Responsibility",
    description:
      "Your ideas, decisions, and craftsmanship will directly influence the products, practices, and culture we are building.",
    color: "var(--primary3)",
  },
  {
    icon: Users,
    title: "Growth Through Collaboration",
    description:
      "Learn through mentorship, code and design reviews, product conversations, architecture discussions, client exposure, and hands-on delivery.",
    color: "var(--primary)",
  },
]

function WhyXylontechSection() {
  return (
    <div className="container py-20">
      <SectionTitle
        mainTitle="Why XylonTech"
        title="Build your career while building what matters"
        description="XylonTech is building the kind of technology organization we believe the future needs: technically strong, globally connected, people-centered, and guided by purpose."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="group flex flex-col gap-4 rounded-2xl border border-border p-7 transition-colors hover:border-primary/20"
          >
            <span
              className="flex h-11 w-11 items-center justify-center rounded-full"
              style={{
                backgroundColor: `color-mix(in srgb, ${pillar.color} 12%, transparent)`,
              }}
            >
              <pillar.icon
                className="h-5 w-5"
                style={{ color: pillar.color }}
                strokeWidth={2}
              />
            </span>

            <h3 className="text-lg font-semibold tracking-tight text-primary">
              {pillar.title}
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 border-t border-border pt-10">
        <p className="max-w-2xl text-xl leading-relaxed font-medium text-primary sm:text-2xl">
          XylonTech is still becoming
          <span className="text-primary3">—</span>and the people who join us
          will help shape what it becomes.
        </p>
      </div>
    </div>
  )
}

export default WhyXylontechSection
