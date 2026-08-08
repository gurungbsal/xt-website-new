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
  {
    number: "05",
    title: "Team Alignment",
    description: "Meet potential collaborators and explore mutual working fit.",
  },
  {
    number: "06",
    title: "Decision and Offer",
    description:
      "We communicate the outcome and discuss the appropriate next steps.",
  },
]

const rows = [steps.slice(0, 3), steps.slice(3, 6)]

function ConnectorArrow({ rotate }: { rotate: boolean }) {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-muted-foreground/40 shadow-sm">
      <ArrowRight className={`h-3.5 w-3.5 ${rotate ? "rotate-90" : ""}`} />
    </span>
  )
}

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
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

      <div className="mt-14 flex flex-col gap-6">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex}>
            <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
              {row.map((step, index) => {
                const isLastInRow = index === row.length - 1

                return (
                  <div key={step.number} className="relative">
                    <StepCard step={step} />

                    {!isLastInRow && (
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
        ))}
      </div>
    </div>
  )
}

export default HiringProcessSection