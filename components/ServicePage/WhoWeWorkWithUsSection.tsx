import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Leaf,
  Users,
  Landmark,
  GraduationCap,
  Building2,
  Factory,
  ArrowRight,
} from "lucide-react"
import SectionTitle from "../SectionTitle"

const sectors = [
  { icon: Leaf, label: "Climate and environmental organizations" },
  { icon: Users, label: "Social-impact and community-serving organizations" },
  { icon: Landmark, label: "Government agencies and public-sector partners" },
  {
    icon: GraduationCap,
    label: "Research, education, and knowledge organizations",
  },
  { icon: Building2, label: "Purpose-led businesses" },
  {
    icon: Factory,
    label:
      "Enterprise teams navigating modernization or responsible AI adoption",
  },
]

function WhoWeWorkWithUsSection() {
  return (
    <div className="container py-20">
      <SectionTitle
        mainTitle="Who we work with"
        title="For Organizations Building More Than Technology"
        description="We are especially aligned with organizations whose digital investments
        support people, communities, public systems, environmental resilience,
        or long-term institutional capability."
      />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sectors.map((sector) => {
          const Icon = sector.icon
          return (
            <div
              key={sector.label}
              className="flex items-center gap-4 rounded-xl border border-border bg-white p-5"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary3/[0.08]">
                <Icon className="h-5 w-5 text-primary3" strokeWidth={1.75} />
              </div>
              <p className="text-sm leading-snug font-medium text-foreground/80">
                {sector.label}
              </p>
            </div>
          )
        })}
      </div>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground italic">
        We also partner with organizations outside these sectors when the work,
        relationship, and values are aligned.
      </p>

      <div className="relative mt-16 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />

        <div className="relative z-10 flex h-full flex-col justify-center gap-5 px-8 py-12 sm:max-w-2xl sm:px-12">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            See How We Turn Complex Needs Into Working Systems
          </h3>
          <p className="text-sm leading-relaxed text-white/80">
            Explore examples of our approach across product strategy,
            application development, modernization, AI-enabled solutions, and
            managed delivery.
          </p>
          <Button className="w-fit bg-white text-primary hover:bg-white/90">
            View Our Work
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default WhoWeWorkWithUsSection
