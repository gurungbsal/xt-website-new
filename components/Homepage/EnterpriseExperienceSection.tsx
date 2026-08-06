import React from "react"
import { Button } from "../ui/button"
import { Info } from "lucide-react"

function EnterpriseExperienceSection() {
  return (
    <div className="container">
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden rounded-4xl p-12 text-white sm:p-16"
        style={{
          background:
            "radial-gradient(120% 140% at 15% 0%, #0A6BAE 0%, #014778 45%, #002E4E 100%)",
        }}
      >
        <p className="mb-4 text-center text-3xl font-bold text-white">
          Enterprise experience. Purpose-driven direction
        </p>

        <p className="w-5xl text-center">
          XylonTech brings together seasoned U.S. technology leadership,
          globally distributed engineering, and a commitment to helping
          organizations strengthen the systems behind their mission.
        </p>

        <div className="mt-12 flex w-full flex-col items-center justify-center">
          <Button className="bg-white px-6 py-6 text-primary hover:bg-white/90">
            Explore All Services
          </Button>
          <div className="mt-4 flex w-2xl gap-4 justify-self-start rounded-xl border border-gray-200 p-4">
            <Info />
            <p className="w-2xl text-sm text-white">
              Additional project details and references are available during
              qualified conversations, subject to client confidentiality.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnterpriseExperienceSection
