"use client"
import Spacer from '@/_components/spacers/Spacer'
import CardService from '../../_components/cards/CardService'
import IntroSection from '../../_components/sections/IntroSection'
import { ServiceInfoData } from '../../_data/sample/ServiceData'
import FadeSlideIn from '../../_components/effects/FadeSlideIn'


export default function ServiceMainSection() {
  return (
    <>
    <IntroSection
        brief={''}
        details={ServiceInfoData.intro}
        title='What we do?'
        iconType='solar'
    />

    <section className='w-full bg-gray-50'>
      <FadeSlideIn slideDirection="up" duration={1500}>
        <Spacer />
        <div className='container__primary grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 lg:gap-20 gap-8'>
          {ServiceInfoData.services.map((i, key) => (
              <CardService
                key={key}
                image={i.image}
                name={i.name}
                href={i.href} 
              />
          ))}
        </div>
        <Spacer />

      </FadeSlideIn>
    </section>
    </>
  )
}
