"use client"


interface PropInterface{
    name: string
    margin?: string
}

export default function Title({
    name,
    margin='mb-3'
}: PropInterface) {
  return (
     <h2 className={`lg:text-[3rem] text-[2.5rem] font-bold 
        lg:leading-[3.3rem] leading-[2.8rem] ${margin}`}>
        {name}
     </h2>
  )
}
