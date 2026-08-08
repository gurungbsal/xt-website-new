"use client"

import React, { useMemo, useState } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  Bell,
  Briefcase,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

type Role = {
  title: string
  discipline: "engineering" | "project-manager" | "ux" | "operations"
  disciplineLabel: string
  locationType: "remote" | "kathmandu" | "hybrid"
  locationLabel: string
  engagement: "full-time" | "contract" | "contract-to-hire"
  engagementLabel: string
  status: "open" | "coming-soon"
  slug: string
}

const roles: Role[] = [
  {
    title: "Senior Frontend Engineer",
    discipline: "engineering",
    disciplineLabel: "Engineering",
    locationType: "remote",
    locationLabel: "Remote",
    engagement: "full-time",
    engagementLabel: "Full-Time",
    status: "open",
    slug: "senior-frontend-engineer",
  },
  {
    title: "Backend Engineer (Node.js)",
    discipline: "engineering",
    disciplineLabel: "Engineering",
    locationType: "remote",
    locationLabel: "Remote",
    engagement: "full-time",
    engagementLabel: "Full-Time",
    status: "open",
    slug: "backend-engineer-nodejs",
  },
  {
    title: "Product Designer (UX/UI)",
    discipline: "ux",
    disciplineLabel: "UX",
    locationType: "hybrid",
    locationLabel: "Kathmandu · Hybrid",
    engagement: "full-time",
    engagementLabel: "Full-Time",
    status: "open",
    slug: "product-designer",
  },
  {
    title: "Delivery Manager",
    discipline: "project-manager",
    disciplineLabel: "Project Manager",
    locationType: "kathmandu",
    locationLabel: "Kathmandu",
    engagement: "full-time",
    engagementLabel: "Full-Time",
    status: "coming-soon",
    slug: "delivery-manager",
  },
  {
    title: "DevOps / Cloud Engineer",
    discipline: "engineering",
    disciplineLabel: "Engineering",
    locationType: "remote",
    locationLabel: "Remote",
    engagement: "contract",
    engagementLabel: "Contract",
    status: "coming-soon",
    slug: "devops-cloud-engineer",
  },
  {
    title: "QA Engineer",
    discipline: "operations",
    disciplineLabel: "Operations",
    locationType: "hybrid",
    locationLabel: "Hybrid",
    engagement: "contract-to-hire",
    engagementLabel: "Contract-to-Hire",
    status: "coming-soon",
    slug: "qa-engineer",
  },
]

const disciplineColor: Record<Role["discipline"], string> = {
  engineering: "var(--primary)",
  ux: "var(--primary2)",
  "project-manager": "var(--primary3)",
  operations: "#B8863B",
}

function RoleRow({ role }: { role: Role }) {
  const isOpen = role.status === "open"
  const accent = disciplineColor[role.discipline]

  const content = (
    <div
      className={`group grid grid-cols-1 items-center gap-4 rounded-2xl border border-border bg-white p-5 transition-all duration-300 sm:grid-cols-12 sm:gap-6 sm:p-6 ${
        isOpen
          ? "cursor-pointer hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg"
          : "opacity-80"
      }`}
    >
      <div className="sm:col-span-5">
        <span
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.08em]"
          style={{ color: accent }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: accent }}
          />
          {role.disciplineLabel.toUpperCase()}
        </span>
        <h3 className="mt-1.5 text-lg leading-snug font-bold tracking-tight text-primary">
          {role.title}
        </h3>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted-foreground sm:col-span-4">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" />
          {role.locationLabel}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Briefcase className="h-3.5 w-3.5" />
          {role.engagementLabel}
        </span>
      </div>

      <div className="flex items-center justify-between gap-3 sm:col-span-3 sm:justify-end">
        {isOpen ? (
          <>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary3/25 bg-primary3/[0.06] px-2.5 py-1 text-[10px] font-semibold tracking-[0.08em] text-primary3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary3" />
              OPEN
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Apply
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </>
        ) : (
          <>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-1 text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">
              COMING SOON
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground/60">
              <Bell className="h-3.5 w-3.5" />
              Notify me
            </span>
          </>
        )}
      </div>
    </div>
  )

  return isOpen ? (
    <Link href={`/careers/${role.slug}`}>{content}</Link>
  ) : (
    <div>{content}</div>
  )
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-10 text-center">
      <p className="text-sm font-semibold text-primary">
        No roles match those filters right now.
      </p>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Try widening your search, or reach out below.
      </p>
    </div>
  )
}

function JobsHeaderSection() {
  const [discipline, setDiscipline] = useState("all-disciplines")
  const [location, setLocation] = useState("all-locations")
  const [engagement, setEngagement] = useState("all-engagement")

  const filteredRoles = useMemo(() => {
    return roles.filter((role) => {
      const disciplineMatch =
        discipline === "all-disciplines" || role.discipline === discipline
      const locationMatch =
        location === "all-locations" || role.locationType === location
      const engagementMatch =
        engagement === "all-engagement" || role.engagement === engagement
      return disciplineMatch && locationMatch && engagementMatch
    })
  }, [discipline, location, engagement])

  const openRoles = filteredRoles.filter((r) => r.status === "open")
  const upcomingRoles = filteredRoles.filter((r) => r.status === "coming-soon")
  const totalOpen = roles.filter((r) => r.status === "open").length

  return (
    <div className="relative overflow-hidden border-y border-border bg-gradient-to-b from-white via-white to-primary/[0.04]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-96 w-96 -translate-y-1/2 rounded-full bg-primary2/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary3/[0.06] blur-3xl" />

      {/* Header + filters */}
      <div className="relative container py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-center lg:col-span-7">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary3/20 bg-primary3/5 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-primary3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary3" />
              OPEN ROLES
            </span>

            <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight text-primary sm:text-5xl">
              Find Your Place at XylonTech
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore current and upcoming opportunities across engineering,
              product delivery, UX, and operations.
            </p>

            <div className="mt-9 flex items-baseline gap-3 border-t border-border pt-6">
              <span className="text-4xl font-bold tracking-tight text-primary">
                {totalOpen}
              </span>
              <span className="text-sm text-muted-foreground">
                open positions across 4 disciplines
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-white p-2 shadow-sm">
              {[
                {
                  label: "Discipline",
                  value: discipline,
                  onChange: setDiscipline,
                  placeholder: "All Roles",
                  options: [
                    { value: "all-disciplines", label: "All Roles" },
                    { value: "engineering", label: "Engineering" },
                    { value: "project-manager", label: "Project Manager" },
                    { value: "ux", label: "UX" },
                    { value: "operations", label: "Operations" },
                  ],
                },
                {
                  label: "Location",
                  value: location,
                  onChange: setLocation,
                  placeholder: "All Locations",
                  options: [
                    { value: "all-locations", label: "All Locations" },
                    { value: "remote", label: "Remote" },
                    { value: "kathmandu", label: "Kathmandu" },
                    { value: "hybrid", label: "Hybrid" },
                  ],
                },
                {
                  label: "Engagement",
                  value: engagement,
                  onChange: setEngagement,
                  placeholder: "All Types",
                  options: [
                    { value: "all-engagement", label: "All Types" },
                    { value: "full-time", label: "Full-Time" },
                    { value: "contract", label: "Contract" },
                    { value: "contract-to-hire", label: "Contract-to-Hire" },
                  ],
                },
              ].map((filter, index) => (
                <div
                  key={filter.label}
                  className={`flex items-center justify-between gap-4 px-4 py-4 ${
                    index !== 2 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="shrink-0 text-sm font-semibold text-primary">
                    {filter.label}
                  </span>
                  <Select
                    value={filter.value}
                    onValueChange={(value) => {
                      if (value !== null) filter.onChange(value)
                    }}
                  >
                    <SelectTrigger className="h-9 w-auto min-w-[140px] border-none bg-transparent px-2 text-sm text-muted-foreground shadow-none hover:text-primary focus:ring-0">
                      <SelectValue placeholder={filter.placeholder} />
                    </SelectTrigger>
                    <SelectContent align="end">
                      {filter.options.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Roles list */}
      <div className="relative container pb-20">
        {filteredRoles.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            {openRoles.length > 0 && (
              <div className="flex flex-col gap-3">
                {openRoles.map((role) => (
                  <RoleRow key={role.slug} role={role} />
                ))}
              </div>
            )}

            {upcomingRoles.length > 0 && (
              <div className="mt-12">
                <div className="flex items-center gap-3">
                  <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground">
                    OPENING SOON
                  </p>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  {upcomingRoles.map((role) => (
                    <RoleRow key={role.slug} role={role} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* CTAs: side by side */}
      <div className="relative container pb-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Growing thoughtfully */}
          <div className="flex flex-col items-center rounded-3xl border border-primary/10 bg-white p-8 text-center sm:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Sparkles className="h-5 w-5" />
            </span>

            <h3 className="mt-5 text-2xl leading-snug font-bold tracking-tight text-primary">
              We&apos;re Growing Thoughtfully
            </h3>

            <p className="mx-auto mt-4 w-full text-sm leading-relaxed text-muted-foreground">
              We may not have the right opening listed today, but we are always
              interested in meeting thoughtful engineers, designers, product
              leaders, delivery professionals, and mission-aligned
              collaborators.
            </p>

            <Button asChild className="mt-7">
              <Link
                href="https://xylontech2026stage.framer.ai/careers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Our Talent Network
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Don't see the right role */}
          <div className="flex flex-col items-center rounded-3xl border border-primary/10 bg-white p-8 text-center sm:p-10">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary3/20 bg-primary3/5 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-primary3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary3" />
              DON&apos;T SEE THE RIGHT ROLE?
            </span>

            <h3 className="mt-5 w-full text-2xl leading-[1.25] font-bold tracking-tight text-primary">
              Meaningful Relationships Often Begin Before the Perfect Opening
              Exists.
            </h3>

            <p className="mx-auto mt-4 w-full text-sm leading-relaxed text-muted-foreground">
              We welcome introductions from engineers, designers, product
              thinkers, delivery leaders, cloud specialists, quality
              professionals, early-career talent, and mission-aligned
              collaborators interested in growing with XylonTech.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild className="">
                <Link
                  href="https://xylontech2026stage.framer.ai/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the XT Talent Network
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" className="">
                <Link href="mailto:hr@xylontech.com">
                  <Mail className="mr-1 h-4 w-4" />
                  Email hr@xylontech.com
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobsHeaderSection
