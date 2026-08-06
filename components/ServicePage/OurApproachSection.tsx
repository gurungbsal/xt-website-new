import React from "react"
import SectionTitle from "../SectionTitle"

const principles = [
  {
    number: "01",
    title: "Useful Before Impressive",
    description:
      "We begin with a real organizational or human need—not with the technology itself.",
  },
  {
    number: "02",
    title: "Human-Guided",
    description:
      "People remain responsible for important decisions, interpretation, and outcomes.",
  },
  {
    number: "03",
    title: "Secure by Design",
    description:
      "Privacy, access, data sensitivity, and organizational risk are considered from the beginning.",
  },
  {
    number: "04",
    title: "Built for Trust",
    description:
      "AI-enabled experiences should be understandable, reviewable, and appropriate for the people they serve.",
  },
]

function OurApproachSection() {
  return (
    <div className="bg-primary py-24 text-primary-foreground">
      <div className="container">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold uppercase">OUR APPROACH TO AI</p>
            <p className="text-4xl font-bold text-white">
              AI Should Strengthen Human Capability—not Replace Human
              Responsibility
            </p>
          </div>
          <p className="text-center text-white sm:w-full md:w-6xl">
            We use AI to accelerate discovery, engineering, knowledge access,
            and operational work while keeping human judgment, security,
            transparency, review, and accountability at the center.
          </p>
        </div>

        <p className="mt-10 text-center text-sm font-semibold tracking-wide text-white">
          FOUR PRINCIPLES GUIDE HOW WE APPLY AI
        </p>

        <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="flex flex-col gap-3 bg-primary p-8"
            >
              <span className="font-mono text-sm text-white/40">
                {principle.number}
              </span>
              <h3 className="text-lg font-bold">{principle.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurApproachSection
