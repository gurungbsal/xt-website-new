"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, ArrowUpRight, ArrowUp, LineChart, ChartArea } from "lucide-react"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6"
// ...existing code...

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
]

const serviceLinks = [
  {
    label: "Digital Modernization",
    href: "/services/digital-modernization",
  },
  {
    label: "Custom Software & Practical AI",
    href: "/services/software-ai",
  },
  {
    label: "Managed Engineering Delivery",
    href: "/services/managed-delivery",
  },
]

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    label: "X",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
]

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="relative pb-3 text-xs font-semibold tracking-[0.15em] text-white/40 uppercase">
      {children}
      <span className="absolute bottom-0 left-0 h-px w-6 bg-[#B8863B]" />
    </p>
  )
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative bg-primary pt-14 pb-8">
      <div className="container">
        <div className="flex w-full flex-col items-center justify-center gap-8">
          {/* Brand */}
          <div className="flex w-full flex-col items-center">
            <img
              src="/images/Logo-White.png"
              alt="XylonTech"

              className="h-auto w-100"
            />

            <p className="rounded-full border border-gray-200 px-4 py-1 text-sm leading-relaxed text-white">
              U.S.-led partnership. Globally distributed engineering.
            </p>

            <div className="mt-4 flex items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-600 hover:border-white hover:text-white"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
          {/* Connect */}
          <div className="w-2xl">
            <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">
                Let&apos;s talk
              </p>

              <p className="text-sm leading-relaxed text-white/60">
                Explore what your organization needs next.
              </p>

              <ul className="mt-1 flex flex-col gap-2.5 text-sm">
                <li>
                  <Link
                    href="/contact#discovery-call"
                    className="group flex items-center gap-1.5 font-medium text-[#E8C97A] transition-colors duration-200 hover:text-white"
                  >
                    Book a discovery call
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </li>

                <li>
                  <a
                    href="mailto:info@xylontech.com"
                    className="flex items-center gap-1.5 text-white/75 transition-colors duration-200 hover:text-white"
                  >
                    <Mail size={14} />
                    info@xylontech.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-gray-500 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-white/50">
              © 2026 XylonTech Inc. All rights reserved.
            </p>

            <p className="text-xs text-white/40">
              Based in the United States. Engineering collaboration across the
              U.S. and Nepal.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <ul className="flex gap-5 text-xs">
              <li>
                <Link
                  href="/privacy"
                  className="text-white/50 transition-colors duration-200 hover:text-white"
                >
                  Privacy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="text-white/50 transition-colors duration-200 hover:text-white"
                >
                  Terms
                </Link>
              </li>

              <li>
                <Link
                  href="/accessibility"
                  className="text-white/50 transition-colors duration-200 hover:text-white"
                >
                  Accessibility
                </Link>
              </li>
            </ul>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-200 hover:border-[#B8863B]/60 hover:text-white"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
