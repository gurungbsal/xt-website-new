import EngagementModelSection from "@/components/ServicePage/EngagementModelSection"
import OurApproachSection from "@/components/ServicePage/OurApproachSection"
import OurDeliveryApproachSection from "@/components/ServicePage/OurDeliveryApproachSection"
import OurServiceSection from "@/components/ServicePage/OurServiceSection"
import ServiceHeroSection from "@/components/ServicePage/ServiceHeroSection"
import StartConverstationSection from "@/components/ServicePage/StartConverstationSection"
import WhereWeHelpSection from "@/components/ServicePage/WhereWeHelpSection"
import WhoWeWorkWithUsSection from "@/components/ServicePage/WhoWeWorkWithUsSection"
import WhyPartnerWithUsSection from "@/components/ServicePage/WhyPartnerWithUsSection"

function Page() {
  return (
    <div className="flex flex-col gap-16">
      <ServiceHeroSection />
      <OurServiceSection />
      <WhereWeHelpSection />
      <OurApproachSection />
      <EngagementModelSection />
      <OurDeliveryApproachSection />
      <WhyPartnerWithUsSection />
      <WhoWeWorkWithUsSection />
      <StartConverstationSection />
    </div>
  )
}

export default Page
