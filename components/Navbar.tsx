import React from "react"

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
  return (
    <div className="sticky top-0 z-50 w-full border border-b border-gray-200 bg-white shadow-lg">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img src="/images/Logo.svg" alt="Logo" width={150} height={150} />
          </div>
          <div className="flex items-center gap-4">
            {menuItems.map((item, index) => (
              <a key={index} href={item.url}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
