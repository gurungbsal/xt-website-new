import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function StartConversationSection() {
  return (
    <div className="relative overflow-hidden bg-primary py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative container flex flex-col items-center text-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-white/60">
          START A CONVERSATION
        </span>

        <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-[2.75rem]">
          What are you trying to make possible?
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
          Tell us what your organization is working toward, where technology is
          creating friction, and what kind of support you may need. We will help
          you identify a practical next step.
        </p>

        <Button className="mt-9 h-12 bg-white px-7 text-base text-primary hover:bg-white/90">
          Tell Us About Your Project
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-white/50 italic">
          No polished technical brief is required. A challenge, an idea, or an
          unfinished question is enough to begin.
        </p>
      </div>
    </div>
  )
}

export default StartConversationSection
