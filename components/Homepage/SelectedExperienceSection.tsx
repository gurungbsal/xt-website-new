import React from "react"
import SectionTitle from "../SectionTitle"
import { CheckCircle } from "lucide-react"

const experiences = [
  {
    index: "01",
    tag: "Enterprise Modernization",
    title: "Modernizing Complex Digital Platforms",
    description:
      "Supporting the evolution of business-critical platforms, applications, and workflows within large, complex operating environments.",
    items: [
      "Product and technology strategy",
      "Application and workflow modernization",
      "Cross-functional program leadership",
      "Enterprise delivery coordination",
    ],
    footnote:
      "Experience informed by nearly two decades of technology and product leadership across global enterprise environments.",
    accentText: "text-primary",
    accentBg: "bg-blue-50",
    dot: "bg-primary",
  },
  {
    index: "02",
    tag: "Environmental & Operational Systems",
    title: "Technology Supporting Essential Work",
    description:
      "Helping organizations improve the systems, workflows, and digital capabilities that support environmental, engineering, and operational programs.",
    items: [
      "Operational workflow improvement",
      "Data and systems integration",
      "Cloud and application delivery",
      "Technology aligned to field and organizational needs",
    ],
    footnote:
      "Experience working alongside organizations operating in environmental services, engineering, infrastructure, and regulated contexts.",
    accentText: "text-primary2",
    accentBg: "bg-violet-50",
    dot: "bg-primary2",
  },
  {
    index: "03",
    tag: "Distributed Engineering Delivery",
    title: "Building Across Teams and Borders",
    description:
      "Bringing U.S.-based leadership and Nepal-based engineering talent together through structured, collaborative delivery.",
    items: [
      "Cross-functional engineering teams",
      "Architecture, software development, UX, and QA",
      "Iterative delivery and transparent communication",
      "Sustainable knowledge sharing",
    ],
    footnote:
      "A distributed operating model designed to combine close client partnership with dependable engineering capacity.",
    accentText: "text-primary3",
    accentBg: "bg-green-50",
    dot: "bg-primary3",
  },
]

function SelectedExperienceSection() {
  return (
    <div className="bg-white py-24">
      <div className="container">
        <SectionTitle
          mainTitle="Selected experience"
          title="Experience shaped by complex, mission-critical environments"
          description="Our work and leadership experience span enterprise platforms, operational modernization, environmental services, and globally distributed engineering. Across each engagement, the goal remains the same: make technology more useful, dependable, and aligned with the organization it serves."
        />

        <div className="mt-16 divide-y divide-gray-200 border-t border-b border-gray-200">
          {experiences.map((exp) => (
            <div
              key={exp.index}
              className="grid grid-cols-1 gap-8 py-12 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-3">
                <span
                  className={`font-serif text-5xl font-semibold ${exp.accentText} opacity-20`}
                >
                  {exp.index}
                </span>
                <p
                  className={`mt-3 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${exp.accentBg} ${exp.accentText}`}
                >
                  {exp.tag}
                </p>
              </div>

              <div className="md:col-span-9">
                <h3 className="text-2xl font-semibold text-gray-900 sm:text-[26px]">
                  {exp.title}
                </h3>
                <p className="mt-3 max-w-2xl text-gray-600">
                  {exp.description}
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {exp.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-gray-700"
                    >
                      <CheckCircle
                        size={16}
                        className={`mt-0.5 shrink-0 ${exp.accentText}`}
                        strokeWidth={2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-start gap-3 border-l-2 border-gray-200 pl-4">
                  <p className="text-sm leading-relaxed text-gray-500 italic">
                    {exp.footnote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SelectedExperienceSection
