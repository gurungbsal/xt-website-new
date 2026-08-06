import { CheckCircle } from "lucide-react"
import { Button } from "../ui/button"

const items = [
  {
    icon: CheckCircle,
    label: "Mission-aligned decisions",
  },
  {
    icon: CheckCircle,
    label: "Open, frequent communication",
  },
  {
    icon: CheckCircle,
    label: "Clean, maintainable engineering",
  },
  {
    icon: CheckCircle,
    label: "Knowledge shared with your team",
  },
]

function WhatStaysSection() {
  return (
    <div className="container">
      <div
        className="relative overflow-hidden rounded-4xl p-12 text-white sm:p-16"
        style={{
          background:
            "radial-gradient(120% 140% at 15% 0%, #0A6BAE 0%, #014778 45%, #002E4E 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "#3B9FD8" }}
          aria-hidden="true"
        />

        <div className="relative">
          <p className="text-center text-xs font-semibold tracking-[0.25em] text-white/60 uppercase">
            Consistent from day one
          </p>
          <p className="mt-3 text-center text-3xl font-bold sm:text-4xl">
            What stays throughout
          </p>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <Icon size={20} className="text-white" strokeWidth={2} />
                </span>
                <span className="text-sm leading-snug font-medium text-white/90">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex w-full flex-col items-center justify-center">
            <p className="mb-4 w-full text-center text-2xl text-white md:w-2xl">
              You always know what we are building, why it matters, and what
              comes next.
            </p>
            <Button className="bg-white px-6 py-6 text-primary hover:bg-white/90">
              Explore All Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatStaysSection
