import FooterDefault from '../_components/footers/FooterDefault'
import HeaderPrimary from '../_components/headers/HeaderPrimary'
import ContactSection from '../_components/sections/ContactSection'
import Spacer from '@/_components/spacers/Spacer'
import { PageMetaInterface } from '../_data/entity/PageMetaEntity'
import { pageMetaBySlugAction } from '../_data/actions/PageMetaActions'
import { cache } from 'react'
import { Metadata } from 'next'
import { getAppInfo } from '../_data/actions/AppInfoActions'
import ContactPage from './_components/ContactPage'
import Banner from '../_components/banner/Banner'
import FadeSlideIn from '../_components/effects/FadeSlideIn'
import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import { ContactData } from '../_data/sample/ContactData'



interface PropInterface{
    data: PageMetaInterface
    status: number | string
}

const getPageMeta = cache(async (slug: string): Promise<PropInterface | null> => {
  const data = await pageMetaBySlugAction(slug);
  return data ?? null;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageMeta = await getPageMeta('contact-us');

  if (!pageMeta?.data) {
    return {
      title: 'Contact Us',
      description: '',
    };
  }

  const { title, description, keywords } = pageMeta.data;
  let parsedKeywords: string[] = [];
  try {
    parsedKeywords = JSON.parse(keywords);
  } catch {
    parsedKeywords = [];
  }

  return {
    title,
    description,
    keywords: parsedKeywords,
    openGraph: {
      title,
      description,
    },
  };
}

const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Contact Us', href: '/contact'},
]

export default async function page() {
  const [ appInfoData ] = await Promise.all([
      getAppInfo()
    ]);

 
  
  return (
    <>
    <Banner
        title={ContactData.title}
        image={ContactData.image}
        details={ContactData.subtitle} 
    />
    <BreadCrumb data={CrumbsData} />

    <div className="bg-gray-100">
        <FadeSlideIn slideDirection="up" duration={1500}>
            <Spacer />
            <ContactSection />
        </FadeSlideIn>
    </div>


    </>
  )
}
