"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

interface menuItemsProps {
  title: string
  url: string
}

const menuItems: menuItemsProps[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Insights",
    url: "/insights",
  },
  {
    title: "Careers",
    url: "/careers",
  },
  {
    title: "About",
    url: "/about",
  },
]

function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActiveLink = (url: string) => {
    if (url === "/") return pathname === "/"
    return pathname.startsWith(url)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <img
              src="/images/Logo.svg"
              alt="Logo"
              width={150}
              height={150}
              className="h-auto w-[120px] md:w-[150px]"
            />
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-2 text-black transition-colors hover:text-primary md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            {menuItems.map((item) => {
              const active = isActiveLink(item.url)

              return (
                <Link
                  key={item.url}
                  href={item.url}
                  className={`font-medium transition-colors duration-200 ${
                    active ? "text-primary2" : "text-black"
                  } hover:text-primary`}
                >
                  {item.title}
                </Link>
              )
            })}
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => {
                const active = isActiveLink(item.url)

                return (
                  <Link
                    key={item.url}
                    href={item.url}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-base font-medium transition-colors duration-200 ${
                      active ? "text-primary2" : "text-black"
                    } hover:text-primary`}
                  >
                    {item.title}
                  </Link>
                )
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
