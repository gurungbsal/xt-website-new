import CareersHeroSection from "@/components/Careerspage/CareersHeroSection"
import CultureWeAreBuildingSection from "@/components/Careerspage/CultureWeAreBuildingSection"
import GrowWithUsSection from "@/components/Careerspage/GrowWithUsSection"
import HeadquatersSection from "@/components/Careerspage/HeadquatersSection"
import HowWeBuildSection from "@/components/Careerspage/HowWeBuildSection"
import JobsHeaderSection from "@/components/Careerspage/JobsHeaderSection"
import ProcessSection from "@/components/Careerspage/ProcessSection"
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
      <GrowWithUsSection />
      <ProcessSection />
      <JobsHeaderSection />
    </div>
  )
}

export default page
