"use client"

interface PropInterface{
    title: string
}

export default function TitleDefault({title}: PropInterface) {
  return (
     <h2 className="lg:text-[3rem] text-[2.5rem] font-bold lg:leading-[3.3rem] leading-[2.8rem] mb-3">
      {title}
    </h2>
  )
}
