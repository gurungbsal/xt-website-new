import React from "react"
import SectionTitle from "../SectionTitle"
import { Compass, RefreshCw, Users, Sparkles } from "lucide-react"

const scenarios = [
  {
    icon: Compass,
    color: "var(--primary2)",
    title: "A Valuable Idea Needs Structure",
    description:
      "You have an important product or platform concept, but need help defining priorities, users, requirements, architecture, and a realistic path to delivery.",
  },
  {
    icon: RefreshCw,
    color: "var(--primary3)",
    title: "Existing Systems Are Holding You Back",
    description:
      "Legacy applications, manual processes, disconnected data, and technical debt are limiting your organization's ability to respond and grow.",
  },
  {
    icon: Users,
    color: "var(--primary)",
    title: "Your Team Needs Delivery Capacity",
    description:
      "You need experienced product, design, and engineering support without creating a large permanent internal team.",
  },
  {
    icon: Sparkles,
    color: "gradient",
    title: "AI Creates Opportunity—and Uncertainty",
    description:
      "You want to use AI meaningfully, but need a responsible approach grounded in real organizational needs, security, human judgment, and measurable value.",
  },
]

function WhereWeHelpSection() {
  return (
    <div className="container py-20">
      <SectionTitle
        mainTitle="Where We Help"
        title="When the Mission Is Clear—but the Technology Path Is Not"
        description="Organizations often know the change they want to create, but outdated systems, disconnected workflows, limited internal capacity, or rapidly evolving technology make the path forward difficult."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {scenarios.map((scenario) => {
          const Icon = scenario.icon
          const isGradient = scenario.color === "gradient"

          return (
            <div
              key={scenario.title}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-white p-7 transition-shadow hover:shadow-md"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-lg"
                style={
                  isGradient
                    ? {
                        background:
                          "conic-gradient(from 180deg, var(--primary), var(--primary2), var(--primary3), var(--primary))",
                      }
                    : {
                        backgroundColor: `color-mix(in srgb, ${scenario.color} 12%, white)`,
                      }
                }
              >
                <Icon
                  className="h-5 w-5"
                  style={{ color: isGradient ? "white" : scenario.color }}
                  strokeWidth={2}
                />
              </div>

              <h3 className="text-lg font-bold text-primary">
                {scenario.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {scenario.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* closing thesis — reuses the strategy/design/engineering color language */}
      <div className="mt-14 rounded-2xl border border-border bg-primary/[0.03] px-8 py-10 text-center sm:px-16">
        <p className="mx-auto max-w-2xl text-xl leading-relaxed font-semibold text-primary sm:text-2xl">
          We help bring{" "}
          <span style={{ color: "var(--primary2)" }}>clarity</span> to the
          problem, <span style={{ color: "var(--primary3)" }}>coherence</span>{" "}
          to the solution, and{" "}
          <span style={{ color: "var(--primary)" }}>discipline</span> to
          delivery.
        </p>
      </div>
    </div>
  )
}

export default WhereWeHelpSection
