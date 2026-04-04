import Title from "../titles/Title"


interface PropInterface{
    image: string
    title: string
    details: string
}

export default function BannerPrimary({ 
    image, 
    title,
    details,
}: PropInterface) {
  return (
    <>
    <section 
        className='w-full h-90 bg-fixed bg-cover bg-bottom relative' 
        style={{ backgroundImage: `url(${image})`}}>
        <div className="w-full h-full absolute z-10 bg-black opacity-40 inset-0" />
        <div className="w-full absolute h-full z-20 top-0 left-0">
            <div className='h-full text-white container__primary flex flex-col items-center justify-center '>
                <Title name={title} margin="mb-2" />
                <p className="font-light text-lg md:text-xl text-gray-50">
                {details}
                </p>
            </div>
        </div>
    </section>
    </>
  )
}
