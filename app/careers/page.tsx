import CareersHeroSection from "@/components/Careerspage/CareersHeroSection"
import WhyXylontechSection from "@/public/images/careerspage/WhyXylontechSection"
import React from "react"

function page() {
  return (
    <div className="flex flex-col gap-16">
      <CareersHeroSection />
      <WhyXylontechSection />
    </div>
  )
}

export default page
