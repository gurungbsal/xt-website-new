import React from "react"
import SectionTitle from "../SectionTitle"
import { Button } from "../ui/button"
import { Calendar, Mail, ArrowRight } from "lucide-react"

const TRANSITION = "transition-all duration-500 ease-in-out"

function ContactSection() {
  return (
    <div className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 0%, rgba(28,35,51,0.04) 0%, rgba(28,35,51,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative container">
        <SectionTitle
          mainTitle="Let's build what mission needs next"
          title="Ready to turn technology complexity into practical progress?"
          description="Whether you are modernizing critical systems, exploring a responsible path to AI, or strengthening your engineering capacity, XylonTech can help you identify the right next step."
        />

        <div className="mt-10 mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-gray-300" aria-hidden="true" />
          <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
            Choose the right starting point
          </p>
          <span className="h-px w-10 bg-gray-300" aria-hidden="true" />
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* Discovery call */}
          <div
            className={`group flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:-translate-y-1 hover:border-[#1C2333]/30 hover:shadow-xl ${TRANSITION} hover:bg-primary3/8`}
          >
            <div className="flex items-start justify-between">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-primary3/5 group-hover:bg-primary3/10 ${TRANSITION}`}
              >
                <Calendar size={22} strokeWidth={2} className="text-primary3" />
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-primary3">
                Book a discovery call
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                Choose a time for a focused conversation about your priorities,
                constraints, and technology needs.
              </p>
            </div>

            <Button
              className={`mt-auto w-fit gap-2 border-primary3 bg-transparent text-primary3 hover:bg-primary3! hover:text-white ${TRANSITION}`}
            >
              Book a discovery call
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </div>

          {/* Send an inquiry */}
          <div
            className={`group flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:-translate-y-1 hover:border-primary2/40 hover:shadow-xl ${TRANSITION} hover:bg-primary2/8`}
          >
            <div className="flex items-start justify-between">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-primary2/10 group-hover:bg-primary2/15 ${TRANSITION}`}
              >
                <Mail size={22} strokeWidth={2} className="text-primary2" />
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-primary2">
                Send an inquiry
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                Not ready for a call? Send a short note about what you're
                working on, and we'll follow up with next steps.
              </p>
            </div>

            <Button
              className={`mt-auto w-fit gap-2 border-primary2 bg-transparent text-primary2 hover:bg-primary2 hover:text-white ${TRANSITION}`}
            >
              Send an inquiry
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
