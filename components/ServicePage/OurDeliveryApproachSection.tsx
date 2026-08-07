"use client"

import React, { useState } from "react"
import { Search, Target, Code2, RefreshCw } from "lucide-react"
import SectionTitle from "../SectionTitle"
import Image from "next/image"

const phases = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "Understand people, systems, constraints, risks, and desired outcomes.",
  },
  {
    number: "02",
    icon: Target,
    title: "Define",
    description:
      "Shape direction, requirements, priorities, architecture, and the delivery plan.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    description:
      "Design, engineer, test, and release through transparent, iterative increments.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Evolve",
    description:
      "Measure, learn, improve, transfer knowledge, and strengthen the system over time.",
  },
]

const collaboration = [
  "Biweekly delivery rhythms",
  "Demonstrations",
  "Shared backlogs",
  "Architecture reviews",
  "Quality checkpoints",
  "Executive visibility",
]

function OurDeliveryApproachSection() {
  const [active, setActive] = useState(0)
  const activePhase = phases[active]
  const ActiveIcon = activePhase.icon

  return (
    <div className="container py-20">
      <SectionTitle
        mainTitle=" OUR DELIVERY APPROACH"
        title="Clear thinking. Collaborative delivery. Continuous learning."
      />

      {/* <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
        <div className="flex flex-col">
          {phases.map((phase, i) => {
            const Icon = phase.icon
            const isActive = i === active
            return (
              <button
                key={phase.number}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-4 border-l-2 py-4 pl-5 text-left transition-colors ${
                  isActive
                    ? "border-primary3 bg-primary3/[0.04]"
                    : "border-border hover:border-primary3/40 hover:bg-primary3/[0.02]"
                }`}
              >
                <div className="relative h-11 w-11 flex-shrink-0">
                  <div
                    className={`flex h-full w-full items-center justify-center rounded-full border transition-colors ${
                      isActive
                        ? "border-primary3/30 bg-primary3/15"
                        : "border-border bg-white group-hover:border-primary3/25 group-hover:bg-primary3/10"
                    }`}
                  >
                    <Icon
                      className={`h-4.5 w-4.5 ${isActive ? "text-primary3" : "text-muted-foreground"}`}
                      strokeWidth={1.75}
                    />
                  </div>
                  <span
                    className={`absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-bold transition-colors ${
                      isActive
                        ? "border-primary3 bg-primary3 text-white"
                        : "border-border bg-white text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </span>
                </div>

                <span
                  className={`text-base font-bold transition-colors ${
                    isActive ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {phase.title}
                </span>
              </button>
            )
          })}

          <div className="mt-4 flex items-center gap-2 pl-5 text-xs font-medium text-muted-foreground">
            <RefreshCw
              className="h-3.5 w-3.5 text-primary3"
              strokeWidth={1.75}
            />
            Evolve flows back into Discover
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-primary3/[0.03] p-10 sm:p-12">
          <div
            key={active}
            className="motion-safe:animate-in motion-safe:duration-300 motion-safe:fade-in motion-safe:slide-in-from-bottom-2"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
              <ActiveIcon className="h-7 w-7 text-primary3" strokeWidth={1.5} />
            </div>

        
            <h3 className="mt-2 text-3xl font-bold text-primary">
              {activePhase.title}
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              {activePhase.description}
            </p>
          </div>

          <div className="mt-10 flex gap-2">
            {phases.map((phase, i) => {
              const isActive = i === active
              return (
                <button
                  key={phase.number}
                  onClick={() => setActive(i)}
                  aria-label={`Go to ${phase.title}`}
                  aria-current={isActive}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border font-mono text-sm font-semibold transition-colors ${
                    isActive
                      ? "border-primary3 bg-primary3 text-white"
                      : "border-border bg-white text-muted-foreground hover:border-primary3/40 hover:text-primary3"
                  }`}
                >
                  {i + 1}
                </button>
              )
            })}
          </div>
        </div>
      </div> */}

      <div className="flex justify-center">
        <Image
          src="/images/servicepage/delivery-approach.png"
          alt=""
          width={600}
          height={200}
        />
      </div>

      {/* Client collaboration */}
      <div className="mt-20 rounded-2xl border border-border bg-primary/[0.02] p-8 sm:p-10">
        {/* <h3 className="text-lg font-bold text-primary">
          Client collaboration throughout
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Clients remain connected to decisions, progress, risks, and priorities
          throughout the engagement.
        </p> */}

        <SectionTitle
          title="Client collboration throught"
          description="Clients remain connected to decisions, progress, risks, and priorities
          throughout the engagement"
        />

        <div className="mt-7 flex flex-wrap divide-x divide-border overflow-hidden rounded-lg border border-border bg-white">
          {collaboration.map((item) => (
            <div
              key={item}
              className="min-w-[140px] flex-1 px-4 py-3 text-center text-sm font-medium text-foreground/80"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurDeliveryApproachSection
