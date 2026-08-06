import React from "react"

interface SectionTitleProps {
  mainTitle: string
  title: string
  description: string
}

function SectionTitle({ mainTitle, title, description }: SectionTitleProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <p className="font-semibold uppercase">{mainTitle}</p>
        <p className="text-4xl font-bold text-primary">{title}</p>
      </div>
      <p className="w-6xl text-center text-gray-600">{description}</p>
    </div>
  )
}

export default SectionTitle
