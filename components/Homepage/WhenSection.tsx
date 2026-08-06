import React from "react"
import SectionTitle from "../SectionTitle"
import { Server, Link, Users, Cpu } from "lucide-react"

interface WhenSectionCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

const whenSectionCards: WhenSectionCardProps[] = [
  {
    icon: Server,
    title: "Legacy Systems",
    description:
      "Outdated applications and infrastructure make change slower, riskier, and more expensive.",
  },
  {
    icon: Link,
    title: "Disconnected Workflows",
    description:
      "Manual processes and fragmented tools create operational friction and prevent teams from seeing the whole picture.",
  },
  {
    icon: Users,
    title: "Limited Engineering Capacity",
    description:
      "Internal teams carry ambitious priorities without enough specialized capacity to deliver them sustainably.",
  },
  {
    icon: Cpu,
    title: "AI Without a Practical Path",
    description:
      "Organizations see the potential of AI but need a responsible, achievable roadmap connected to real operational needs.",
  },
]

function WhenSection() {
  return (
    <div className="container py-24">
      <SectionTitle
        mainTitle="When Technology Holds The Mission Back"
        title="Complex technology should not slow meaningful work."
        description="Organizations often know where they need to go, but legacy systems, disconnected workflows, limited capacity, and unclear technology choices make progress harder than it should be"
      />

      <div className="mt-16 grid grid-cols-4 gap-8">
        {whenSectionCards.map((card, index) => {
          const Icon = card.icon
          return (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-lg border border-gray-200 p-6 shadow-sm transition-transform duration-300 hover:scale-105"
            >
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold text-primary">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WhenSection
