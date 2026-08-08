import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, CheckCircle, MapPin } from "lucide-react"

function AboutHeroSection() {
  return (
    <div>
      <div className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative container min-h-dvh">
          <div className="grid min-h-dvh grid-cols-1 items-center gap-16 py-20 lg:grid-cols-2 lg:gap-12">
            {/* Left: copy */}
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary3/20 bg-primary3/5 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-primary3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary3" />
                ABOUT XYLONTECH
              </span>

              <h1 className="text-4xl leading-[1.08] font-bold tracking-tight text-primary sm:text-5xl lg:text-[3.4rem]">
                Technology is the Infrastructure.{" "}
                <span className="relative inline-block text-primary3">
                  Impact is the Purpose
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 5 Q 50 0, 100 4 T 200 3"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      fill="none"
                      opacity="0.35"
                    />
                  </svg>
                </span>
              </h1>

              <p className="w-full text-base leading-relaxed text-muted-foreground sm:text-lg">
                XylonTech is a technology partner helping mission-driven
                organizations modernize systems, strengthen digital
                capabilities, and thoughtfully use AI to advance meaningful
                environmental and social outcomes.
              </p>
              <p className="w-full text-base leading-relaxed text-muted-foreground sm:text-lg">
                We bring together enterprise product thinking, human-centered
                design, modern software engineering, and collaborative delivery
                through a globally connected team in the United States and
                Nepal.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button className="h-12 px-6 text-base">
                  Meet Our Team
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <Button variant="outline" className="h-12 px-6 text-base">
                  Explore Our Work
                </Button>
              </div>

              <dl className="mt-4 grid max-w-lg grid-cols-1 gap-3 border-t border-border pt-6 sm:grid-cols-3 sm:gap-4">
                {[
                  {
                    label: "Enterprise Experience",
                    // place: "United States",
                    color: "var(--primary2)",
                  },
                  {
                    label: "Global Collaboration",
                    // place: "Nepal",
                    color: "var(--primary3)",
                  },
                  {
                    label: "Purposeful Technology",
                    // place: "Philippines",
                    color: "var(--primary)",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <dt className="text-xs font-semibold tracking-wide text-muted-foreground">
                        {item.label}
                      </dt>
                    </div>
                    {/* <dd
                      className="flex items-center gap-1 text-sm font-medium"
                      style={{ color: item.color }}
                    >
                      <MapPin className="h-3.5 w-3.5 opacity-60" />
                      {item.place}
                    </dd> */}
                  </div>
                ))}
              </dl>
            </div>

            {/* Right: image + floating card */}
            <div className="relative">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/aboutpage/about-hero.jpg"
                    alt="XylonTech team members collaborating"
                    height={1080}
                    width={1920}
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute right-6 -bottom-20 left-6 w-fit rounded-xl border border-border bg-white/90 p-5 shadow-xl backdrop-blur sm:right-auto sm:left-8">
                {/* <p className="text-sm font-semibold tracking-wide text-primary3">
                  WHY JOIN US
                </p> */}
                <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={"16"} className="text-green-600" />3
                    Rooted in Purpose
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={"16"} className="text-green-600" />
                    Built Across Borders
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={"16"} className="text-green-600" />
                    Growing Through Partnership
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHeroSection
