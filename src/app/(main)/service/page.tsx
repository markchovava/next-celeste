import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import Banner from '../_components/banner/Banner'
import ServiceMainSection from './_components/ServiceMainSection'
import FadeSlideIn from '../_components/effects/FadeSlideIn'
import Spacer from '@/_components/spacers/Spacer'
import ContactSection from '../_components/sections/ContactSection'



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Our Services', href: '/service'},
]

export default function page() {
  return (
    <>
    <Banner
        title='Our Services'
        details='Talk to us.' />
    <BreadCrumb data={CrumbsData} />

    <ServiceMainSection />

    <div className="bg-gray-100">
        <FadeSlideIn slideDirection="up" duration={1500}>
            <Spacer />
            <ContactSection />
        </FadeSlideIn>
    </div>

    </>
  )
}
