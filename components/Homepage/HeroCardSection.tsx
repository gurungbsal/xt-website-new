import { Astroid, Building2, Handshake, Network } from "lucide-react"
import React from "react"

function HeroCardSection() {
  return (
    <div className="border-y border-gray-200 py-8">
      <div className="container">
        <div className="grid grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <Handshake />
            <p className="font-semibold">U.S.-Led Partnership</p>
          </div>
          <div className="flex items-center gap-4">
            <Network />
            <p className="font-semibold">Globally Distributed Engineering</p>
          </div>
          <div className="flex items-center gap-4">
            <Building2 />
            <p className="font-semibold">Enterprise Delivery Experience</p>
          </div>
          <div className="flex items-center gap-4">
            <Astroid />
            <p className="font-semibold">Microsoft-Aligned Expertise</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCardSection
