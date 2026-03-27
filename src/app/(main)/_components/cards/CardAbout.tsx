"use client"

import IconDefault from "@/_components/icons/IconDefault"
import { ReactNode } from "react"
import { ButtonPrimary } from "../buttons/ButtonPrimary"
import Link from "next/link"

interface PropInterface {
  title: string
  details?: ReactNode
  image?: string
  alt?: string
  href?: string
  isBtn?: boolean
}

export default function CardAbout({
  title,
  details,
  image,
  isBtn = false,
  href = '#',
  alt = "Card image",
}: PropInterface) {
  return (
    <div className="group w-full rounded-xl overflow-hidden relative bg-gray-50 drop-shadow">
      <figure className="w-full aspect-4/3 bg-gray-200">
        {image && (
          <img
            src={image}
            className="w-full h-full object-cover"
            alt={alt}
          />
        )}
      </figure>

      {/* Single sliding panel — button lives INSIDE here */}
      <div
        className={`relative bg-gray-50 px-4 pt-4 pb-6 rounded-t-2xl
          group-hover:-translate-y-8 ease-in-out duration-300 transition-transform`}
      >
        <div className="flex items-center justify-start gap-2 mb-3">
          <span className="rounded-full flex items-center justify-center w-8 h-8 bg-blue-700">
            <IconDefault type="star" css="text-white" />
          </span>
          <span className="text-gray-700 text-2xl font-semibold">
            {title}
          </span>
        </div>

        <p className="text-xl font-light">{details}</p>

        {/* Button fades + slides in once the panel has moved up */}
        {isBtn && (
        <div
          className="overflow-hidden max-h-0 opacity-0 translate-y-2 
            group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0 
            group-hover:pt-4 
            transition-all duration-300 ease-in-out"
        >
          <Link href={href}>
            <ButtonPrimary title="View More" />
          </Link>
        </div>
      )}
      </div>
    </div>
  )
}