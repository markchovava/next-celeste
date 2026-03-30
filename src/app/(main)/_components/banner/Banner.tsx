"use client"
import Title from '../titles/Title'
import { NoImage } from '@/_data/sample/NoImage'


interface PropInterface{
    title: string
    details: string
    image?: string
}

export default function Banner({
    title,
    details,
    image = NoImage,
}: PropInterface) {
  return (
    <div className='bg-white'>
        <section className="w-full overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2"> 
                {/* Content Side */}
                <div className="h-90 lg:h-full lg:order-1 order-2 bg-slate-900  text-white px-[8%] flex flex-col items-start justify-center">
                    <Title name={title} margin="mb-2" />
                    <p className="font-light text-lg md:text-xl text-gray-300">
                    {details}
                    </p>
                </div>
                {/*  */}
                <div 
                    style={{ backgroundImage: `url(${image})`}} 
                    className="h-90 w-full bg__parallax lg:order-2 order-1 overflow-hidden">
                    {/* <img 
                        alt='Image' 
                        className="w-full h-full object-cover object-center" 
                        src={image} 
                    /> */}
                </div>
            </div>
        </section>
    </div>
  )
}
