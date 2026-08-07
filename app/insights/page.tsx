import FromInsightToAction from "@/components/insightspage/FromInsightToAction"
import InsightsPageHeroSection from "@/components/insightspage/InsightsPageHeroSection"
import LatestInsightsSection from "@/components/insightspage/LatestInsightsSection"
import WhatWeExploreSection from "@/components/insightspage/WhatWeExploreSection"
import React from "react"

function page() {
  return (
    <div className="flex flex-col gap-16">
      <InsightsPageHeroSection />
      <LatestInsightsSection />
      <WhatWeExploreSection />
      <FromInsightToAction />
    </div>
  )
}

export default page
