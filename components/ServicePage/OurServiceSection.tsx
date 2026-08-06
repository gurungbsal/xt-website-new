import React from "react"
import SectionTitle from "../SectionTitle"
import { ArrowRight } from "lucide-react"

const services = [
  {
    number: "01",
    color: "var(--primary2)",
    tint: "bg-primary2/5",
    title: "Digital Strategy & Discovery",
    description:
      "Turn complex ideas and organizational needs into a clear, evidence-based product and technology direction.",
    capabilities: [
      "Stakeholder and user discovery",
      "Problem framing and opportunity definition",
      "Product vision and roadmap development",
      "Requirements and MVP definition",
      "Workflow and system assessment",
      "Technical feasibility and architecture planning",
      "Responsible AI opportunity assessment",
      "Delivery planning and investment estimates",
    ],
    outcome:
      "Leave with shared clarity, a prioritized roadmap, and a practical path forward.",
  },
  {
    number: "02",
    color: "var(--primary3)",
    tint: "bg-primary3/5",
    title: "Application & Workflow Modernization",
    description:
      "Transform aging applications, fragmented workflows, and manual processes into connected digital systems that are easier to use, maintain, and evolve.",
    capabilities: [
      "Legacy application assessment",
      "Application redesign and modernization",
      "Workflow digitization and automation",
      "Cloud-ready architecture",
      "System and API integration",
      "Data migration planning",
      "Accessibility and user-experience improvement",
      "Security, scalability, and maintainability review",
    ],
    outcome:
      "Create a stronger digital foundation that reduces friction and supports future growth.",
  },
  {
    number: "03",
    color: "var(--primary)",
    tint: "bg-primary/5",
    title: "Managed Product & Engineering Delivery",
    description:
      "Extend your organization with a connected, cross-functional delivery team that can design, build, test, release, and continuously improve digital products.",
    capabilities: [
      "Product and program leadership",
      "UX and product design",
      "Full-stack software engineering",
      "Cloud and solution architecture",
      "Quality engineering and DevOps support",
      "Sprint planning and delivery governance",
      "Documentation, knowledge transfer, and ongoing enhancement",
    ],
    outcome:
      "Gain reliable delivery capacity without losing strategic visibility, quality, or ownership.",
  },
]

function OurServiceSection() {
  return (
    <div className="container py-20">
      <SectionTitle
        mainTitle="Our Services"
        title="From Early Direction to Enduring Digital Capability"
        description="Our services can stand alone or connect into one continuous engagement—from defining the right problem through building, operating, and improving the solution."
      />

      <div className="relative mt-16">
        <div
          className="absolute top-3 bottom-3 left-6 w-px bg-border sm:left-7"
          aria-hidden="true"
        />

        <div className="flex flex-col">
          {services.map((service, i) => (
            <div key={service.number} className="relative">
              <div className="flex gap-6 sm:gap-8">
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white font-mono text-sm font-semibold sm:h-14 sm:w-14 sm:text-base"
                    style={{ borderColor: service.color, color: service.color }}
                  >
                    {service.number}
                  </div>
                </div>

                {/* content */}
                <div className="flex flex-1 flex-col gap-8 pb-16 lg:flex-row lg:gap-10">
                  <div className="flex flex-1 flex-col gap-4">
                    <h3 className="text-2xl font-bold text-primary sm:text-[1.75rem]">
                      {service.title}
                    </h3>
                    <p className="max-w-xl leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="mt-1 flex flex-wrap gap-2">
                      {service.capabilities.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-foreground/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* outcome */}
                  <div
                    className={`flex w-full flex-col gap-2 rounded-xl border border-border p-5 lg:w-72 lg:flex-shrink-0 ${service.tint}`}
                  >
                    <span
                      className="text-xs font-semibold tracking-[0.15em]"
                      style={{ color: service.color }}
                    >
                      OUTCOME
                    </span>
                    <p className="text-sm leading-relaxed font-medium text-foreground">
                      {service.outcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* connector between stages */}
              {i < services.length - 1 && (
                <div
                  className="absolute left-4 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-white sm:left-[1.15rem]"
                  style={{ top: "calc(100% - 5.5rem)" }}
                  aria-hidden="true"
                >
                  <ArrowRight className="h-3 w-3 rotate-90 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurServiceSection
