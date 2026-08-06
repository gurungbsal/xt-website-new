import React from "react"
import SectionTitle from "../SectionTitle"
import {
  ArrowRight,
  Sparkles,
  CheckCircle,
  Server,
  Users2Icon,
} from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

const services = [
  {
    tag: "MODERNIZE",
    number: "01",
    icon: Server,
    title: "Digital Modernization",
    description:
      "Modernize legacy applications, infrastructure, and workflows without losing sight of the people and operations they support.",
    items: [
      "Application and cloud modernization",
      "Workflow and process improvement",
      "Technology assessment and roadmapping",
      "Systems integration",
    ],
    linkLabel: "Explore Digital Modernization",
    pillClass: "bg-blue-100 text-primary",
    accentText: "text-primary",
    accentBorder: "border-primary",
    accentBg: "bg-primary",
    hoverBorder: "hover:border-primary/40",
  },
  {
    tag: "BUILD",
    number: "02",
    icon: Sparkles,
    title: "Custom Software & Practical AI",
    description:
      "Design and build purposeful digital solutions that connect responsible AI and modern engineering to genuine organizational needs.",
    items: [
      "Custom web and enterprise applications",
      "AI-enabled workflows and automation",
      "Data platforms and intelligent insights",
      "Human-centered product design",
    ],
    linkLabel: "Explore Software & AI",
    pillClass: "bg-violet-100 text-primary2",
    accentText: "text-primary2",
    accentBorder: "border-primary2",
    accentBg: "bg-primary2",
    hoverBorder: "hover:border-primary2/40",
  },
  {
    tag: "SUSTAIN",
    number: "03",
    icon: Users2Icon,
    title: "Managed Engineering Delivery",
    description:
      "Extend your organization with a dependable, collaborative engineering team aligned to your priorities, standards, and mission.",
    items: [
      "Cross-functional delivery teams",
      "Product and program leadership",
      "Architecture, engineering, UX, and QA",
      "Flexible, sustainable delivery capacity",
    ],
    linkLabel: "Explore Managed Delivery",
    pillClass: "bg-green-100 text-primary3",
    accentText: "text-primary3",
    accentBorder: "border-primary3",
    accentBg: "bg-primary3",
    hoverBorder: "hover:border-primary3/40",
  },
]

function HowSection() {
  return (
    <div className="bg-blue-50 py-24">
      <div className="container">
        <SectionTitle
          mainTitle="How we move the mission forward"
          title="Strategy, engineering, and delivery—working as one system"
          description="XylonTech helps organizations move from technology complexity to practical progress. We shape the right path, build dependable solutions, and provide the sustained delivery capacity needed to keep moving forward."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.tag} className="flex flex-col gap-4">
                <div
                  className={`group flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${service.hoverBorder}`}
                >
                  <div className="flex w-full justify-center">
                    <p
                      className={`w-fit rounded-full px-4 py-1 text-center text-sm font-semibold tracking-wide ${service.pillClass}`}
                    >
                      {service.tag}
                    </p>
                  </div>
                  <div
                    className={`flex items-center justify-between border-t-4 pt-8 ${service.accentBorder}`}
                  >
                    <p
                      className={`text-4xl font-bold ${service.accentText}/20`}
                    >
                      {service.number}
                    </p>
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full ${service.pillClass}`}
                    >
                      <Icon
                        size={20}
                        className={service.accentText}
                        strokeWidth={2}
                      />
                    </span>
                  </div>

                  <p className={`text-2xl font-semibold ${service.accentText}`}>
                    {service.title}
                  </p>
                  <p className="text-gray-600">{service.description}</p>

                  <ul className="flex flex-col gap-2.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle
                          size={17}
                          className={`mt-0.5 shrink-0 ${service.accentText}`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/"
                    className={`mt-2 flex items-center gap-2 font-semibold ${service.accentText} hover:underline`}
                  >
                    {service.linkLabel}
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div
          className="mt-12 flex w-full flex-col items-center justify-center gap-4 rounded-3xl bg-primary px-8 py-10 text-center"
          style={{
            background:
              "radial-gradient(120% 140% at 15% 0%, #0A6BAE 0%, #014778 45%, #002E4E 100%)",
          }}
        >
          <p className="w-2xl text-2xl text-white">
            Every engagement begins with your organization's reality—and the
            mission your technology must serve.
          </p>
          <Button className="bg-white px-6 py-6 text-primary hover:bg-white/90">
            Explore All Services
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HowSection
