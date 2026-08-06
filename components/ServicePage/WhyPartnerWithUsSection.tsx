import React from "react"
import { Globe2, Layers3, MapPin, Wrench, HeartHandshake } from "lucide-react"
import Image from "next/image"
import SectionTitle from "../SectionTitle"

const reasons = [
  {
    icon: Globe2,
    title: "Mission and Systems Thinking",
    description:
      "We understand that technology exists within human, organizational, social, and environmental systems.",
  },
  {
    icon: Layers3,
    title: "Strategy Through Implementation",
    description:
      "The people helping shape the direction remain connected to design, architecture, and delivery.",
  },
  {
    icon: MapPin,
    title: "Distributed Strength",
    description:
      "Our United States and Nepal teams combine client partnership, product leadership, design, engineering, and operational capability.",
  },
  {
    icon: Wrench,
    title: "Engineering Craftsmanship",
    description:
      "We emphasize reusable components, maintainable architecture, thoughtful reviews, documentation, and continuous improvement.",
  },
  {
    icon: HeartHandshake,
    title: "Human Partnership",
    description:
      "We communicate clearly, surface risks early, invite collaboration, and treat trust as part of the work.",
  },
]

function WhyPartnerWithUsSection() {
  return (
    <div className="container py-20">
      <SectionTitle
        mainTitle="Why partner with us"
        title="A Technology Partner Built for Complex, Meaningful Work"
      />

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[42%_58%] lg:gap-14">
        {/* Image column — sticky so it stays in view while the list scrolls */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/servicepage/partner.jpg"
              alt="XylonTech team collaborating across our distributed United States and Nepal offices"
              width={1200}
              height={1500}
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Distributed team badge — ties directly to "Distributed Strength" */}
          <div className="relative z-10 -mt-10 ml-6 flex w-fit items-center gap-3 rounded-xl border border-border bg-white px-5 py-3 shadow-lg sm:ml-8">
            <div className="flex -space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-primary2/10 text-xs font-bold text-primary2">
                US
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-primary3/10 text-xs font-bold text-primary3">
                NP
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-primary">One team</p>
              <p className="text-xs text-muted-foreground">
                Across two countries
              </p>
            </div>
          </div>
        </div>

        {/* Reasons list — unnumbered, these are parallel strengths, not steps */}
        <div className="flex flex-col divide-y divide-border">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="flex gap-5 py-6 first:pt-0">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary3/[0.08]">
                  <Icon className="h-5 w-5 text-primary3" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WhyPartnerWithUsSection
