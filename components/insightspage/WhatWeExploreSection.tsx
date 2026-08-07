import React from "react"
import Link from "next/link"
import {
  CloudRainWind,
  RefreshCw,
  Settings2,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react"
import SectionTitle from "../SectionTitle"

const topics = [
  {
    title: "Responsible Technology",
    description:
      "Exploring how AI and digital systems can be designed and introduced with greater care, clarity, and accountability.",
    icon: ShieldCheck,
    color: "var(--primary3)",
    slug: "responsible-technology",
  },
  {
    title: "Operational Modernization",
    description:
      "Practical perspectives on strengthening workflows, applications, integrations, and the foundations organizations rely upon.",
    icon: Settings2,
    color: "var(--primary)",
    slug: "operational-modernization",
  },
  {
    title: "Climate & Community Resilience",
    description:
      "Considering how technology can support preparedness, adaptation, coordination, and mission-driven work.",
    icon: CloudRainWind,
    color: "var(--primary2)",
    slug: "climate-community-resilience",
  },
  {
    title: "Engineering for Continuity",
    description:
      "Lessons about reusable systems, thoughtful delivery, maintainable software, and building beyond the immediate launch.",
    icon: RefreshCw,
    color: "var(--primary4)",
    slug: "engineering-continuity",
  },
]

function WhatWeExploreSection() {
  return (
    <div>
      <div className="container py-20">
        <SectionTitle
          mainTitle="What We Explore"
          title="Technology in Its Wider Context"
        />

        <div className="mt-12 border-t border-border">
          {topics.map((topic) => {
            const Icon = topic.icon
            return (
              <Link
                key={topic.slug}
                href={`/insights?topic=${topic.slug}`}
                className="group -mx-4 grid grid-cols-12 items-start gap-4 border-b border-border px-4 py-8 transition-colors duration-300 hover:bg-primary/[0.025] sm:gap-6 sm:py-10"
              >
                <div className="col-span-12 flex items-start gap-4 sm:col-span-5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${topic.color} 10%, white)`,
                      color: topic.color,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="pt-1.5 text-xl leading-snug font-bold tracking-tight text-primary sm:text-2xl">
                    {topic.title}
                  </h3>
                </div>

                <div className="col-span-12 flex items-start justify-between gap-4 sm:col-span-7">
                  <p className="max-w-xl pt-1.5 text-base leading-relaxed text-muted-foreground">
                    {topic.description}
                  </p>
                  <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 -translate-x-1 translate-y-1 text-muted-foreground/40 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-primary group-hover:opacity-100" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WhatWeExploreSection
