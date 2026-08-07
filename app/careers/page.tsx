import CareersHeroSection from "@/components/Careerspage/CareersHeroSection"
import HeadquatersSection from "@/components/Careerspage/HeadquatersSection"
import HowWeBuildSection from "@/components/Careerspage/HowWeBuildSection"
import WhyXylontechSection from "@/components/Careerspage/WhyXylontechSection"
import React from "react"

function page() {
  return (
    <div className="flex flex-col gap-16">
      <CareersHeroSection />
      <WhyXylontechSection />
      <HowWeBuildSection />
      <HeadquatersSection />
    </div>
  )
}

export default page
