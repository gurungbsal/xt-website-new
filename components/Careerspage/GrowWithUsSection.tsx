import React from "react"
import {
  ArrowRight,
  Users,
  Compass,
  Layers,
  GitPullRequest,
  Network,
  Handshake,
  Award,
  Rocket,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import SectionTitle from "../SectionTitle"

const careerPath = [
  "Early Career",
  "Engineer or Designer",
  "Senior Contributor",
  "Lead",
  "Manager or Principal",
]

const growthSupport: { label: string; icon: LucideIcon }[] = [
  { label: "Technical and professional mentoring", icon: Users },
  { label: "Leadership development", icon: Compass },
  { label: "Architecture and product discussions", icon: Layers },
  { label: "Code and design reviews", icon: GitPullRequest },
  { label: "Cross-functional project experience", icon: Network },
  { label: "Client exposure", icon: Handshake },
  { label: "Approved certifications and learning resources", icon: Award },
  { label: "Opportunities to lead internal initiatives", icon: Rocket },
  { label: "Responsible AI-assisted development training", icon: Sparkles },
]

function GrowWithUsSection() {
  return (
    <div className="container py-20">
      <SectionTitle
        mainTitle="Grow With Us"
        title="A Career Should Expand More Than Your Calendar"
        description="As XylonTech grows, responsibilities and career pathways will continue to evolve. We value people who are ready to grow with the organization and contribute to what it becomes."
      />

      {/* Career path */}
      <div className="mt-14 rounded-2xl border border-border bg-white p-6 sm:p-8">
        <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-2">
          {careerPath.map((stage, index) => {
            const isLast = index === careerPath.length - 1
            const intensity = (index + 1) / careerPath.length

            return (
              <React.Fragment key={stage}>
                <div
                  className="flex flex-1 items-center justify-center rounded-xl border px-4 py-4 text-center transition-all duration-300"
                  style={{
                    borderColor: isLast
                      ? "transparent"
                      : `color-mix(in srgb, var(--primary) ${intensity * 40}%, var(--border))`,
                    backgroundColor: isLast
                      ? "var(--primary)"
                      : `color-mix(in srgb, var(--primary) ${intensity * 8}%, white)`,
                  }}
                >
                  <span
                    className={`text-sm font-bold tracking-tight sm:text-base ${
                      isLast ? "text-white" : "text-primary"
                    }`}
                  >
                    {stage}
                  </span>
                </div>

                {!isLast && (
                  <ArrowRight className="mx-auto h-4 w-4 shrink-0 rotate-90 text-muted-foreground/40 lg:mx-0 lg:rotate-0" />
                )}
              </React.Fragment>
            )
          })}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Pathways vary according to discipline and individual strengths.
        </p>
      </div>

      {/* Growth support */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {growthSupport.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.label}
              className="flex items-center gap-3.5 rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/[0.06] text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm leading-snug font-semibold text-primary">
                {item.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GrowWithUsSection
