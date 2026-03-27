import Banner from '../../_components/banner/Banner'
import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import ServiceMainSection from './_components/ServiceMainSection'
import { ServiceInfoData } from '../../_data/sample/ServiceData'
import FadeSlideIn from '../../_components/effects/FadeSlideIn'
import Spacer from '@/_components/spacers/Spacer'
import ContactSection from '../../_components/sections/ContactSection'


  const CrumbsData = [
      {id: 1, name: 'Home', href: '/'},
      {id: 2, name: 'Our Services', href: '/service'},
  ]

interface PropInterface {
    params: Promise<{ 
      slug: string
    }>
}

export default async function page({ params }: PropInterface) {
    const { slug } = await params;
    
    // 1. Find the specific service from your data
    const dbData = ServiceInfoData.services.find((i) => i.slug === slug)
    
    // 2. Build the breadcrumb list dynamically based on whether dbData exists
    const finalCrumbs = dbData 
        ? [...CrumbsData, { id: 3, name: dbData.name, href: dbData.href || slug }] 
        : CrumbsData;


  return (
    <>
      <Banner
          title='Our Services'
          details='Talk to us.' />
      <BreadCrumb data={finalCrumbs ?? ''} />

      <ServiceMainSection 
        dbData={dbData} />

      <div className="bg-gray-100">
          <FadeSlideIn slideDirection="up" duration={1500}>
              <Spacer />
              <ContactSection />
          </FadeSlideIn>
      </div>
      


    </>
  )
}
