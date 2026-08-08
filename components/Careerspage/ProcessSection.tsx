import React from "react"
import { ArrowRight } from "lucide-react"
import SectionTitle from "../SectionTitle"

const steps = [
  {
    number: "01",
    title: "Apply",
    description: "Share your résumé, LinkedIn profile, portfolio, or GitHub.",
  },
  {
    number: "02",
    title: "Initial Conversation",
    description:
      "We learn about your experience, interests, and what you are looking for.",
  },
  {
    number: "03",
    title: "Role Conversation",
    description:
      "Meet the relevant hiring leader and explore the role and expectations.",
  },
  {
    number: "04",
    title: "Skills or Working Session",
    description:
      "A practical exercise, portfolio review, technical discussion, or case conversation may be used.",
  },
]

function ConnectorArrow({ rotate }: { rotate: boolean }) {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-muted-foreground/40 shadow-sm">
      <ArrowRight className={`h-3.5 w-3.5 ${rotate ? "rotate-90" : ""}`} />
    </span>
  )
}

function HiringProcessSection() {
  return (
    <div className="container py-20">
      <SectionTitle
        mainTitle="Our Process"
        title="A Thoughtful, Transparent Process"
        description="The exact process may vary by role, but we aim to avoid unnecessary interviews and assignments. Expectations will be communicated in advance."
      />

      <div className="mt-14 grid grid-cols-1 gap-y-6 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1

          return (
            <div key={step.number} className="relative">
              <div className="flex flex-col rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl lg:h-full lg:p-7">
                <span className="text-sm font-bold tracking-[0.1em] text-primary3">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg leading-snug font-bold tracking-tight text-primary">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {!isLast && (
                <>
                  {/* Mobile: connector centered below the card */}
                  <div className="mt-4 flex justify-center lg:hidden">
                    <ConnectorArrow rotate />
                  </div>

                  {/* Desktop: connector centered in the column gap */}
                  <div className="pointer-events-none absolute top-1/2 right-0 z-20 hidden translate-x-[calc(50%+0.75rem)] -translate-y-1/2 lg:flex">
                    <ConnectorArrow rotate={false} />
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HiringProcessSection
