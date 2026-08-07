import { Building2, Flag, Users, Globe2, ArrowUpRight } from "lucide-react"
import SectionTitle from "../SectionTitle"

const offices = [
  {
    country: "United States",
    emoji: "🇺🇸",
    title: "Leadership & Strategy",
    description:
      "Leadership, client partnership, product strategy, and delivery.",
  },
  {
    country: "Nepal",
    emoji: "🇳🇵",
    title: "Engineering Hub",
    description:
      "Engineering, UX, design, operations, and a growing culture of mentorship.",
  },
  {
    country: "Philippines",
    emoji: "🇵🇭",
    title: "Marketing",
    description:
      "Marketing support that helps XylonTech communicate its work and connect with the right communities.",
  },
]

export default function HeadquatersSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="One Team. Three Countries."
          description="Our distributed model brings together different forms of experience, knowledge, creativity, and perspective."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {offices.map((office) => (
            <div
              key={office.country}
              className="group rounded-3xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary3/30 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="text-4xl">{office.emoji}</div>

                <div className="rounded-full border border-border p-2 transition-colors group-hover:border-primary3 group-hover:text-primary3">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-semibold">{office.country}</h3>

              <div className="mt-2 flex items-center gap-2 text-primary3">
                <Building2 className="h-4 w-4" />
                <span className="text-sm font-medium">{office.title}</span>
              </div>

              <p className="mt-5 leading-7 text-muted-foreground">
                {office.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-border bg-muted/30 px-10 py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Globe2 className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Different perspectives. Shared standards.
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                Whether strategy begins in the United States, engineering is
                built in Nepal, or marketing is driven from the Philippines,
                every project follows the same process, quality standards, and
                commitment to meaningful technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
