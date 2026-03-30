"use client"

interface pInterface{
    image?: string
    name: string
    href: string
}

export default function CardService({
    image, 
    name, 
    href
}: pInterface){

    return(
        <div className='group w-full rounded-xl ease-in-out duration-200 transition-all overflow-hidden drop-shadow hover:drop-shadow-xl bg-gray-50'>
            <figure className='aspect-5/4 w-full bg-gray-300 border-b border-gray-300 overflow-hidden'>
                <img 
                    alt='Image' 
                    className="w-full h-full object-contain group-hover:scale-110 ease-in-out duration-200 transition-all" 
                    src={image} 
                />
            </figure>
            <div className='px-3 pt-4 pb-3 h-16'>
                <span className='text-xl border-transparent text-gray-700 pb-[0.5px] leading-0.5'>
                    {name}
                </span> 
               {/*  <Link href={href}> 
                <span className='text-xl border-transparent text-blue-900 hover:text-blue-700 hover:border-blue-700 ease-in-out transition-all duration-200 hover:border-b-2 pb-[0.5px] leading-0.5'>
                    {name}
                </span> 
                </Link> */}
            </div>
        </div>
    )
}