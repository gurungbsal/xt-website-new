import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionTitle from "../SectionTitle"
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react"

const insights = [
  {
    category: "Climate & Community Resilience",
    title: "Beyond the Alert: Designing Technology for Community Resilience",
    description:
      "Alerts can tell communities that danger is approaching. Resilience depends on what happens next: understanding local risk, translating information into practical action, and supporting people before, during, and after disruption.",
    readTime: "7 min read",
    image: "/images/insightspage/climate.jpg",
  },
  {
    category: "Responsible Technology",
    title: "Responsible AI Begins Before the Model",
    description:
      "Responsible AI is not a final compliance check. It begins with the problem an organization chooses to solve, the data it relies on, the people affected, and the decisions the system is permitted to influence.",
    readTime: "6 min read",
    image: "/images/insightspage/responsibe-technology.jpeg",
  },
  {
    category: "Operational Modernization",
    title: "Modernization Without Disrupting the Mission",
    description:
      "Modernization succeeds when organizations improve aging systems without losing essential workflows, institutional knowledge, or the trust of the people who depend on them.",
    readTime: "6 min read",
    image: "/images/insightspage/operational-modernization.jpg",
  },
  {
    category: "Engineering for Continuity",
    title: "Building Systems That Outlast the Immediate Project",
    description:
      "Reusable components, maintainable architecture, clear documentation, and shared knowledge turn software delivery into lasting organizational capability.",
    readTime: "5 min read",
    image: "/images/insightspage/software-engineering.jpg",
  },
]

const [featured, ...rest] = insights

function ComingSoonTag({ className = "" }: { className?: string }) {
  return (
    <span
      className={`border-primary4/30 text-primary4 inline-flex items-center rounded-full border bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] backdrop-blur ${className}`}
    >
      COMING SOON
    </span>
  )
}

function FeaturedInsightCard({
  insight,
}: {
  insight: (typeof insights)[number]
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl">
      <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-72 xl:h-80">
        <Image
          src={insight.image}
          alt={insight.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover contrast-[0.97] grayscale-[55%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        <ComingSoonTag className="absolute top-5 right-5" />
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <span className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold tracking-[0.1em] text-primary3">
          <span className="h-1.5 w-1.5 rounded-full bg-primary3" />
          {insight.category.toUpperCase()}
        </span>

        <h3 className="mt-4 text-2xl leading-[1.15] font-bold tracking-tight text-primary sm:text-3xl">
          {insight.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {insight.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-5">
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {insight.readTime}
          </span>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground/50">
            Read Article
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </article>
  )
}

function CompactInsightCard({
  insight,
}: {
  insight: (typeof insights)[number]
}) {
  return (
    <article className="group flex flex-1 gap-4 rounded-2xl border border-border bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl sm:p-5">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28">
        <Image
          src={insight.image}
          alt={insight.title}
          fill
          sizes="112px"
          className="object-cover contrast-[0.97] grayscale-[55%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
          loading="eager"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
        <div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.08em] text-primary3">
            <span className="h-1 w-1 rounded-full bg-primary3" />
            {insight.category.toUpperCase()}
          </span>

          <h3 className="mt-1.5 text-base leading-snug font-bold tracking-tight text-primary">
            {insight.title}
          </h3>

          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {insight.description}
          </p>
        </div>

        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <Clock className="h-3 w-3" />
          {insight.readTime}
          <span className="text-muted-foreground/50">· Coming soon</span>
        </div>
      </div>
    </article>
  )
}

function LatestInsightsSection() {
  return (
    <div>
      <div className="container py-20">
        <SectionTitle
          mainTitle="Latest Insights"
          title="Perspectives From the Work"
          description="Notes, frameworks, and practical observations from the intersection of technology, organizational change, responsible innovation, and long-term impact."
        />

        <div className="mt-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <FeaturedInsightCard insight={featured} />
          </div>

          <div className="col-span-12 flex flex-col gap-4 lg:col-span-6">
            {rest.map((insight) => (
              <CompactInsightCard key={insight.title} insight={insight} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" className="h-12 px-6 text-base">
            <Link href="/insights" className="flex items-center gap-2">
              View All Insights
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LatestInsightsSection
