import CareersHeroSection from "@/components/Careerspage/CareersHeroSection"
import CultureWeAreBuildingSection from "@/components/Careerspage/CultureWeAreBuildingSection"
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
      <CultureWeAreBuildingSection />
    </div>
  )
}

export default page
