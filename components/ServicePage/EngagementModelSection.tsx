import React from "react"
import { Button } from "@/components/ui/button"
import {
  Compass,
  Rocket,
  Infinity as InfinityIcon,
  ArrowRight,
  Check,
} from "lucide-react"
import SectionTitle from "../SectionTitle"

const models = [
  {
    number: "01",
    icon: Compass,
    color: "var(--primary2)",
    title: "Roadmap & Discovery Engagement",
    bestFor:
      "Organizations that need clarity before committing to a major technology investment.",
    scope: [
      "Discovery and stakeholder assessment",
      "Product definition and architecture direction",
      "Actionable roadmap and delivery plan",
    ],
    summary: "Define the right work before investing in the build.",
  },
  {
    number: "02",
    icon: Rocket,
    color: "var(--primary3)",
    title: "Project Delivery",
    bestFor:
      "Organizations with a defined initiative that need a capable team to take it from planning through launch.",
    scope: [
      "Product leadership and design",
      "Full engineering and testing",
      "Implementation and release",
    ],
    summary: "Move a priority initiative from concept to working solution.",
  },
  {
    number: "03",
    icon: InfinityIcon,
    color: "var(--primary)",
    title: "Long-Term Delivery Partnership",
    bestFor:
      "Organizations that need sustained product and engineering capacity across multiple priorities or phases.",
    scope: [
      "Dedicated or blended team",
      "Delivery governance and continuous improvement",
      "Technical stewardship and knowledge transfer",
    ],
    summary: "Build lasting capability—not just complete a temporary project.",
  },
]

function EngagementModelSection() {
  return (
    <div className="container py-20">
      <SectionTitle
        mainTitle="Engagement Models"
        title="The Right Level of Support for Where You Are Now"
      />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {models.map((model) => {
          const Icon = model.icon
          return (
            <div
              key={model.number}
              className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ ["--tier" as string]: model.color }}
            >
              {/* ghost numeral, large, behind content */}
              <span
                className="pointer-events-none absolute -top-3 -right-3 font-mono text-[6rem] leading-none font-bold select-none"
                style={{ color: model.color, opacity: 0.06 }}
                aria-hidden="true"
              >
                {model.number}
              </span>

              <div className="relative flex items-center justify-between">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${model.color} 12%, white)`,
                  }}
                >
                  <Icon
                    className="h-7 w-7"
                    style={{ color: model.color }}
                    strokeWidth={1.75}
                  />
                </div>
                <span
                  className="font-mono text-sm font-semibold"
                  style={{ color: model.color }}
                >
                  {model.number}
                </span>
              </div>

              <h3 className="relative text-xl leading-snug font-bold text-primary">
                {model.title}
              </h3>

              <div className="relative flex flex-col gap-4 text-sm">
                <div>
                  <p className="font-semibold tracking-wide text-foreground/70">
                    BEST FOR
                  </p>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground">
                    {model.bestFor}
                  </p>
                </div>
                <div>
                  <p className="font-semibold tracking-wide text-foreground/70">
                    TYPICAL SCOPE
                  </p>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {model.scope.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 flex-shrink-0"
                          style={{ color: model.color }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="h-20 rounded-2xl border border-blue-200 bg-blue-100 p-4 text-sm leading-relaxed font-medium text-blue-900">
                {model.summary}
              </p>
            </div>
          )
        })}
      </div>

      <div className="mt-16 flex flex-col items-center gap-5 rounded-2xl bg-primary/[0.03] px-8 py-12 text-center">
        <h3 className="text-2xl font-bold text-primary">
          Let&rsquo;s Find the Right Starting Point
        </h3>
        <Button className="h-12 px-6 text-base">
          Start a Conversation
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default EngagementModelSection
