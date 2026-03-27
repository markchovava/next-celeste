"use client"
import FadeSlideIn from '../effects/FadeSlideIn'
import Spacer from '../spacers/Spacer'
import IconDefault from '@/_components/icons/IconDefault'
import TitleSecondary from '../titles/TitleSecondary'
import { ReactNode } from 'react'



interface PropInterface{
  brief?: ReactNode
  details: ReactNode
  title: string
  iconType?: string
}

export default function IntroSection({
  brief,
  details,
  title,
  iconType
}: PropInterface) {
  return (
    <section className="bg-white">
      <FadeSlideIn slideDirection="up" duration={1500}>
          <Spacer />
          <div className="container__primary grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-10">
              {/*  */}
              <div className="text-gray-600 px-4 col-span-1">
                  <IconDefault type={iconType ?? ''} css="text-[3rem] text-blue-800 mb-3" />
                  <TitleSecondary title={title}  />
                  <p className="font-light text-gray-800 text-lg">
                      {brief}
                  </p>
              </div>
              {/*  */}
              <div className="lg:col-span-2 text-gray-800 col-span-1 font-light text-lg px-4">
                  {details}
              </div>
          </div>
          <Spacer />
      </FadeSlideIn>
    </section>
  )
}
