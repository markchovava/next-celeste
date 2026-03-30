"use client"

import { ReactNode } from "react"
import FadeSlideIn from "../effects/FadeSlideIn"
import Spacer from "../spacers/Spacer"
import { ButtonPrimary } from "../buttons/ButtonPrimary"
import Link from "next/link"
import { NoImage } from "@/_data/sample/NoImage"


interface PropInterface{
    title?: string
    direction?: 'right' | 'left'
    details: ReactNode
    btnTitle?: string
    href?: string
    image?: string
}

export default function DualSection({
    title,
    direction,
    details,
    btnTitle,
    href,
    image,
}: PropInterface) {

    switch(direction) {
        case 'left':
            return (
                <section className="w-full">
                    <FadeSlideIn slideDirection="up" duration={1500}>
                        <Spacer />
                        <div className="container__primary rounded-xl overflow-hidden grid lg:grid-cols-2 lg:h-120 bg-white drop-shadow-lg">
                           {/* TEXT */} 
                            <div className="h-full w-full px-6 py-12 text-white bg-slate-900 flex flex-col items-start justify-center">
                                {title &&
                                    <h6 className="text-3xl font-bold mb-3">{title}</h6>
                                } 
                                <p className="text-xl font-light mb-6">
                                    {details}
                                </p>
                                {btnTitle && 
                                    <Link href={href ?? '#'}>
                                        <ButtonPrimary
                                            title={btnTitle} 
                                            css='text-lg py-3.5 px-9 text-white' />
                                    </Link>
                                }
                            </div>
                            {/* IMAGE */}
                            <div className="lg:h-full h-100">
                                <img 
                                    alt='Image' 
                                    className="w-full h-full object-cover" 
                                    src={image ?? NoImage} 
                                />
                            </div>
                        </div>
                        <Spacer />
                    </FadeSlideIn>
                </section>
            )
        case 'right':
            return (
                <section className="w-full bg-white">
                    <FadeSlideIn slideDirection="up" duration={1500}>
                        <Spacer />
                        <div className="container__primary rounded-xl overflow-hidden grid lg:grid-cols-2 lg:h-120 bg-white drop-shadow-lg">
                            {/* IMAGE */}
                            <div className="lg:h-full h-100">
                                <img 
                                    alt='Image' 
                                    className="w-full h-full object-cover" 
                                    src={image ?? NoImage} />
                            </div>
                            {/* TEXT */} 
                            <div className="h-full w-full px-6 py-12 text-white bg-slate-900 flex flex-col items-start justify-center">
                                {title &&
                                    <h6 className="text-4xl font-bold mb-3">{title}</h6>
                                } 
                                <p className="text-xl font-light mb-6">
                                    {details}
                                </p>
                                {btnTitle && 
                                    <Link href={href ?? '#'}>
                                        <ButtonPrimary
                                            title={btnTitle} 
                                            css='text-lg py-3.5 px-9 text-white' />
                                    </Link>
                                }
                            </div>
                        </div>
                        <Spacer />
                    </FadeSlideIn>
                </section>
            )
        default: 
             return (
                <section className="w-full bg-white">
                    <FadeSlideIn slideDirection="up" duration={1500}>
                        <Spacer />
                        <div className="container__primary rounded-xl overflow-hidden grid lg:grid-cols-2 lg:h-120 bg-white drop-shadow-lg">
                           {/* TEXT */} 
                            <div className="h-full w-full px-6 py-12 text-white bg-slate-900 flex flex-col items-start justify-center">
                                {title &&
                                    <h6 className="text-4xl font-bold mb-3">{title}</h6>
                                } 
                                <p className="text-xl font-light mb-6">
                                    {details}
                                </p>
                                {btnTitle && 
                                    <Link href={href ?? '#'}>
                                        <ButtonPrimary
                                            title={btnTitle} 
                                            css='text-lg py-3.5 px-9 text-white' />
                                    </Link>
                                }
                            </div>
                            {/* IMAGE */}
                            <div className="lg:h-full h-100">
                                <img 
                                    alt='Image' 
                                    className="w-full h-full object-contain" 
                                    src={image ?? NoImage} />
                            </div>
                        </div>
                        <Spacer />
                    </FadeSlideIn>
                </section>
            )
    }
 
}
