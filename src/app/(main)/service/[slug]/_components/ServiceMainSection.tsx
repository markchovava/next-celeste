"use client"

import Spacer from "@/_components/spacers/Spacer"
import { NoImage } from "@/_data/sample/NoImage"
import IntroSection from "@/app/(main)/_components/sections/IntroSection"
import { ServiceImageData, ServiceInfoData } from "@/app/(main)/_data/sample/ServiceData"


interface PropInterface{
  dbData: any
}

export default function ServiceMainSection({ dbData}: PropInterface) {
  // console.log('dbData', dbData)
  return (
    <>
    <IntroSection
        brief={`
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestias.
          `}
        details={ServiceInfoData.intro}
        title='What we do?'
        iconType='solar-roof'
    />

    <section>
      <div className="container__primary grid lg:grid-cols-3 grid-cols-1 gap-6">
        {ServiceImageData.map((i, key) => (
          <ServiceImage 
            key={key} 
            id={i.id} 
            image={i.image} 
          />

        ))}
      </div>
      <Spacer />
    </section>
    
    </>
  )
}


interface pInterface{
  image: string
  id: string | number
}

function ServiceImage({
  id, 
  image
}: pInterface){

  return (
    id === 1 ?
      <div className="h-80 lg:col-span-3 col-span-1 bg-gray-400 w-full overflow-hidden drop-shadow group">
          <img 
            src={image} 
            className={`object-cover w-full h-full group-hover:scale-110 ease-in-out duration-200 transition-all`} 
            alt="Image" />
      </div>
      :
        <div className="col-span-1 h-80 bg-gray-400 w-full overflow-hidden drop-shadow group">
          <img 
            src={image} 
            className={`object-cover w-full h-full group-hover:scale-110 ease-in-out duration-200 transition-all`} 
            alt="Image" />
      </div>
  )
}
