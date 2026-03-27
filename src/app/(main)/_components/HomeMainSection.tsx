"use client"

import { ButtonPrimary } from "./buttons/ButtonPrimary"
import Spacer from "./spacers/Spacer"
import FadeSlideIn from "./effects/FadeSlideIn"
import CardAbout from "./cards/CardAbout"
import { AppInfoData } from "../_data/sample/AppInfoData"
import CardAbout2 from "./cards/CardAbout2"
import DualSection from "./sections/DualSection"
import { ServiceInfoData } from "../_data/sample/ServiceData"
import Carousel from "./carousels/Carousel"
import ContactSection from "./sections/ContactSection"
import { useAppInfoStore } from "../_store/useAppInfoStore"
import { useEffect } from "react"
import Title from "./titles/Title"
import BannerHero from "./banner/BannerHero"


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
        href="/about"
        btnTitle="View More" />

    <section className="w-full bg-gray-50">
        <FadeSlideIn slideDirection="up" duration={1500}>
            <Spacer />
            <div className="container__primary grid lg:grid-cols-3 grid-cols-1 gap-24">
                <CardAbout 
                    title={AppInfoData.mission.title} 
                    details={AppInfoData.mission.details} 
                />
                <CardAbout 
                    title={AppInfoData.vision.title} 
                    details={AppInfoData.vision.details} 
                />
                <CardAbout 
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
        title={ServiceInfoData.title}
        details={ServiceInfoData.intro} 
        href="/service"
        btnTitle="Our Services" 
    />

    <section className="w-full">
        <Spacer />
        <div className="container__primary">
            <Carousel 
                data={ServiceInfoData.services} 
            />
        </div>
        <Spacer />
    </section>



    </>
  )
}
