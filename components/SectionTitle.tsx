import React from "react"

interface SectionTitleProps {
  mainTitle?: string
  title: string
  description?: string
}

function SectionTitle({ mainTitle, title, description }: SectionTitleProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <p className="font-semibold uppercase">{mainTitle}</p>
        <p className="text-center text-3xl font-bold text-primary md:text-4xl">
          {title}
        </p>
      </div>
      <p className="text-center text-gray-600 sm:w-full md:w-6xl">
        {description}
      </p>
    </div>
  )
}

export default SectionTitle
