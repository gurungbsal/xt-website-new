import Image from "next/image"
import React from "react"
import { Button } from "../ui/button"
import { CalendarPlus, Files } from "lucide-react"

const title = "Technology for Mission-Driven Organizations"

function HeroSection() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 flex flex-col gap-4 md:col-span-8">
            <ul className="flex justify-center gap-4 text-xs md:justify-start">
              <li className="rounded-full border bg-green-100 px-4 py-1 font-semibold text-green-900">
                STRATEGY
              </li>
              <li className="rounded-full border bg-blue-100 px-4 py-1 font-semibold text-blue-900">
                ENGINEERING
              </li>
              <li className="rounded-full border bg-purple-100 px-4 py-1 font-semibold text-purple-900">
                DELIVERY
              </li>
            </ul>
            <h1 className="text-center text-3xl font-bold text-primary md:text-left md:text-5xl">
              {title}
            </h1>
            <p className="w-full text-center md:w-3xl md:text-left">
              XylonTech helps mission-driven and operationally complex
              organizations modernize systems, build practical AI-enabled
              solutions, and extend their engineering capacity.
            </p>
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <Button size="lg" className="px-4 py-6 hover:scale-105">
                <CalendarPlus /> Book a Discover Call
              </Button>
              <Button
                size="lg"
                variant={"outline"}
                className="px-4 py-6 hover:scale-105"
              >
                <Files /> Explore Our Work
              </Button>
            </div>
          </div>
          {/* mission image */}
          <div className="col-span-12 mt-16 flex items-center justify-center md:col-span-4 lg:mt-0">
            <Image
              src="/images/homepage/Hero-mission-design.svg"
              alt="Mission"
              width={500}
              height={500}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
