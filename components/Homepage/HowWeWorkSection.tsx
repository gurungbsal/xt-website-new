"use client"

import { useEffect, useRef } from "react"
import { CheckCircle } from "lucide-react"
import SectionTitle from "../SectionTitle"

const steps = [
  {
    number: "01",
    phase: "Discover",
    pillClass: "bg-blue-100 text-blue-700",
    title: "Understand the Reality",
    description:
      "We listen, assess the current environment, clarify priorities, and identify the technology decisions that will create the greatest value.",
    items: [
      "Stakeholder discovery",
      "Current-state assessment",
      "Priorities and constraints",
    ],
    image: "/images/homepage/project-discussion.jpg",
  },
  {
    number: "02",
    phase: "Design",
    pillClass: "bg-purple-100 text-purple-700",
    title: "Shape the Right Path",
    description:
      "We translate what we learn into a thoughtful solution, delivery roadmap, and technical approach aligned with users and organizational goals.",
    items: [
      "Solution architecture",
      "Experience and workflow design",
      "Delivery roadmap",
    ],
    image: "/images/homepage/project-design.jpg",
  },
  {
    number: "03",
    phase: "Build",
    pillClass: "bg-amber-100 text-amber-700",
    title: "Deliver with Discipline",
    description:
      "Our cross-functional teams build iteratively, communicate openly, and maintain quality through every stage of delivery.",
    items: [
      "Iterative engineering",
      "Quality assurance",
      "Transparent progress",
    ],
    image: "/images/homepage/project-build.jpg",
  },
  {
    number: "04",
    phase: "Improve",
    pillClass: "bg-green-100 text-green-700",
    title: "Strengthen Over Time",
    description:
      "We measure what is working, respond to changing needs, and continue improving the systems that support your mission.",
    items: [
      "Performance insights",
      "Continuous improvement",
      "Sustainable support",
    ],
    image: "/images/homepage/project-improve.jpg",
  },
]

function HowWeWorkSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      if (fillRef.current) fillRef.current.style.height = "100%"
      return
    }

    let rafId: number | null = null

    const updateFill = () => {
      rafId = null
      const track = trackRef.current
      const fill = fillRef.current
      if (!track || !fill) return

      const rect = track.getBoundingClientRect()
      const viewportH = window.innerHeight

      // Progress reaches 0% when the top of the line enters the lower part
      // of the viewport, and 100% once the bottom of the line passes the
      // upper third — so it fills while the section is comfortably in view.
      const start = viewportH * 0.85
      const end = viewportH * 0.25
      const total = rect.height + (start - end)
      const traveled = start - rect.top

      const progress = Math.min(1, Math.max(0, traveled / total))
      fill.style.height = `${progress * 100}%`
    }

    const onScroll = () => {
      if (rafId === null) rafId = requestAnimationFrame(updateFill)
    }

    updateFill()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="bg-[#FAFAF9] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          mainTitle="How we work"
          title="A clear path from complexity to sustained progress"
          description="We begin by understanding your mission, operating reality, and most important constraints. Then we bring strategy, design, engineering, and delivery together—creating practical solutions while keeping your team informed and involved."
        />

        <div className="relative mt-20">
          {/* Static track */}
          <div
            ref={trackRef}
            className="absolute top-3 bottom-3 left-6 w-1.5 rounded-full bg-[#1C2333]/10 sm:left-8"
            aria-hidden="true"
          />

          {/* Scroll-filled overlay, grows top to bottom */}
          <div
            ref={fillRef}
            className="absolute top-3 left-6 w-1.5 rounded-full transition-[height] duration-150 ease-out sm:left-8"
            style={{
              height: "0%",
              background: "#5c2771",
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-16 sm:gap-20">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6 sm:gap-8">
                {/* Number badge */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#1C2333]/15 bg-[#FAFAF9] sm:h-16 sm:w-16">
                  <span
                    className="font-serif text-base tracking-tight sm:text-lg"
                    style={{
                      color:
                        i === 0
                          ? "#C9A227"
                          : i === steps.length - 1
                            ? "#1C2333"
                            : "#8A6A34",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="grid grid-cols-12 items-center gap-8">
                  <div className="col-span-8 flex-1 pt-1 pb-2 sm:pt-3">
                    <p
                      className={`w-fit rounded-full px-4 py-1 text-xs font-semibold uppercase ${step.pillClass}`}
                    >
                      {step.phase}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-primary sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-gray-600">
                      {step.description}
                    </p>

                    <ul className="mt-5 flex flex-col gap-2.5">
                      {step.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-sm text-gray-600"
                        >
                          <CheckCircle
                            size={16}
                            className="shrink-0 text-green-600"
                            strokeWidth={2}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-4">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="aspect-4/3 h-60 w-60 rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWorkSection
