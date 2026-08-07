import React from "react"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

function FromInsightToAction() {
  return (
    <div className="container">
      <div className="relative mt-16 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />

        <div className="relative z-10 flex h-full flex-col justify-center gap-5 px-8 py-12 sm:max-w-2xl sm:px-12">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            From Insight To Action
          </h3>
          <p className="text-2xl font-bold text-white">
            Thinking Through a Technology Challenge?
          </p>
          <p className="text-sm leading-relaxed text-white/80">
            If an article connects with a challenge your organization is
            navigating, we would be glad to explore it with you.
          </p>
          <Button className="w-fit bg-white text-primary hover:bg-white/90">
            Tell Us About Your Project
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FromInsightToAction
