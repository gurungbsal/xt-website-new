import ContactSection from "@/components/Homepage/ContactSection"
import EnterpriseExperienceSection from "@/components/Homepage/EnterpriseExperienceSection"
import HeroCardSection from "@/components/Homepage/HeroCardSection"
import HeroSection from "@/components/Homepage/HeroSection"
import HowSection from "@/components/Homepage/HowSection"
import HowWeWorkSection from "@/components/Homepage/HowWeWorkSection"
import SelectedExperienceSection from "@/components/Homepage/SelectedExperienceSection"
import WhatStaysSection from "@/components/Homepage/WhatStaysSection"
import WhenSection from "@/components/Homepage/WhenSection"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex flex-col gap-16">
      <div>
        <HeroSection />
        <HeroCardSection />
      </div>
      <WhenSection />
      <HowSection />
      <HowWeWorkSection />
      <WhatStaysSection />
      <SelectedExperienceSection />
      <EnterpriseExperienceSection />
      <ContactSection />
    </div>
  )
}
