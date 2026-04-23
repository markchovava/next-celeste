"use client"


import Spacer from "./spacers/Spacer"
import FadeSlideIn from "./effects/FadeSlideIn"
import CardAbout from "./cards/CardAbout"
import { AppInfoData } from "../_data/sample/AppInfoData"
import CardAbout2 from "./cards/CardAbout2"
import DualSection from "./sections/DualSection"
import { ServiceInfoData } from "../_data/sample/ServiceData"
import Carousel from "./carousels/Carousel"
import { useAppInfoStore } from "../_store/useAppInfoStore"
import { useEffect } from "react"
import BannerHero from "./banner/BannerHero"
import Title from "./titles/Title"
import TitleSecondary from "./titles/TitleSecondary"
import TitlePrimary from "./titles/TitlePrimary"
import { ButtonPrimary } from "./buttons/ButtonPrimary"
import Link from "next/link"


interface PropInterface{
    appInfoData: any
}

export default function HomeMainSection({
    appInfoData 
}: PropInterface) {
    const { 
        setData: setAppInfoData
    } = useAppInfoStore()


    useEffect(() => {
        appInfoData && setAppInfoData(appInfoData)
    }, [setAppInfoData])


  return (
    <>
    {/*  */}
    <BannerHero />

    {/*  */}
    <DualSection direction="left" 
        title={AppInfoData.about.title} 
        details={AppInfoData.about.intro} 
        image={AppInfoData.about.image}
        href="/about"
        btnTitle="View More" />

    <section className="w-full bg-gray-50">
        <FadeSlideIn slideDirection="up" duration={1500}>
            <Spacer />
            <div className="container__primary grid lg:grid-cols-3 grid-cols-1 gap-24">
                <CardAbout 
                    image={AppInfoData.mission.image}
                    title={AppInfoData.mission.title} 
                    details={AppInfoData.mission.details} 
                />
                <CardAbout
                    image={AppInfoData.vision.image} 
                    title={AppInfoData.vision.title} 
                    details={AppInfoData.vision.details} 
                />
                <CardAbout 
                    image={AppInfoData.social.image}
                    title={AppInfoData.social.title} 
                    details={AppInfoData.social.details} 
                />
            </div>
            <Spacer />
        </FadeSlideIn>
    </section>

    <section className="relative w-full h-full bg-slate-900 text-white">
        <FadeSlideIn slideDirection="up" duration={1500}>
            <Spacer />
            <div className="container__primary flex items-center justify-center flex-col">
                <h6 className="text-[2rem] text-center font-bold text-gray-50">
                    {AppInfoData.values.title}
                </h6>
                <hr className="w-16 border-b-6 border-amber-500" />
            </div>
            <div className="h-8" />
            <div className="container__primary grid lg:grid-cols-3 gap-12">
                {AppInfoData.values.details.slice(0, 3).map((i, key) => (
                    <CardAbout2 
                        type={key % 2 === 0 ? 'on' : 'off'} 
                        title={i.title} 
                        details={i.details} />
                ))} 
            </div>
            <Spacer />
        </FadeSlideIn>
    </section>

     {/*  */}
    <DualSection 
        direction="right" 
        image={ServiceInfoData.image}
        title={ServiceInfoData.title}
        details={ServiceInfoData.intro} 
        href="/service"
        btnTitle="Our Services" 
    />

    <section className="w-full">
        <FadeSlideIn slideDirection="up" duration={1500}>
            <Spacer />
            <div className="container__primary">
                <div className="flex items-center justify-between mb-4">
                    <TitlePrimary title={ServiceInfoData.title} />
                    <Link href={ServiceInfoData.href}>
                        <button className={`cursor-pointer font-medium border-b-4 border-transparent border-dotted 
                            hover:text-blue-700 hover:border-b-blue-700 pb-0.5`}>
                            View More
                        </button>
                    </Link>
                </div>
                <Carousel 
                    data={ServiceInfoData.services} 
                />
            </div>
            <Spacer />
        </FadeSlideIn>
    </section>



    </>
  )
}
