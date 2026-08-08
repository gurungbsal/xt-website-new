import {
  BookOpen,
  Compass,
  Gem,
  Handshake,
  Leaf,
  Target,
  Users,
} from "lucide-react"
import Image from "next/image"

const values = [
  {
    title: "People Before Ego",
    description:
      "Strong ideas can come from any role, discipline, title, or location.",
    icon: Users,
  },
  {
    title: "Ownership",
    description:
      "We communicate clearly, follow through, and take responsibility for the quality of our work.",
    icon: Target,
  },
  {
    title: "Craftsmanship",
    description:
      "We care about the details because thoughtful work creates trust.",
    icon: Gem,
  },
  {
    title: "Continuous Learning",
    description: "We remain curious, reflective, and willing to improve.",
    icon: BookOpen,
  },
  {
    title: "Courageous Collaboration",
    description: "We ask difficult questions with honesty and respect.",
    icon: Handshake,
  },
  {
    title: "Purpose",
    description:
      "We want our work to strengthen people, organizations, communities, and the systems they depend upon.",
    icon: Compass,
  },
  {
    title: "Sustainability",
    description:
      "We are building a company where strong performance and human well-being can coexist over time.",
    icon: Leaf,
  },
]

function CultureWeAreBuildingSection() {
  return (
    <div className="my-16">
      <div className="relative container overflow-hidden bg-linear-to-br from-primary via-primary to-[#1C2333] py-32 shadow-2xl sm:p-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="relative grid grid-cols-12 gap-10 lg:gap-12">
          {/* Image */}
          <div className="col-span-12 lg:col-span-4">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-2xl lg:h-full lg:min-h-130">
              <Image
                src="/images/careerspage/culture-section.jpg"
                alt="Our Culture"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* <div className="mt-5 hidden rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur lg:block">
              <p className="text-sm leading-relaxed text-white/80">
                &ldquo;Culture isn&apos;t a poster on the wall — it&apos;s how
                we actually decide, disagree, and deliver together.&rdquo;
              </p>
            </div> */}
          </div>

          {/* Content */}
          <div className="col-span-12 lg:col-span-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              OUR CULTURE
            </span>

            <h4 className="mt-5 max-w-2xl text-3xl leading-[1.15] font-bold tracking-tight text-white sm:text-4xl">
              The Culture We Are Building Together
            </h4>

            <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10">
                      <Icon size={18} className="text-white" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{value.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">
                        {value.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CultureWeAreBuildingSection
