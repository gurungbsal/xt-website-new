import {
  Repeat2,
  ShieldCheck,
  Users,
  GitPullRequest,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react"
import SectionTitle from "../SectionTitle"

const practices: {
  title: string
  description: string
  icon: LucideIcon
}[] = [
  {
    title: "Reusable Thinking",
    description:
      "We build components, systems, and knowledge that can support more than one project.",
    icon: Repeat2,
  },
  {
    title: "Maintainable Architecture",
    description:
      "We consider security, scalability, cost, and tomorrow's development from the beginning.",
    icon: ShieldCheck,
  },
  {
    title: "Human-Centered Design",
    description:
      "Designers, engineers, product leaders, and users belong in the same conversation.",
    icon: Users,
  },
  {
    title: "Thoughtful Code Reviews",
    description:
      "Review strengthens quality, shared understanding, and professional growth.",
    icon: GitPullRequest,
  },
  {
    title: "Responsible AI Assistance",
    description:
      "AI can accelerate our work, but human judgment, security, review, and accountability remain essential.",
    icon: Sparkles,
  },
  {
    title: "Continuous Improvement",
    description:
      "Every project and every sprint should make our products—and ourselves—better.",
    icon: TrendingUp,
  },
]

function HowWeBuildSection() {
  return (
    <div className="container py-20">
      <SectionTitle
        title="This is how we build"
        description="Strong products grow from strong practices—and from people who care about how the work is done."
      />

      <div className="flex w-full justify-center">
        <div className="relative mt-16 flex w-2xl justify-center">
          {/* timeline */}

          <div className="space-y-10">
            {practices.map((practice, i) => {
              const Icon = practice.icon

              return (
                <div key={practice.title} className="group relative flex gap-6">
                  {/* Timeline node */}
                  <div className="relative z-10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all duration-300 group-hover:border-primary3 group-hover:bg-primary3/10">
                      <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary3" />
                    </div>
                  </div>

                  <div className="flex-1 border-b border-border pb-10 transition-all duration-300 group-hover:border-primary3/30">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-mono text-sm text-primary3">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-xl font-semibold">
                        {practice.title}
                      </h3>
                    </div>

                    <p className="max-w-lg leading-7 text-muted-foreground">
                      {practice.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWeBuildSection
