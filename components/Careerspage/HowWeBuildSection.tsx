"use client"

import { useRef } from "react"
import {
  Repeat2,
  ShieldCheck,
  Users,
  GitPullRequest,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "motion/react"
import SectionTitle from "../SectionTitle"

const practices: {
  title: string
  description: string
  icon: LucideIcon
}[] = [
  {
    title: "Reusable Thinking",
    description:
      "We build components, systems, and knowledge that can support more than one project.",
    icon: Repeat2,
  },
  {
    title: "Maintainable Architecture",
    description:
      "We consider security, scalability, cost, and tomorrow's development from the beginning.",
    icon: ShieldCheck,
  },
  {
    title: "Human-Centered Design",
    description:
      "Designers, engineers, product leaders, and users belong in the same conversation.",
    icon: Users,
  },
  {
    title: "Thoughtful Code Reviews",
    description:
      "Review strengthens quality, shared understanding, and professional growth.",
    icon: GitPullRequest,
  },
  {
    title: "Responsible AI Assistance",
    description:
      "AI can accelerate our work, but human judgment, security, review, and accountability remain essential.",
    icon: Sparkles,
  },
  {
    title: "Continuous Improvement",
    description:
      "Every project and every sprint should make our products—and ourselves—better.",
    icon: TrendingUp,
  },
]

function TimelineItem({ practice }: { practice: (typeof practices)[number] }) {
  const ref = useRef(null)
  const inView = useInView(ref, {
    amount: 0.6,
  })

  const Icon = practice.icon

  return (
    <div ref={ref} className="relative flex gap-6 pb-12">
      {/* Icon */}
      <motion.div
        animate={{
          scale: inView ? 1.15 : 1,
        }}
        transition={{
          duration: 0.35,
        }}
        className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
          inView
            ? "border-primary3 bg-primary text-white shadow-lg shadow-primary/20"
            : "border-border bg-background text-muted-foreground"
        }`}
      >
        <Icon className="h-5 w-5" />
      </motion.div>

      {/* Content */}
      <div className="flex-1 border-b border-border pb-10">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-lg font-bold text-primary">
            {practice.title}
          </span>
        </div>

        <p className="w-full max-w-xl leading-7 text-muted-foreground">
          {practice.description}
        </p>
      </div>
    </div>
  )
}

export default function HowWeBuildSection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 80%"],
  })

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="container">
      <SectionTitle
        title="This is how we build"
        description="Strong products grow from strong practices—and from people who care about how the work is done."
      />
      <section className="py-24">
        <div className="flex justify-center">
          <div ref={ref} className="relative w-full max-w-xl">
            {/* Gray line */}
            <div className="absolute top-5 left-5 h-[calc(100%-60px)] w-px bg-border" />

            {/* Animated line */}
            <motion.div
              style={{
                scaleY: lineScale,
                transformOrigin: "top",
              }}
              className="absolute top-5 left-5 h-[calc(100%-60px)] w-px bg-primary3"
            />

            <div>
              {practices.map((practice) => (
                <TimelineItem key={practice.title} practice={practice} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}