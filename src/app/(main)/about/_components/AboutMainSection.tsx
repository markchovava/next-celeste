"use client"

import { NoImage } from "@/_data/sample/NoImage"
import Title from "../../_components/titles/Title"
import DualSection from "../../_components/sections/DualSection"
import { AppInfoData } from "../../_data/sample/AppInfoData"
import FadeSlideIn from "../../_components/effects/FadeSlideIn"
import Spacer from "@/_components/spacers/Spacer"
import CardAbout from "../../_components/cards/CardAbout"
import CardAbout2 from "../../_components/cards/CardAbout2"
import IconDefault from "@/_components/icons/IconDefault"
import TitleSecondary from "../../_components/titles/TitleSecondary"
import IntroSection from "../../_components/sections/IntroSection"


interface PropInterface{
    appInfoData: any
}


export default function AboutMainSection({
    appInfoData
}: PropInterface) {
  return (
    <>

        <IntroSection
            brief={AppInfoData.about.intro}
            details={AppInfoData.about.details}
            title='Who we are?'
            iconType='solar'
        />

    {/*  */}
    <section className="bg-gray-900 text-gray-100">
        <FadeSlideIn slideDirection="up" duration={1500}>
            <Spacer />
            <div className="container__primary grid lg:grid-cols-3 grid-cols-1 gap-8">
                {/*  */}
                <div className="px-4 lg:col-span-1">
                    <IconDefault type="solar-power" css="text-[3rem] text-amber-300 mb-3" />
                    <TitleSecondary title={AppInfoData.whyUs.title}  />
                    <p className="font-light text-gray-300 text-lg">
                        {AppInfoData.whyUs.intro}
                    </p>
                </div>
                {/*  */}
                <div className="px-4 grid grid-cols-2 lg:col-span-2 gap-6">
                    {AppInfoData.whyUs.details.map((i, key) => (
                        <div key={key}>
                            <h6 className="text-amber-300 text-lg font-bold mb-1">{i.title}</h6>
                            <p className="text-lg font-light">{i.details}</p>
                        </div>

                    ))}
                </div>
            </div>
            <Spacer />
        </FadeSlideIn>
    </section>
        
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

    </>
  )
}
